import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "../site/Reveal";
import { CATEGORIAS, type Tutorial } from "./types";
import { Marca } from "./Marca";
import { TutorialCard } from "./TutorialCard";
import { tutoriaisGuia } from "./data/guia";
import { tutoriaisPlataformas } from "./data/plataformas";
import "./print.css";

const TODOS: Tutorial[] = [...tutoriaisGuia, ...tutoriaisPlataformas];

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function CentralTutoriais() {
  const [busca, setBusca] = useState("");
  const [aberto, setAberto] = useState<string | null>(null);

  const filtrados = useMemo(() => {
    const termo = normalizar(busca.trim());
    if (!termo) return TODOS;
    return TODOS.filter((t) =>
      normalizar(`${t.plataforma} ${t.titulo} ${t.resumo}`).includes(termo),
    );
  }, [busca]);

  function escolher(id: string) {
    setBusca("");
    setAberto(id);
  }

  return (
    <section id="tutoriais" className="border-t border-gold/10 bg-background section-pad">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16 lg:px-24">
        <Reveal>
          <span className="eyebrow mb-6 block">Central de tutoriais</span>
          <h2 className="max-w-3xl text-3xl leading-tight font-light md:text-[2.9rem]">
            Escolha a plataforma e siga o <span className="italic">passo a passo</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-foreground/60">
            Celulares, computadores, videogames e serviços de streaming. Cada tutorial traz o que
            você precisa ter em mãos antes de começar, os passos numerados, como confirmar que
            funcionou e o que aquela configuração não resolve.
          </p>
          <div className="mt-10 h-px w-24 bg-gold/50" />
        </Reveal>

        {/* Blocos de escolha, agrupados por tipo de aparelho */}
        <div className="mt-16 space-y-12">
          {CATEGORIAS.map((cat, i) => {
            const daCategoria = TODOS.filter((t) => t.categoria === cat.id);
            if (daCategoria.length === 0) return null;
            return (
              <Reveal key={cat.id} delay={i * 80}>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-foreground/40 uppercase">
                    {cat.label}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-px border border-gold/10 bg-gold/10 sm:grid-cols-3 lg:grid-cols-5">
                    {daCategoria.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => escolher(t.id)}
                        className={`group flex items-center gap-4 bg-card px-5 py-5 text-left transition-colors duration-500 hover:bg-navy ${
                          aberto === t.id ? "bg-navy" : ""
                        }`}
                      >
                        <Marca
                          marca={t.marca}
                          marcaSecundaria={t.marcaSecundaria}
                          letra={t.letra}
                          icone={t.icone}
                          tamanho="sm"
                        />
                        <span className="min-w-0 text-sm leading-tight font-light text-foreground/75 transition-colors duration-500 group-hover:text-gold">
                          {t.plataforma}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Busca */}
        <div className="relative mt-20 max-w-xl">
          <Search
            className="pointer-events-none absolute top-1/2 left-5 size-4 -translate-y-1/2 text-gold/60"
            strokeWidth={1.5}
          />
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar tutorial: iPhone, PlayStation, Netflix…"
            aria-label="Buscar tutorial"
            className="w-full border border-gold/20 bg-card py-4 pr-5 pl-14 text-base font-light text-offwhite transition-colors duration-500 outline-none placeholder:text-foreground/35 focus:border-gold/50"
          />
        </div>

        {/* Tutoriais */}
        <div className="mt-8 space-y-3">
          {filtrados.map((t) => (
            <TutorialCard
              key={t.id}
              tutorial={t}
              aberto={aberto === t.id}
              onAlternar={() => setAberto((atual) => (atual === t.id ? null : t.id))}
              onAbrir={() => setAberto(t.id)}
            />
          ))}
          {filtrados.length === 0 && (
            <p className="border border-gold/10 bg-card px-8 py-14 text-center text-base font-light text-foreground/50">
              Nenhum tutorial corresponde a essa busca.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
