import { Fragment, type ReactNode } from "react";

/**
 * Marcação mínima usada nos textos dos tutoriais:
 *   [[Ajustes]]        → nome literal que aparece na tela do aparelho
 *   **importante**     → ênfase
 *   ((rótulo|url))     → link externo
 *   ›                  → separador de caminho de menu
 */
const PADRAO = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\(\([^)]+\)\)|›)/g;

export function RichText({ children }: { children: string }) {
  const partes = children.split(PADRAO).filter(Boolean);

  return (
    <>
      {partes.map((parte, i) => {
        if (parte.startsWith("[[")) {
          return <Tecla key={i}>{parte.slice(2, -2)}</Tecla>;
        }
        if (parte.startsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-offwhite">
              {parte.slice(2, -2)}
            </strong>
          );
        }
        if (parte.startsWith("((")) {
          const [label = "", url = "#"] = parte.slice(2, -2).split("|");
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline decoration-gold/30 underline-offset-4 transition-colors hover:decoration-gold"
            >
              {label}
            </a>
          );
        }
        if (parte === "›") {
          return (
            <span key={i} className="mx-0.5 text-gold/50" aria-hidden="true">
              ›
            </span>
          );
        }
        return <Fragment key={i}>{parte}</Fragment>;
      })}
    </>
  );
}

/** Texto exatamente como aparece escrito na tela do aparelho. */
export function Tecla({ children }: { children: ReactNode }) {
  return (
    <span className="mx-px inline-block border border-gold/25 bg-navy px-1.5 py-px align-baseline text-[0.92em] font-semibold text-offwhite/90">
      {children}
    </span>
  );
}
