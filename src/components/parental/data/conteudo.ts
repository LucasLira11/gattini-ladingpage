/**
 * Conteúdo do guia, mantido exatamente como foi aprovado.
 *
 * A página mostra por padrão só os resumos daqui; o texto integral fica a um
 * clique, dentro de um <details>. Nada foi cortado — apenas dobrado.
 */

/** Uma linha por bloco, para quem só vai passar o olho. */
export const notaClinicaResumo =
  "Controle parental **apoia um combinado — não substitui a conversa.** Funciona muito melhor quando a criança sabe o que foi ativado e por quê.";

export const notaClinica = [
  "**Antes de instalar qualquer coisa:** controle parental é apoio a um combinado, não substituto dele. O efeito é muito melhor quando a criança ou o adolescente sabe o que foi ativado e por quê — inclusive porque a configuração feita às escondidas, quando descoberta (e costuma ser), custa mais confiança do que o problema que tentava resolver.",
  "Ajuste a intensidade à idade: até 8 anos, ambiente fechado e acompanhado; dos 9 aos 12, limites claros com espaço para negociação; a partir dos 13, o combinado pesa mais que o bloqueio — o filtro vira rede de proteção, não muro.",
];

export type Escolha = {
  selo: string;
  nome: string;
  marca?: string;
  letra?: string;
  icone?: "wifi";
  texto: string;
  fatos: [string, string][];
  mais: string[];
  menos: string[];
  links: { label: string; url: string }[];
  observacao?: string;
};

export const escolhas: Escolha[] = [
  {
    selo: "Comece por aqui",
    nome: "App da sua operadora",
    icone: "wifi",
    texto:
      "Vivo, Claro, TIM e Oi já colocam um controle parental básico dentro do app que você usa para ver a fatura. É o único desta lista que já está no seu celular — e para muitas famílias resolve.",
    fatos: [
      ["Custo", "incluso"],
      ["Instalação", "5 minutos"],
      ["Dificuldade", "baixa"],
    ],
    mais: [
      "Pausa a internet de um aparelho específico com um toque, e cria horários fixos de bloqueio.",
      "Tudo em português, sem conta nova, sem instalar nada no celular da criança.",
    ],
    menos: [
      "O filtro de conteúdo é limitado ou inexistente, dependendo da operadora e do modelo do roteador.",
      "Só vale dentro de casa. Não alcança o 4G.",
    ],
    links: [
      { label: "Minha Vivo", url: "https://play.google.com/store/search?q=minha%20vivo&c=apps" },
      { label: "Minha Claro", url: "https://play.google.com/store/search?q=minha%20claro&c=apps" },
      { label: "Meu TIM", url: "https://play.google.com/store/search?q=meu%20tim&c=apps" },
      { label: "Minha Oi", url: "https://play.google.com/store/search?q=minha%20oi&c=apps" },
    ],
    observacao: "No iPhone, busque o mesmo nome na App Store.",
  },
  {
    selo: "Melhor Wi-Fi",
    nome: "TP-Link Deco com HomeShield",
    marca: "tplink",
    texto:
      "Para quem topa trocar o roteador. Você substitui o aparelho da operadora por um kit Deco, e o app passa a mandar em tudo que se conecta na casa — incluindo TV e videogame.",
    fatos: [
      ["Custo", "aparelho + assinatura anual"],
      ["Instalação", "30 minutos"],
      ["Dificuldade", "baixa"],
    ],
    mais: [
      "Perfil por filho: você arrasta os aparelhos dele para o perfil e escolhe a faixa etária. O filtro de conteúdo vem pronto.",
      "Hora de dormir, tempo diário total e botão de pausa — tudo na tela inicial do app.",
      "Resolve de quebra o Wi-Fi fraco no quarto dos fundos, que é o motivo pelo qual a maioria das famílias acaba comprando.",
    ],
    menos: [
      "O controle parental completo exige a assinatura HomeShield Pro; a versão grátis é bem mais simples.",
      "Não alcança o 4G do celular.",
    ],
    links: [
      { label: "Site oficial", url: "https://www.tp-link.com/br/deco/" },
      { label: "App Store", url: "https://apps.apple.com/br/search?term=tp-link%20deco" },
      { label: "Google Play", url: "https://play.google.com/store/search?q=tp-link%20deco&c=apps" },
    ],
  },
  {
    selo: "Melhor no total",
    nome: "Qustodio",
    letra: "Q",
    texto:
      "Não mexe no Wi-Fi: instala no celular, no tablet e no computador da criança. É o único que continua valendo na casa da avó, na escola e no 4G — e o único que mostra quanto tempo ela passou em cada aplicativo.",
    fatos: [
      ["Custo", "assinatura anual"],
      ["Instalação", "15 min por aparelho"],
      ["Dificuldade", "baixa"],
    ],
    mais: [
      "Um painel único com todos os aparelhos e todos os filhos, em português.",
      "Limite por aplicativo, horários, bloqueio de sites por categoria e relatório semanal por e-mail.",
      "Alerta quando a criança tenta desinstalar — o furo mais comum nas ferramentas gratuitas.",
    ],
    menos: [
      "Precisa ser instalado em cada aparelho, um a um, com o aparelho em mãos.",
      "No iPhone, algumas funções dependem de permissões que a Apple limita; no Android o controle é mais completo.",
    ],
    links: [
      { label: "Site oficial", url: "https://www.qustodio.com/pt/" },
      { label: "App Store", url: "https://apps.apple.com/br/search?term=qustodio" },
      { label: "Google Play", url: "https://play.google.com/store/search?q=qustodio&c=apps" },
    ],
  },
  {
    selo: "Melhor filtro",
    nome: "NextDNS",
    marca: "nextdns",
    texto:
      "Um filtro que vale em qualquer rede, para a casa inteira. Bloqueia pornografia, jogos de aposta e redes sociais por categoria — e tem app próprio que protege o celular também no 4G.",
    fatos: [
      ["Custo", "assinatura anual"],
      ["Instalação", "20 minutos"],
      ["Dificuldade", "média"],
    ],
    mais: [
      "Bloqueia categorias inteiras com um botão: conteúdo adulto, apostas, TikTok, Instagram.",
      "Mostra a lista do que foi acessado e do que foi barrado — útil para conversar com base em fato, não em suspeita.",
      "Não deixa o Wi-Fi lento e não precisa de aparelho novo.",
    ],
    menos: [
      "O painel é em inglês e a configuração tem um par de passos técnicos.",
      "Filtra conteúdo, mas não controla tempo de uso nem tempo por aplicativo.",
    ],
    links: [
      { label: "Painel oficial", url: "https://nextdns.io" },
      { label: "App Store", url: "https://apps.apple.com/br/search?term=nextdns" },
      { label: "Google Play", url: "https://play.google.com/store/search?q=nextdns&c=apps" },
    ],
  },
];

