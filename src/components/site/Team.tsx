import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import portrait from "@/assets/dr-carlos.jpg";
import { Reveal } from "./Reveal";

const WHATSAPP = "5531999340469";

// As áreas são as abordagens e frentes do próprio currículo dele. Ficam só com
// o nome: o que sustenta cada uma está no currículo logo abaixo, e repetir aqui
// seria dizer a mesma coisa duas vezes.
const areasDrCarlos = [
  "Terapia Cognitiva e Terapia do Esquema",
  "Psicoterapia infantil e da adolescência",
  "Psicologia escolar",
];

// Currículo do Dr. Carlos. Cada item se limita ao que ele informou, sem
// descrever técnica: onde o cargo ou o período não foi informado, o item sai
// sem ele, em vez de ganhar um valor suposto. As datas da trajetória ficam
// exatamente como vieram.
const formacaoDrCarlos = [
  "Psicólogo pela UFMG (1989)",
  "Especialização em Psicologia Clínica, Psicopatologia e Psicoterapia Infantil pela Faculdade de Medicina da Universidade Federal de Minas Gerais – UFMG (1996–1997)",
  "Especialização em Adolescência pela Faculdade de Ciências Médicas de Minas Gerais (2000)",
  "Especialista em Psicologia Clínica e em Psicologia Escolar pelo Conselho Regional de Psicologia de Minas Gerais (2001)",
  "Formação em Terapia Cognitiva e em Terapia do Esquema pela Wainer Psicologia Cognitiva, de Porto Alegre, credenciada pela International Society of Schema Therapy (2014)",
];

const trajetoriaDrCarlos: Etapa[] = [
  { periodo: "Desde 1990", local: "Atuação em Psicologia Clínica" },
  {
    periodo: "01/02/1990 a 28/03/1993",
    local: "Psiquê Psicologia Clínica e Aplicada",
    cargo: "Psicólogo Clínico",
  },
  {
    periodo: "03/02/1991 a 07/07/1996",
    local: "IMEPE – Sistema de Educação Especial",
    cargo: "Psicólogo Escolar",
  },
  { periodo: "1991 a 1998", local: "Centro de Tratamento Preventivo" },
  {
    periodo: "13/04/1994 a 07/06/2000",
    local: "Caixa de Assistência dos Funcionários do Banco do Brasil (CASSI)",
  },
  { periodo: "1998", local: "CREIA – Centro de Reeducação Infanto Juvenil" },
  { local: "Colégio Horizontes" },
  { periodo: "24 anos de atuação", local: "Grupo Vida" },
];

const associacoesDrCarlos = [
  "Associado à Federação Brasileira de Terapias Cognitivas (FBTC)",
  "Membro da Associação de Terapias Cognitivas de Minas Gerais (ATC-Minas)",
  "Membro da ABENEPI-MG – Associação Brasileira de Neurologia, Psiquiatria Infantil e Profissões Afins",
];

const curriculoDrCarlos = [
  { titulo: "Formação e especializações", texto: <Marcadores itens={formacaoDrCarlos} /> },
  { titulo: "Trajetória profissional", texto: <Trajetoria etapas={trajetoriaDrCarlos} /> },
  { titulo: "Associações profissionais", texto: <Marcadores itens={associacoesDrCarlos} /> },
];

const msgDrCarlos =
  "Olá! Gostaria de saber sobre a disponibilidade de horários para o Dr. Carlos Gattini.";

/**
 * Retrato da Heloísa. Enquanto a foto não chega, o painel mostra as iniciais
 * no lugar. Quando chegar: coloque o arquivo em src/assets, importe-o no topo
 * deste arquivo e atribua aqui — o resto do layout já está pronto.
 */
const retratoHeloisa: string | undefined = undefined;

const formacaoHeloisa = [
  "Psicóloga pela UFMG (2023)",
  "Especialista em Avaliação Psicológica e Diagnóstico pela PUC Minas (2024)",
  "Mais de 3 anos em avaliação neuropsicológica",
  "Estágios na Clínica Psicológica da UEL e no CISMEPAR",
  "Iniciação científica em parceria com o STF no combate às fake news",
];

const servicosHeloisa = [
  {
    titulo: "Avaliação neuropsicológica",
    texto:
      "Mapeia o funcionamento cognitivo e comportamental da pessoa avaliada, de forma completa, por meio de testes, observação clínica, escalas e entrevistas. São avaliados inteligência, humor, personalidade, atenção e funções executivas, memória de curto e de longo prazo e cognição social. Com crianças e adolescentes, é feito também um rastreio das habilidades pedagógicas. Ao final, é entregue um laudo neuropsicológico com todas as informações e resultados da avaliação.",
  },
  {
    titulo: "Orientação profissional e de carreira",
    texto:
      "Mapeia as habilidades, os interesses e as vocações da pessoa avaliada, de forma completa, por meio de testes, observação clínica, escalas e entrevistas. Ao final, é entregue um relatório psicológico com todas as informações e resultados da avaliação.",
  },
];

