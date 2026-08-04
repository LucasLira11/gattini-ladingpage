import roomImg from "@/assets/hero-clinic.jpg";
import detailImg from "@/assets/gallery-1.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  ["Legado", "Mais de 20 anos de prática clínica contínua."],
  ["Encontro", "Escuta atenta, vínculo e presença em cada atendimento."],
  ["Continuidade", "Acompanhamento consistente ao longo do tempo."],
  ["Transformação", "Resultados sustentados por método e evidência."],
];

export function About() {
  return (
    <section id="sobre" className="relative flex flex-col-reverse md:flex-row">
      <div className="relative min-h-[60vh] w-full bg-card md:min-h-screen md:w-1/2">
        <img
          src={roomImg}
          alt="Consultório da Clínica Gattini com duas poltronas voltadas uma para a outra"
          width={1200}
          height={1600}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 brightness-110"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-card via-transparent to-transparent md:block" />

        <div className="absolute top-1/2 left-1/2 hidden h-64 w-48 -translate-x-1/2 -translate-y-1/2 border border-gold/30 p-2 lg:block">
          <img
            src={detailImg}
            alt="Detalhe do ambiente da clínica"
            width={400}
            height={600}
            loading="lazy"
            className="h-full w-full object-cover grayscale"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-card px-6 py-24 md:w-1/2 md:px-16 md:py-28 lg:px-24">
        <Reveal className="max-w-xl">
          <span className="eyebrow mb-6 block">Sobre a Clínica</span>
          <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">
            Um legado construído em duas décadas de <span className="italic">prática clínica</span>.
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-relaxed font-light text-foreground/70">
            <p>
              Fundada pelo <span className="text-foreground">Dr. Carlos Gattini</span>, a Clínica
              Gattini nasceu do compromisso de unir rigor científico e cuidado humano — tornando-se
              referência no acompanhamento psicológico e neuropsicológico de alto padrão.
            </p>
            <p>
              Cada detalhe da experiência, do primeiro contato ao acompanhamento de longo prazo, é
              pensado para oferecer discrição, conforto e continuidade. Um ambiente sóbrio, onde a
              técnica sustenta o acolhimento e o tempo do paciente é respeitado.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-gold/20 pt-10 sm:grid-cols-2">
            {pillars.map(([title, text], i) => (
              <div key={title} className="group">
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="text-xs font-light text-gold/60">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg tracking-wide">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground/55">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
