import portrait from "@/assets/psy-1.jpeg";
import { Reveal } from "./Reveal";

const expertise = [
  "Psicólogo clínico com mais de 20 anos de atuação",
  "Especialista em Neuropsicologia e avaliação cognitiva",
  "Formação continuada em desenvolvimento humano",
  "Atendimento a crianças, adolescentes, adultos e famílias",
];

export function Team() {
  return (
    <section
      id="corpo-clinico"
      className="relative flex flex-col border-t border-gold/10 md:flex-row"
    >
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
            {expertise.map((e) => (
              <li key={e} className="flex items-start gap-4 text-sm font-light text-foreground/70">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
