/**
 * Cabeçalhos de segurança aplicados a toda resposta HTML do site.
 *
 * Um site institucional não tem login nem formulário, então o risco real não é
 * roubo de sessão: é alguém injetar script na página (por um comentário de
 * terceiro, um script de analytics comprometido, um proxy no meio do caminho)
 * ou embutir o site num iframe para enganar visitantes. A CSP abaixo fecha as
 * duas portas — só carrega o que vem daqui e das origens que o site realmente
 * usa, e recusa ser enquadrado.
 *
 * Só HTML recebe estes cabeçalhos: aplicá-los a imagens e JavaScript não
 * acrescenta proteção e só aumenta o peso de cada resposta.
 */

/** Origens de terceiros que o site carrega de fato. */
const FONTES_CSS = "https://fonts.googleapis.com";
const FONTES_ARQUIVOS = "https://fonts.gstatic.com";

/**
 * Sobre o 'unsafe-inline' em script-src: o TanStack Start emite scripts inline
 * no HTML do servidor (os dados de hidratação e cada pedaço do stream), e o
 * conteúdo deles muda a cada requisição — não há hash estável para autorizar.
 * A alternativa seria um nonce por requisição, mas ele teria de ser gerado
 * antes do render e lido de dentro de `getRouter`, que roda no cliente e no
 * servidor: exigiria estado por requisição atravessando um módulo isomórfico.
 *
 * O que se perde aqui é pequeno neste site: não há login, nem formulário, nem
 * conteúdo de terceiros — nada que o visitante escreva é devolvido na página,
 * então não existe o caminho clássico de injeção. O que a política continua
 * bloqueando é justamente o que importa: script vindo de qualquer origem que
 * não seja este domínio. Se um dia a página passar a exibir texto enviado por
 * visitantes, vale trocar isto por um nonce.
 */
const DEV = import.meta.env.DEV;

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  // Em desenvolvimento o Vite avalia módulos e abre um WebSocket para o
  // hot reload; ambos são recusados pela política de produção.
  DEV ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'" : "script-src 'self' 'unsafe-inline'",
  `style-src 'self' 'unsafe-inline' ${FONTES_CSS}`,
  `font-src 'self' ${FONTES_ARQUIVOS}`,
  "img-src 'self' data:",
  DEV ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
  "manifest-src 'self'",
  // blob: é necessário porque o runtime cria workers a partir de um Blob. Um
  // worker de blob herda a política desta página, então não abre brecha.
  "worker-src 'self' blob:",
  // Só faz sentido onde já se serve HTTPS; em localhost quebraria tudo.
  ...(DEV ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const CABECALHOS: Record<string, string> = {
  "content-security-policy": CSP,

  // Redundante com frame-ancestors, mas navegadores antigos só entendem este.
  "x-frame-options": "DENY",

  // Impede que o navegador "adivinhe" o tipo de um arquivo e execute como
  // script algo que o servidor declarou como texto ou imagem.
  "x-content-type-options": "nosniff",

  // O endereço completo da página não vaza para sites externos — os links dos
  // tutoriais apontam para Apple, Google, Netflix e afins.
  "referrer-policy": "strict-origin-when-cross-origin",

  // O site não usa câmera, microfone, localização nem pagamento. Negar por
  // escrito impede que um script injetado peça qualquer um deles.
  "permissions-policy":
    "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), geolocation=(), gyroscope=(), microphone=(), midi=(), payment=(), usb=(), interest-cohort=()",

  // Um ano de HTTPS obrigatório, subdomínios inclusos. Fora de produção fica
  // de lado: o navegador guardaria a regra e passaria a recusar localhost.
  ...(DEV ? {} : { "strict-transport-security": "max-age=31536000; includeSubDomains" }),

  // Isolamento entre abas: uma janela aberta por outro site não alcança esta.
  "cross-origin-opener-policy": "same-origin",
  "cross-origin-resource-policy": "same-origin",
};

/** Acrescenta os cabeçalhos a uma resposta HTML, preservando o corpo. */
export function comCabecalhosDeSeguranca(resposta: Response): Response {
  const tipo = resposta.headers.get("content-type") ?? "";
  if (!tipo.includes("text/html")) return resposta;

  // Respostas 101/204/205/304 não podem ser reconstruídas com corpo.
  if (resposta.status < 200 || resposta.status === 204 || resposta.status === 304) {
    return resposta;
  }

  const headers = new Headers(resposta.headers);
  for (const [nome, valor] of Object.entries(CABECALHOS)) {
    headers.set(nome, valor);
  }

  return new Response(resposta.body, {
    status: resposta.status,
    statusText: resposta.statusText,
    headers,
  });
}
