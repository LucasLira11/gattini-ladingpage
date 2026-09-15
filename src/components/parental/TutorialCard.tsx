import { useEffect, useRef, useState, type ReactNode } from "react";
import { AlertCircle, ChevronRight, Eye, ExternalLink, FileDown, Minus } from "lucide-react";
import type { Tutorial } from "./types";
import { RichText } from "./RichText";
import { Marca } from "./Marca";

export function TutorialCard({
  tutorial,
  aberto,
  onAlternar,
  onAbrir,
}: {
  tutorial: Tutorial;
  aberto: boolean;
  onAlternar: () => void;
  onAbrir: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const [jaRolou, setJaRolou] = useState(false);
  const [imprimindo, setImprimindo] = useState(false);
  const [origem, setOrigem] = useState("");
  const [dataHoje, setDataHoje] = useState("");

  // Só no cliente, para não divergir do HTML gerado no servidor.
  useEffect(() => {
    setOrigem(window.location.host + window.location.pathname);
    setDataHoje(new Date().toLocaleDateString("pt-BR"));
  }, []);

  // Quando a ficha é aberta a partir do bloco de plataformas, traz o topo dela
  // para a tela — senão a pessoa abre um tutorial que ficou fora do campo de visão.
  useEffect(() => {
    if (!aberto || jaRolou || !ref.current) return;
    const el = ref.current;
    const topo = el.getBoundingClientRect().top;
    if (topo < 80 || topo > window.innerHeight - 120) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setJaRolou(true);
  }, [aberto, jaRolou]);

  // Exportar em PDF = imprimir só esta ficha. A ficha precisa estar aberta
  // antes, porque o conteúdo só existe no DOM quando está expandida.
  useEffect(() => {
    if (!imprimindo || !aberto) return;

    document.body.classList.add("modo-impressao");

    const encerrar = () => setImprimindo(false);
    window.addEventListener("afterprint", encerrar);
    // Rede de segurança: alguns navegadores não disparam afterprint.
    window.addEventListener("focus", encerrar);

    const id = window.setTimeout(() => window.print(), 80);

    return () => {
      window.clearTimeout(id);
      window.removeEventListener("afterprint", encerrar);
      window.removeEventListener("focus", encerrar);
      document.body.classList.remove("modo-impressao");
    };
  }, [imprimindo, aberto]);

  function exportarPdf() {
    if (!aberto) onAbrir();
    setImprimindo(true);
  }

  return (
    <article
      ref={ref}
      id={tutorial.id}
      className={`scroll-mt-28 border transition-colors duration-500 ${
        imprimindo ? "print-alvo " : ""
      }${aberto ? "border-gold/30 bg-card" : "border-gold/10 bg-card/40 hover:border-gold/25"}`}
    >
      {/* Cabeçalho da folha impressa */}
      <div className="print-apenas">
        <div className="print-cabecalho">
          <img src="/GATTINI_LOGO_HORIZONTAL_COLOR_1.png" alt="Clínica Gattini" />
          <span className="print-eyebrow">
            Controle parental
            <br />
            Material de apoio a famílias
          </span>
        </div>
        <h2 className="print-titulo">{tutorial.titulo}</h2>
        <p className="print-resumo">{tutorial.resumo}</p>
      </div>

      <div className="nao-imprimir flex items-stretch">
        <h3 className="min-w-0 flex-1">
          <button
            type="button"
            onClick={onAlternar}
            aria-expanded={aberto}
            aria-controls={`${tutorial.id}-corpo`}
            className="flex w-full items-center gap-5 px-6 py-6 text-left md:px-8"
          >
            <Marca
              marca={tutorial.marca}
              marcaSecundaria={tutorial.marcaSecundaria}
              letra={tutorial.letra}
              icone={tutorial.icone}
            />

            <span className="min-w-0 flex-1">
              {tutorial.destaque && (
                <span className="mb-2 block text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
                  {tutorial.destaque}
                </span>
              )}
              <span className="block text-lg leading-snug font-light text-offwhite md:text-xl">
                {tutorial.titulo}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed font-light text-foreground/55">
                {tutorial.resumo}
              </span>
            </span>

            <span className="flex shrink-0 items-center gap-4">
              <span className="hidden text-[10px] tracking-[0.2em] text-foreground/40 uppercase sm:block">
                {tutorial.passos.length} passos
              </span>
              <ChevronRight
                className={`size-5 text-gold transition-transform duration-500 ${
                  aberto ? "rotate-90" : ""
                }`}
                strokeWidth={1.5}
              />
            </span>
          </button>
        </h3>

        <button
          type="button"
          onClick={exportarPdf}
          title={`Salvar o tutorial de ${tutorial.plataforma} em PDF`}
          aria-label={`Salvar o tutorial de ${tutorial.plataforma} em PDF`}
          className="group flex shrink-0 items-center gap-2.5 border-l border-gold/10 px-5 text-[10px] font-bold tracking-[0.18em] text-foreground/45 uppercase transition-colors duration-500 hover:bg-navy hover:text-gold md:px-6"
        >
          <FileDown className="size-4" strokeWidth={1.5} />
          <span className="hidden lg:inline">PDF</span>
        </button>
      </div>

      {aberto && (
        <div
          id={`${tutorial.id}-corpo`}
          className="border-t border-gold/10 px-6 pt-8 pb-10 md:px-8"
        >
          {tutorial.intro && (
            <p className="print-bloco mb-8 max-w-2xl text-base leading-relaxed font-light text-foreground/60">
              <RichText>{tutorial.intro}</RichText>
            </p>
          )}

          {tutorial.antes && (
            <Bloco titulo="Antes de começar" icone={<AlertCircle className="size-3.5" />}>
              <ul className="space-y-2">
                {tutorial.antes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-gold/60" />
                    <span>
                      <RichText>{item}</RichText>
                    </span>
                  </li>
                ))}
              </ul>
            </Bloco>
          )}

          <ol className="mt-8 space-y-0">
            {tutorial.passos.map((passo, i) => {
              const [principal = "", ...notas] = passo.split("\n");
              return (
                <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
                  <span className="relative flex shrink-0 flex-col items-center">
                    <span className="flex size-8 items-center justify-center border border-gold/30 text-[11px] font-semibold text-gold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < tutorial.passos.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-gold/15" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1 pt-1">
                    <p className="max-w-2xl text-base leading-relaxed font-light text-foreground/75">
                      <RichText>{principal}</RichText>
                    </p>
                    {notas.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {notas.map((nota) => (
                          <li
                            key={nota}
                            className="flex gap-3 text-sm leading-relaxed font-light text-foreground/50"
                          >
                            <span className="mt-2.5 h-px w-3 shrink-0 bg-gold/40" />
                            <span>
                              <RichText>{nota.replace(/^·\s*/, "")}</RichText>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {tutorial.confirmar && (
            <Bloco titulo="Como saber que deu certo" icone={<Eye className="size-3.5" />} destaque>
              <p>
                <RichText>{tutorial.confirmar}</RichText>
              </p>
            </Bloco>
          )}

          {tutorial.limites && (
            <Bloco titulo="O que isso não resolve" icone={<Minus className="size-3.5" />}>
              <ul className="space-y-2">
                {tutorial.limites.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-gold/40" />
                    <span>
                      <RichText>{item}</RichText>
                    </span>
                  </li>
                ))}
              </ul>
            </Bloco>
          )}

          {tutorial.links && (
            <div className="mt-8 flex flex-wrap gap-3">
              {tutorial.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="print-link group inline-flex items-center gap-3 border border-gold/25 px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-gold uppercase transition-colors duration-500 hover:border-gold"
                >
                  {link.label}
                  <ExternalLink className="nao-imprimir size-3 opacity-60" strokeWidth={2} />
                </a>
              ))}
            </div>
          )}

          {/* Rodapé da folha impressa */}
          <div className="print-apenas print-rodape">
            <p>
              Clínica Gattini — Psicologia · Neuropsicologia · Desenvolvimento Humano. Material de
              orientação geral; não substitui a avaliação individual de cada caso.
            </p>
            <p>
              Nomes de menu mudam com as atualizações dos aplicativos. Versão mais recente em{" "}
              {origem}
              {dataHoje && ` · impresso em ${dataHoje}`}.
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

function Bloco({
  titulo,
  icone,
  destaque = false,
  children,
}: {
  titulo: string;
  icone: ReactNode;
  destaque?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`print-bloco mt-8 border-l-2 py-1 pl-6 first:mt-0 ${
        destaque ? "border-gold" : "border-gold/25"
      }`}
    >
      <p className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
        {icone}
        {titulo}
      </p>
      <div className="mt-4 max-w-2xl text-base leading-relaxed font-light text-foreground/65">
        {children}
      </div>
    </div>
  );
}