export const camadas = [
  {
    n: "01",
    onde: "Na casa",
    titulo: "O Wi-Fi",
    texto:
      "App da operadora, TP-Link Deco ou NextDNS. Cobre tudo que se conecta: celular, tablet, PC, TV, videogame. Não alcança o 4G nem o Wi-Fi da escola.",
  },
  {
    n: "02",
    onde: "No aparelho",
    titulo: "O celular e o PC",
    texto:
      "Qustodio, ou o controle nativo grátis — Tempo de Uso, Family Link, Segurança da Família. Viaja junto com a criança e é o único que limita tempo por aplicativo.",
  },
  {
    n: "03",
    onde: "Dentro do app",
    titulo: "YouTube e streaming",
    texto:
      "Perfil infantil, modo restrito e PIN de perfil. Os filtros das outras camadas não enxergam o que acontece dentro de um app já liberado.",
  },
];

export const colunasTabela = [
  "Ferramenta",
  "Horários",
  "Tempo por app",
  "Filtro de sites",
  "Vale no 4G",
  "Custo",
];

export type LinhaTabela = {
  nome: string;
  sub: string;
  marca?: string;
  letra?: string;
  icone?: "wifi" | "monitor";
  valores: [string, boolean, string?][];
};

export const linhasTabela: LinhaTabela[] = [
  {
    nome: "App da operadora",
    sub: "Vivo, Claro, TIM",
    icone: "wifi",
    valores: [
      ["Sim", true],
      ["Não", false],
      ["Básico", false],
      ["Não", false],
      ["Incluso", true],
    ],
  },
  {
    nome: "Tempo de Uso",
    sub: "iPhone, iPad, Mac",
    marca: "apple",
    valores: [
      ["Sim", true],
      ["Sim", true],
      ["Sim", true],
      ["Sim", true],
      ["Grátis", true],
    ],
  },
  {
    nome: "Family Link",
    sub: "Android",
    marca: "android",
    valores: [
      ["Sim", true],
      ["Sim", true],
      ["Só no Chrome", true],
      ["Sim", true],
      ["Grátis", true],
    ],
  },
  {
    nome: "TP-Link Deco",
    sub: "HomeShield Pro",
    marca: "tplink",
    valores: [
      ["Sim", true],
      ["Não", false],
      ["Sim", true, "por faixa etária"],
      ["Não", false],
      ["Aparelho + anual", true],
    ],
  },
  {
    nome: "Qustodio",
    sub: "Todos os aparelhos",
    letra: "Q",
    valores: [
      ["Sim", true],
      ["Sim", true],
      ["Sim", true],
      ["Sim", true],
      ["Anual", true],
    ],
  },
  {
    nome: "NextDNS",
    sub: "Rede + app",
    marca: "nextdns",
    valores: [
      ["Não", false],
      ["Não", false],
      ["Sim", true, "por categoria"],
      ["Sim", true],
      ["Anual", true],
    ],
  },
  {
    nome: "Segurança da Família",
    sub: "Windows",
    icone: "monitor",
    valores: [
      ["Sim", true],
      ["Sim", true],
      ["Só no Edge", true],
      ["—", false],
      ["Grátis", true],
    ],
  },
];

export const porOndeComecar = [
  "**Converse antes.** Diga o que vai ser ativado, por quê, e o que acontece se der certo — mais autonomia, não menos.",
  "**Abra o app da sua operadora** e crie o bloqueio de horário noturno. Leva cinco minutos.",
  "**Horário de dormir no aparelho** — Tempo de Uso ou Family Link. É a mudança com maior impacto sobre sono, humor e rendimento escolar.",
  "**Trave a instalação de apps.** Sem isso, tudo o mais é contornável com um VPN gratuito baixado em trinta segundos.",
  "**Só então decida o que assinar.** Se a queixa for conteúdo, NextDNS; se for tempo e uso fora de casa, Qustodio; se for Wi-Fi ruim somado a controle, o Deco.",
  "**Revise em duas semanas.** Limite que não se ajusta vira guerra: o combinado é o que se revisa, não a regra que se impõe.",
];

export const rodapeAvisos = [
  "Nenhuma das ferramentas citadas tem relação comercial com esta clínica. Preços, planos e nomes de menu mudam com as atualizações dos aplicativos — confirme o que está incluso antes de assinar, e procure o termo mais próximo na mesma tela quando um item não aparecer com o nome exato.",
  "Material de orientação geral. Não substitui a avaliação individual de cada caso.",
];
