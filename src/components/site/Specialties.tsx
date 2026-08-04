import { Reveal } from "./Reveal";

const items = [
  {
    n: "01",
    title: "Psicologia",
    text: "Psicoterapia individual e familiar com abordagem baseada em evidências, conduzida com escuta cuidadosa e sigilo absoluto.",
    bullets: ["Psicoterapia individual", "Orientação de pais", "Terapia familiar"],
  },
  {
    n: "02",
    title: "Neuropsicologia",
    text: "Avaliação e reabilitação neuropsicológica para compreender funções cognitivas, comportamento e aprendizagem.",
    bullets: ["Avaliação neuropsicológica", "Reabilitação cognitiva", "Laudos e pareceres"],
  },
  {
    n: "03",
    title: "Desenvolvimento Humano",
    text: "Acompanhamento de trajetórias de desenvolvimento, transições de vida e potencialização de habilidades.",
    bullets: ["Desenvolvimento infantil", "Transições de vida", "Habilidades socioemocionais"],
  },
];

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="relative flex flex-col border-t border-gold/10 bg-background md:flex-row"
    >
      <div className="w-full px-6 pt-24 md:w-[42%] md:px-16 md:py-28 lg:px-24">
        <div className="md:sticky md:top-32">
          <Reveal>
            <span className="eyebrow mb-6 block">Especialidades</span>
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">
              Três frentes de cuidado, uma única <span className="italic">continuidade</span>.
            </h2>
            <p className="mt-8 max-w-sm text-lg leading-relaxed font-light text-foreground/60">
              Planos construídos caso a caso e revisados ao longo do acompanhamento — para crianças,
              adolescentes, adultos e famílias.
            </p>
            <div className="mt-10 h-px w-24 bg-gold/50" />
          </Reveal>
        </div>
      </div>

      <div className="w-full border-gold/10 bg-card md:w-[58%] md:border-l">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <article className="group border-b border-gold/10 px-6 py-14 transition-colors duration-500 last:border-b-0 hover:bg-background/60 md:px-16 md:py-20 lg:px-20">
              <div className="flex items-baseline gap-6">
                <span className="text-sm font-light text-gold/50">{item.n}</span>
                <h3 className="text-2xl font-light tracking-wide transition-colors duration-500 group-hover:text-gold md:text-3xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-6 max-w-lg text-base leading-relaxed font-light text-foreground/60">
                {item.text}
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-[11px] tracking-[0.18em] text-foreground/70 uppercase"
                  >
                    <span className="h-px w-4 bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
