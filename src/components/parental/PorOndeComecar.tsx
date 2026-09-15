import { Reveal } from "../site/Reveal";
import { RichText } from "./RichText";
import { porOndeComecar, rodapeAvisos } from "./data/conteudo";

export function PorOndeComecar() {
  return (
    <section
      id="por-onde-comecar"
      className="relative flex flex-col border-t border-gold/10 bg-background md:flex-row"
    >
      <div className="w-full px-6 pt-24 md:w-[42%] md:px-16 md:py-28 lg:px-24">
        <div className="md:sticky md:top-32">
          <Reveal>
            <span className="eyebrow mb-6 block">Se você só tem uma hora</span>
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">
              Por onde <span className="italic">começar</span>.
            </h2>
            <p className="mt-8 max-w-sm text-lg leading-relaxed font-light text-foreground/60">
              A ordem abaixo entrega o maior ganho com o menor esforço. Vale a pena fazer com a
              criança do lado, explicando cada escolha.
            </p>
            <div className="mt-10 h-px w-24 bg-gold/50" />
          </Reveal>
        </div>
      </div>

      <div className="w-full border-gold/10 bg-card md:w-[58%] md:border-l">
        {porOndeComecar.map((passo, i) => (
          <Reveal key={i} delay={i * 70}>
            <article className="flex gap-6 border-b border-gold/10 px-6 py-8 last:border-b-0 md:gap-8 md:px-16 md:py-10 lg:px-20">
              <span className="text-sm font-light text-gold/50 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-xl text-base leading-relaxed font-light text-foreground/65">
                <RichText>{passo}</RichText>
              </p>
            </article>
          </Reveal>
        ))}

        <div className="space-y-4 border-t border-gold/10 px-6 py-10 md:px-16 lg:px-20">
          {rodapeAvisos.map((aviso, i) => (
            <p key={i} className="max-w-xl text-xs leading-relaxed font-light text-foreground/40">
              {aviso}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
