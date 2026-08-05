import portrait from "@/assets/psy-1.jpeg";
import portraitTwo from "@/assets/psy-3.jpg";
import { Reveal } from "./Reveal";

const expertiseDrCarlos = [
  "Psicólogo clínico com mais de 20 anos de atuação",
  "Especialista em Neuropsicologia e avaliação cognitiva",
  "Formação continuada em desenvolvimento humano",
  "Atendimento a crianças, adolescentes, adultos e famílias",
];

// Altere com as especialidades do segundo profissional
const expertiseProfissional2 = [
  "Psicóloga clínica com abordagem humanizada",
  "Especialista em Terapia Cognitivo-Comportamental",
  "Foco no desenvolvimento infanto-juvenil",
  "Acompanhamento e orientação familiar",
];

// Mensagens pré-formatadas (URL Encoded) para o WhatsApp
const msgDrCarlos = "Olá! Gostaria de saber sobre a disponibilidade de horários para o Dr. Carlos Gattini.";
const msgDra = "Olá! Gostaria de saber sobre a disponibilidade de horários para a Dra. Nome Sobrenome.";

export function Team() {
  return (
    <section id="corpo-clinico" className="flex flex-col">

      {/* 1º PROFISSIONAL: IMAGEM NA ESQUERDA */}
      <article className="relative flex flex-col border-t border-gold/10 md:flex-row">
        <div className="relative min-h-[60vh] w-full bg-card md:min-h-screen md:w-1/2">
          <img
            src={portrait}
            alt="Retrato em preto e branco do Dr. Carlos Gattini"
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover opacity-95 grayscale"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background/70 via-transparent to-transparent md:block" />

          <div className="absolute right-8 bottom-12 border border-gold/20 bg-background/70 p-8 backdrop-blur-xl md:right-12">
            <div className="mb-1 text-4xl font-extralight text-gold">20+</div>
            <div className="text-[9px] tracking-[0.4em] text-foreground/50 uppercase">
              Anos de prática clínica
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-background px-6 py-24 md:w-1/2 md:px-16 md:py-28 lg:px-24">
          <Reveal className="max-w-xl">
            <span className="eyebrow mb-6 block">Corpo Clínico</span>
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">Dr. Carlos Gattini</h2>
            <p className="mt-3 text-[11px] tracking-[0.3em] text-gold uppercase">
              Fundador e Diretor Clínico
            </p>

            <p className="mt-10 text-lg leading-relaxed font-light text-foreground/70">
              Dedicou a carreira a compreender o funcionamento humano em profundidade. Sua prática
              combina o rigor da avaliação neuropsicológica com uma escuta clínica sensível,
              sustentando vínculos terapêuticos que atravessam anos.
            </p>

            <ul className="mt-12 space-y-5 border-t border-gold/20 pt-10">
              {expertiseDrCarlos.map((e) => (
                <li key={e} className="flex items-start gap-4 text-sm font-light text-foreground/70">
                  <span className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                  {e}
                </li>
              ))}
            </ul>

            {/* BOTÃO WHATSAPP - DR. CARLOS */}
            <div className="mt-10">
              <a
                href={`https://wa.me/553199340469?text=${encodeURIComponent(msgDrCarlos)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/50 px-6 py-3 text-sm font-medium tracking-wide text-gold transition-all hover:bg-gold hover:text-background"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Agendar com o Dr. Carlos
              </a>
            </div>
          </Reveal>
        </div>
      </article>

      {/* 2º PROFISSIONAL: IMAGEM NA DIREITA */}
      <article className="relative flex flex-col border-t border-gold/10 md:flex-row-reverse">
        <div className="relative min-h-[60vh] w-full bg-card md:min-h-screen md:w-1/2">
          <img
            src={portraitTwo}
            alt="Retrato da nova profissional"
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover opacity-95 grayscale"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-background/70 via-transparent to-transparent md:block" />

          <div className="absolute left-8 bottom-12 border border-gold/20 bg-background/70 p-8 backdrop-blur-xl md:left-12">
            <div className="mb-1 text-4xl font-extralight text-gold">10+</div>
            <div className="text-[9px] tracking-[0.4em] text-foreground/50 uppercase">
              Anos de experiência
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-background px-6 py-24 md:w-1/2 md:px-16 md:py-28 lg:px-24">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">Dra. Nome Sobrenome</h2>
            <p className="mt-3 text-[11px] tracking-[0.3em] text-gold uppercase">
              Psicóloga Clínica
            </p>

            <p className="mt-10 text-lg leading-relaxed font-light text-foreground/70">
              Escreva aqui a biografia da segunda profissional. Mantendo o mesmo estilo acolhedor,
              sóbrio e focado na excelência técnica, ciência e humanidade.
            </p>

            <ul className="mt-12 space-y-5 border-t border-gold/20 pt-10">
              {expertiseProfissional2.map((e) => (
                <li key={e} className="flex items-start gap-4 text-sm font-light text-foreground/70">
                  <span className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                  {e}
                </li>
              ))}
            </ul>

            {/* BOTÃO WHATSAPP - DRA */}
            <div className="mt-10">
              <a
                href={`https://wa.me/553199340469?text=${encodeURIComponent(msgDra)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/50 px-6 py-3 text-sm font-medium tracking-wide text-gold transition-all hover:bg-gold hover:text-background"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Agendar com a Dra. Nome
              </a>
            </div>
          </Reveal>
        </div>
      </article>

    </section>
  );
}