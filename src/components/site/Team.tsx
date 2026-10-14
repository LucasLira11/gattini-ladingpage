import { ChevronDown } from "lucide-react";
import portrait from "@/assets/dr-carlos.jpg";
import { Reveal } from "./Reveal";

const WHATSAPP = "5531999340469";

const expertiseDrCarlos = [
  "Psicólogo clínico com 37 anos de atuação",
  "Atendimento a crianças, adolescentes, adultos e famílias",
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
        <div className="relative min-h-[60vh] w-full bg-card md:min-h-screen md:w-1/2">
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

          <Selo numero="37" legenda="Anos de prática clínica" lado="direita" />
        </div>

        <div className="flex w-full items-center justify-center bg-background px-6 py-24 md:w-1/2 md:px-16 md:py-28 lg:px-24">
          <Reveal className="max-w-xl">
            <span className="eyebrow mb-6 block">Corpo Clínico</span>
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">
              Dr. Carlos Gattini
            </h2>
            <p className="mt-3 text-[11px] tracking-[0.3em] text-gold uppercase">
              Fundador e Diretor Clínico
            </p>

            <p className="mt-10 text-lg leading-relaxed font-light text-foreground/70">
              Dedicou a carreira a compreender o funcionamento humano em profundidade. Sua prática
              combina o rigor da avaliação clínica com uma escuta sensível, sustentando vínculos
              terapêuticos que atravessam anos.
            </p>

            <Lista itens={expertiseDrCarlos} />

            <BotaoWhatsApp mensagem={msgDrCarlos} rotulo="Agendar com o Dr. Carlos" />
          </Reveal>
        </div>
      </article>

      {/* 2º PROFISSIONAL: IMAGEM NA DIREITA */}
      <article className="relative flex flex-col border-t border-gold/10 md:flex-row-reverse">
        <div
          className={`relative w-full bg-card md:min-h-screen md:w-1/2 ${
            retratoHeloisa ? "min-h-[60vh]" : "min-h-[45vh]"
          }`}
        >
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
            // parecer quebrado.
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="flex size-40 items-center justify-center border border-gold/50 md:size-52">
                <span className="text-5xl font-extralight tracking-[0.12em] text-offwhite/85 md:text-6xl">
                  HK
                </span>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-background/70 via-transparent to-transparent md:block" />

          <Selo numero="3+" legenda="Anos em avaliação neuropsicológica" lado="esquerda" />
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

            <div className="mt-12">
              <p className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
                Áreas de atuação
              </p>
              <div className="mt-4 border-t border-gold/20">
                {servicosHeloisa.map((s) => (
                  <Servico key={s.titulo} titulo={s.titulo} texto={s.texto} />
                ))}
              </div>
            </div>

            <BotaoWhatsApp mensagem={msgHeloisa} rotulo="Agendar com a Heloísa" />
          </Reveal>
        </div>
      </article>
    </section>
  );
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
      className={`absolute bottom-12 border border-gold/20 bg-background/70 p-8 backdrop-blur-xl ${
        lado === "direita" ? "right-8 md:right-12" : "left-8 md:left-12"
      }`}
    >
      <div className="mb-1 text-4xl font-extralight text-gold">{numero}</div>
      <div className="max-w-[14rem] text-[9px] tracking-[0.4em] text-foreground/50 uppercase">
        {legenda}
      </div>
    </div>
  );
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-12 space-y-5 border-t border-gold/20 pt-10">
      {itens.map((e) => (
        <li key={e} className="flex items-start gap-4 text-sm font-light text-foreground/70">
          <span className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
          {e}
        </li>
      ))}
    </ul>
  );
}

/** Serviço com o nome sempre visível e a descrição completa sob demanda. */
function Servico({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <details className="group border-b border-gold/20">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-light text-offwhite transition-colors duration-500 outline-none hover:text-gold focus-visible:text-gold [&::-webkit-details-marker]:hidden">
        {titulo}
        <ChevronDown
          className="size-4 shrink-0 text-gold transition-transform duration-500 group-open:rotate-180"
          strokeWidth={1.5}
        />
      </summary>
      <p className="pb-6 text-sm leading-relaxed font-light text-foreground/65">{texto}</p>
    </details>
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
