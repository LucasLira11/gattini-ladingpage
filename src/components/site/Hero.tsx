import heroImg from "@/assets/hero-clinic.jpeg";
import { Reveal } from "./Reveal";

const msgGeral = "Olá! Gostaria de saber sobre a disponibilidade de horários na clínica.";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col border-b border-gold/10 md:flex-row"
    >
      <div className="flex w-full items-center justify-center bg-background px-6 pt-32 pb-20 md:w-1/2 md:px-16 md:py-24 lg:px-24">
        <div className="max-w-xl">
          <Reveal>
            <div className="mb-10 h-0.5 w-12 bg-gold" />
            <p className="eyebrow mb-8">Clínica Gattini — desde 2004</p>
            <h1 className="text-4xl leading-[1.08] font-light tracking-tight md:text-5xl lg:text-[3.9rem]">
              Ciência para compreender.
              <span className="block">Humanidade para acolher.</span>
              <span className="block font-semibold text-gold">Excelência para permanecer.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 max-w-md text-lg leading-relaxed font-light text-foreground/70">
              Mais de duas décadas dedicadas à psicologia, à neuropsicologia e ao desenvolvimento
              humano — para crianças, adolescentes, adultos e famílias.
            </p>

            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/553199340469?text=${encodeURIComponent(msgGeral)}`}
                className="group relative inline-flex items-center gap-4 border border-gold/40 px-8 py-4 text-xs font-bold tracking-[0.2em] text-gold uppercase transition-colors duration-500 hover:border-gold"
              >
                <span>Agendar Consulta</span>
                <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
              </a>
              <a
                href="#especialidades"
                className="text-xs font-bold tracking-[0.2em] text-foreground/60 uppercase transition-colors hover:text-gold"
              >
                Conhecer Especialidades
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative min-h-[60vh] w-full bg-background md:min-h-screen md:w-1/2">
        <img
          src={heroImg}
          alt="Sala de atendimento da Clínica Gattini em tons escuros, com poltrona de couro e luminária de latão"
          width={1200}
          height={1600}
          className="h-full w-full object-cover opacity-95 brightness-125 transition-all duration-[1400ms] hover:brightness-150"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background via-background/25 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden" />

        {/* --- ALTERAÇÃO AQUI: Texto com fundo escuro e desfoque --- */}
        <div className="absolute bottom-12 left-8 flex items-center gap-4 md:left-12">
          <div className="h-12 w-px bg-gold" />
          <span className="bg-background/20 px-3 py-1.5 text-[10px] tracking-[0.4em] text-gold uppercase backdrop-blur-[3px]">
            Psicologia de alto padrão
          </span>
        </div>
      </div>
    </section>
  );
}