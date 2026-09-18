import { Check, ExternalLink, Minus } from "lucide-react";
import { Reveal } from "../site/Reveal";
import { Marca } from "./Marca";
import { MaisInfo } from "./MaisInfo";
import { camadas, colunasTabela, escolhas, linhasTabela } from "./data/conteudo";

export function Ferramentas() {
  return (
    <>
      {/* As quatro recomendações */}
      <section id="ferramentas" className="border-t border-gold/10 bg-card section-pad">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16 lg:px-24">
          <Reveal>
            <span className="eyebrow mb-6 block">A escolha</span>
            <h2 className="max-w-3xl text-3xl leading-tight font-light md:text-[2.9rem]">
              As quatro que <span className="italic">valem a pena</span>.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-foreground/60">
              Todas se operam por um aplicativo no celular do responsável. Sem menu de roteador, sem
              números para digitar.
            </p>
            <div className="mt-10 h-px w-24 bg-gold/50" />
          </Reveal>

          <div className="mt-16 grid gap-px border border-gold/10 bg-gold/10 lg:grid-cols-2">
            {escolhas.map((e, i) => (
              <Reveal key={e.nome} delay={i * 80} className="h-full">
                <article className="flex h-full flex-col bg-card px-7 py-10 transition-colors duration-500 hover:bg-navy md:px-10">
                  <div className="flex items-center gap-5">
                    <Marca marca={e.marca} letra={e.letra} icone={e.icone} />
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
                        {e.selo}
                      </p>
                      <h3 className="mt-1.5 text-xl leading-tight font-light md:text-2xl">
                        {e.nome}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-7 text-base leading-relaxed font-light text-foreground/60">
                    {e.texto}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
                    {e.fatos.map(([rotulo, valor]) => (
                      <li key={rotulo} className="text-[11px] tracking-[0.12em] uppercase">
                        <span className="text-foreground/40">{rotulo}: </span>
                        <span className="text-foreground/75">{valor}</span>
                      </li>
                    ))}
                  </ul>

                  <MaisInfo
                    rotulo={`Prós e contras (${e.mais.length + e.menos.length})`}
                    className="mt-8"
                  >
                    <ul className="space-y-2.5">
                      {e.mais.map((m) => (
                        <li key={m} className="flex gap-3 text-sm leading-relaxed font-light">
                          <Check className="mt-1 size-3.5 shrink-0 text-gold" strokeWidth={2.5} />
                          <span className="text-foreground/65">{m}</span>
                        </li>
                      ))}
                      {e.menos.map((m) => (
                        <li key={m} className="flex gap-3 text-sm leading-relaxed font-light">
                          <Minus
                            className="mt-1 size-3.5 shrink-0 text-foreground/35"
                            strokeWidth={2.5}
                          />
                          <span className="text-foreground/45">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </MaisInfo>

                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap gap-2.5">
                      {e.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 border border-gold/25 px-4 py-2.5 text-[10px] font-bold tracking-[0.18em] text-gold uppercase transition-colors duration-500 hover:border-gold"
                        >
                          {l.label}
                          <ExternalLink className="size-3 opacity-60" strokeWidth={2} />
                        </a>
                      ))}
                    </div>
                    {e.observacao && (
                      <p className="mt-4 text-xs font-light text-foreground/40">{e.observacao}</p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* As três camadas */}
      <section id="camadas" className="border-t border-gold/10 bg-background section-pad">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16 lg:px-24">
          <Reveal>
            <span className="eyebrow mb-6 block">Como combinar</span>
            <h2 className="max-w-3xl text-3xl leading-tight font-light md:text-[2.9rem]">
              Nenhuma delas resolve <span className="italic">sozinha</span>.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-foreground/60">
              Cada uma cobre um pedaço. Para a grande maioria das famílias, uma da primeira coluna
              somada a uma da segunda basta.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-gold/10 bg-gold/10 md:grid-cols-3">
            {camadas.map((c, i) => (
              <Reveal key={c.n} delay={i * 100} className="h-full">
                <article className="h-full bg-card px-7 py-10 md:px-9">
                  <div className="flex items-baseline gap-5">
                    <span className="text-sm font-light text-gold/50">{c.n}</span>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-foreground/40 uppercase">
                      {c.onde}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-light">{c.titulo}</h3>
                  <p className="mt-5 text-base leading-relaxed font-light text-foreground/60">
                    {c.texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section id="comparativo" className="border-t border-gold/10 bg-card section-pad">
        <div className="mx-auto max-w-[1600px] px-6 md:px-16 lg:px-24">
          <Reveal>
            <span className="eyebrow mb-6 block">Escolha rápida</span>
            <h2 className="max-w-3xl text-3xl leading-tight font-light md:text-[2.9rem]">
              Quem faz <span className="italic">o quê</span>.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-foreground/60">
              Ache a coluna da sua queixa principal e escolha uma linha que marque “sim” nela.
            </p>
          </Reveal>

          {/* Tabela, em telas médias e grandes */}
          <Reveal>
            <div className="mt-14 hidden overflow-x-auto border border-gold/10 md:block">
              <table className="w-full min-w-[56rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gold/20">
                    {colunasTabela.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className="px-6 py-5 text-[10px] font-bold tracking-[0.2em] whitespace-nowrap text-foreground/40 uppercase"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {linhasTabela.map((l) => (
                    <tr
                      key={l.nome}
                      className="border-b border-gold/10 transition-colors duration-500 last:border-b-0 hover:bg-navy"
                    >
                      <th scope="row" className="px-6 py-5 text-left font-normal">
                        <span className="flex items-center gap-4">
                          <Marca marca={l.marca} letra={l.letra} icone={l.icone} tamanho="sm" />
                          <span>
                            <span className="block text-base font-light text-offwhite">
                              {l.nome}
                            </span>
                            <span className="block text-xs font-light text-foreground/40">
                              {l.sub}
                            </span>
                          </span>
                        </span>
                      </th>
                      {l.valores.map(([texto, positivo, nota], i) => (
                        <td key={i} className="px-6 py-5 align-middle">
                          <Valor texto={texto} positivo={positivo} nota={nota} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* No celular, cada linha vira uma ficha */}
          <div className="mt-12 space-y-4 md:hidden">
            {linhasTabela.map((l) => (
              <article key={l.nome} className="border border-gold/10 bg-background px-5 py-6">
                <div className="flex items-center gap-4 border-b border-gold/10 pb-5">
                  <Marca marca={l.marca} letra={l.letra} icone={l.icone} tamanho="sm" />
                  <div>
                    <p className="text-base font-light text-offwhite">{l.nome}</p>
                    <p className="text-xs font-light text-foreground/40">{l.sub}</p>
                  </div>
                </div>
                <dl className="mt-1">
                  {l.valores.map(([texto, positivo, nota], i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 border-b border-gold/5 py-3 last:border-b-0"
                    >
                      <dt className="text-[10px] font-bold tracking-[0.2em] text-foreground/40 uppercase">
                        {colunasTabela[i + 1]}
                      </dt>
                      <dd className="text-right">
                        <Valor texto={texto} positivo={positivo} nota={nota} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Valor({
  texto,
  positivo,
  nota,
}: {
  texto: string;
  positivo: boolean;
  nota?: string | undefined;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      {positivo ? (
        <Check className="size-3.5 shrink-0 text-gold" strokeWidth={2.5} />
      ) : (
        <Minus className="size-3.5 shrink-0 text-foreground/30" strokeWidth={2.5} />
      )}
      <span
        className={`text-sm font-light ${positivo ? "text-foreground/75" : "text-foreground/40"}`}
      >
        {texto}
        {nota && <span className="block text-xs text-foreground/35">{nota}</span>}
      </span>
    </span>
  );
}