const msgHeloisa =
  "Olá! Gostaria de saber sobre a disponibilidade de horários para a Heloísa Kohatsu-Muniz.";

export function Team() {
  return (
    <section id="corpo-clinico" className="flex flex-col">
      {/* 1º PROFISSIONAL: IMAGEM NA ESQUERDA */}
      <article className="relative flex flex-col border-t border-gold/10 md:flex-row">
        <div className="relative h-[60vh] w-full bg-card md:h-auto md:min-h-screen md:w-1/2">
          <Quadro>
            <img
              src={portrait}
              alt="Retrato em preto e branco do Dr. Carlos Gattini"
              width={1600}
              height={1195}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-95 grayscale"
            />
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background/70 via-transparent to-transparent md:block" />

            <Selo numero="36" legenda="Anos de prática clínica" lado="direita" />
          </Quadro>
        </div>

        <div className="flex w-full items-center justify-center bg-background px-6 py-24 md:w-1/2 md:px-16 md:py-28 lg:px-24">
          <Reveal className="max-w-xl">
            <span className="eyebrow mb-6 block">Corpo Clínico</span>
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">
              Dr. Carlos Gattini
            </h2>
            <p className="mt-3 text-[11px] tracking-[0.3em] text-gold uppercase">
              Psicólogo · CRP 04/8576
            </p>

            <p className="mt-10 text-lg leading-relaxed font-light text-foreground/70">
              Fundador e responsável técnico da Clínica Gattini. Formado em Psicologia pela UFMG e
              especialista em Psicologia Clínica, atende crianças, adolescentes, adultos e famílias.
            </p>

            <Lista itens={areasDrCarlos} rotulo="Áreas de atuação" />

            <Areas itens={curriculoDrCarlos} rotulo="Formação e trajetória" />

            <BotaoWhatsApp mensagem={msgDrCarlos} rotulo="Agendar com o Dr. Carlos" />
          </Reveal>
        </div>
      </article>

      {/* 2º PROFISSIONAL: IMAGEM NA DIREITA */}
      <article className="relative flex flex-col border-t border-gold/10 md:flex-row-reverse">
        <div
          className={`relative w-full bg-card md:h-auto md:min-h-screen md:w-1/2 ${
            retratoHeloisa ? "h-[60vh]" : "h-[max(45vh,26rem)]"
          }`}
        >
          <Quadro>
            {retratoHeloisa ? (
              <img
                src={retratoHeloisa}
                alt="Retrato de Heloísa Kohatsu-Muniz"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-95 grayscale"
              />
            ) : (
              // Sem foto ainda: as iniciais num quadro de fio dourado, no mesmo
              // vocabulário do monograma da clínica. É provisório, mas não pode
              // parecer quebrado. No celular o quadro centraliza só na parte de
              // cima, acima do selo: centralizado no bloco inteiro, o selo o
              // cobria pela metade.
              <div
                className="absolute inset-x-0 top-0 bottom-32 flex items-center justify-center md:bottom-0"
                aria-hidden="true"
              >
                <div className="flex size-40 items-center justify-center border border-gold/50 md:size-52">
                  <span className="text-5xl font-extralight tracking-[0.12em] text-offwhite/85 md:text-6xl">
                    HK
                  </span>
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-background/70 via-transparent to-transparent md:block" />

            <Selo numero="3+" legenda="Anos em avaliação neuropsicológica" lado="esquerda" />
          </Quadro>
        </div>

        <div className="flex w-full items-center justify-center bg-background px-6 py-24 md:w-1/2 md:px-16 md:py-28 lg:px-24">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">
              Heloísa Kohatsu-Muniz
            </h2>
            <p className="mt-3 text-[11px] tracking-[0.3em] text-gold uppercase">
              Psicóloga · CRP 04/76078
            </p>

            <p className="mt-10 text-lg leading-relaxed font-light text-foreground/70">
              Nasceu em São Paulo e viveu a maior parte da vida em Londrina, no Paraná. Começou a
              graduação na UEL e concluiu a formação na UFMG. Dedica-se à avaliação neuropsicológica
              de bebês, crianças, adolescentes e adultos.
            </p>

            <Lista itens={formacaoHeloisa} />

            <Areas itens={servicosHeloisa} />

            <BotaoWhatsApp mensagem={msgHeloisa} rotulo="Agendar com a Heloísa" />
          </Reveal>
        </div>
      </article>
    </section>
  );
}

/**
 * Moldura da foto no desktop: tem a altura da tela e fica presa enquanto o
 * texto ao lado rola.
 *
 * Antes a foto tinha a altura da coluna de texto inteira. Como ela é recortada
 * para cobrir o espaço, cada item de formação ou trajetória aberto deixava a
 * coluna mais alta e a foto mais ampliada — chegava quase ao dobro com tudo
 * aberto. Presa à altura da tela, ela não muda de tamanho, abra o que abrir.
 *
 * No celular a foto fica acima do texto, num bloco de altura fixa, e não muda
 * com o texto; ali a moldura só repassa essa altura, e o selo continua
 * posicionado pelo bloco de fora.
 */
function Quadro({ children }: { children: ReactNode }) {
  return <div className="h-full md:sticky md:top-0 md:h-screen">{children}</div>;
}

function Selo({
  numero,
  legenda,
  lado,
}: {
  numero: string;
  legenda: string;
  lado: "esquerda" | "direita";
}) {
  return (
    <div
      className={`absolute bottom-6 border border-gold/20 bg-background/70 p-5 backdrop-blur-xl md:bottom-12 md:p-8 ${
        lado === "direita" ? "right-6 md:right-12" : "left-6 md:left-12"
      }`}
    >
      <div className="mb-1 text-3xl font-extralight md:text-4xl text-gold">{numero}</div>
      <div className="max-w-[14rem] text-[9px] tracking-[0.4em] text-foreground/50 uppercase">
        {legenda}
      </div>
    </div>
  );
}

function Rotulo({ children }: { children: ReactNode }) {
  return <p className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase">{children}</p>;
}

function Lista({ itens, rotulo }: { itens: string[]; rotulo?: string }) {
  return (
    <div className="mt-12">
      {rotulo && <Rotulo>{rotulo}</Rotulo>}
      <ul className={`space-y-5 border-t border-gold/20 ${rotulo ? "mt-4 pt-6" : "pt-10"}`}>
        {itens.map((e) => (
          <li key={e} className="flex items-start gap-4 text-sm font-light text-foreground/70">
            <span className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Lista curta dentro de um item expansível, no mesmo traço dourado da Lista. */
function Marcadores({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-3">
      {itens.map((e) => (
        <li key={e} className="flex items-start gap-3">
          <span className="mt-2.5 h-px w-3 shrink-0 bg-gold" />
          {e}
        </li>
      ))}
    </ul>
  );
}

type Etapa = { periodo?: string; local: string; cargo?: string };

/** Experiências em ordem cronológica, com o período acima de cada uma. */
function Trajetoria({ etapas }: { etapas: Etapa[] }) {
  return (
    <ol className="space-y-4">
      {etapas.map((e) => (
        <li key={e.local}>
          {e.periodo && (
            <span className="block text-xs tracking-[0.15em] text-gold">{e.periodo}</span>
          )}
          <span className="text-foreground/80">{e.local}</span>
          {e.cargo && <> · {e.cargo}</>}
        </li>
      ))}
    </ol>
  );
}

function Areas({
  itens,
  rotulo = "Áreas de atuação",
}: {
  itens: { titulo: string; texto: ReactNode }[];
  rotulo?: string;
}) {
  return (
    <div className="mt-12">
      <Rotulo>{rotulo}</Rotulo>
      <div className="mt-4 border-t border-gold/20">
        {itens.map((a) => (
          <Area key={a.titulo} titulo={a.titulo} texto={a.texto} />
        ))}
      </div>
    </div>
  );
}

/**
 * Área com o nome sempre visível e a descrição sob demanda, abrindo e fechando
 * em deslize.
 *
 * O <details> nativo não anima: o conteúdo aparece e some de uma vez, que era o
 * "duro" da versão anterior. Aqui a altura transita de 0fr para 1fr numa linha
 * de grid — o único jeito de animar até a altura real do conteúdo sem medi-la
 * em JavaScript, e que funciona em todos os navegadores atuais. O texto entra
 * com um leve atraso e esmaecimento, para não surgir antes do espaço se abrir.
 * Quem pede menos movimento no sistema recebe a troca sem animação.
 */
function Area({ titulo, texto }: { titulo: string; texto: ReactNode }) {
  const [aberta, setAberta] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-gold/20">
      <button
        type="button"
        aria-expanded={aberta}
        aria-controls={id}
        onClick={() => setAberta((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-light text-offwhite transition-colors duration-500 outline-none hover:text-gold focus-visible:text-gold"
      >
        {titulo}
        <ChevronDown
          className={`size-4 shrink-0 text-gold transition-transform duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
            aberta ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        id={id}
        inert={!aberta}
        className={`grid transition-[grid-template-rows] duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
          aberta ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`pb-6 text-sm leading-relaxed font-light text-foreground/65 transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
              aberta ? "translate-y-0 opacity-100 delay-100" : "-translate-y-1 opacity-0"
            }`}
          >
            {typeof texto === "string" ? <p>{texto}</p> : texto}
          </div>
        </div>
      </div>
    </div>
  );
}

function BotaoWhatsApp({ mensagem, rotulo }: { mensagem: string; rotulo: string }) {
  return (
    <div className="mt-10">
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-gold/50 px-6 py-3 text-sm font-medium tracking-wide text-gold transition-all hover:bg-gold hover:text-background"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        {rotulo}
      </a>
    </div>
  );
}
