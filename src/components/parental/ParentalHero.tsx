import { ShieldCheck } from "lucide-react";
import { Reveal } from "../site/Reveal";
import { RichText } from "./RichText";
import { MaisInfo } from "./MaisInfo";
import { notaClinica, notaClinicaResumo } from "./data/conteudo";

export function ParentalHero() {
  return (
    <section
      id="top"
      className="relative border-b border-gold/10 bg-background px-6 pt-40 pb-24 md:px-16 md:pt-48 md:pb-28 lg:px-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-24">
          <Reveal>
            <div className="mb-10 h-0.5 w-12 bg-gold" />
            <p className="eyebrow mb-8">Material de apoio — orientação a famílias</p>
            <h1 className="max-w-2xl text-4xl leading-[1.08] font-light tracking-tight md:text-5xl lg:text-[3.6rem]">
              Controle parental,
              <span className="block font-semibold text-gold">sem complicação.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-foreground/70">
              Os aplicativos que fazem o trabalho pesado sozinhos — filtro do Wi-Fi, horário de
              dormir e limite por aplicativo.
            </p>

            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="#tutoriais"
                className="group relative inline-flex items-center gap-4 border border-gold/40 px-8 py-4 text-xs font-bold tracking-[0.2em] text-gold uppercase transition-colors duration-500 hover:border-gold"
              >
                <span>Ir para os tutoriais</span>
                <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
              </a>
              <a
                href="#ferramentas"
                className="text-xs font-bold tracking-[0.2em] text-foreground/60 uppercase transition-colors hover:text-gold"
              >
                Ver as ferramentas
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <aside className="border border-gold/15 bg-card p-8 md:p-10">
              <ShieldCheck className="size-6 text-gold" strokeWidth={1.25} />
              <p className="mt-6 text-base leading-relaxed font-light text-foreground/65">
                <RichText>{notaClinicaResumo}</RichText>
              </p>
              <MaisInfo rotulo="Como ajustar por idade" className="mt-7">
                <div className="space-y-5">
                  {notaClinica.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed font-light text-foreground/60">
                      <RichText>{p}</RichText>
                    </p>
                  ))}
                </div>
              </MaisInfo>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
