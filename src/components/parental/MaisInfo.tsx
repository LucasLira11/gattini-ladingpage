import { Plus } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Divulgação progressiva: a página mostra a conclusão, e quem quiser o
 * raciocínio abre. Usa <details> nativo, então funciona sem JavaScript,
 * é focável pelo teclado e o Ctrl+F do navegador encontra o texto fechado.
 */
export function MaisInfo({
  rotulo,
  children,
  className = "",
}: {
  rotulo: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <details className={`group ${className}`}>
      <summary className="inline-flex cursor-pointer list-none items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] text-gold/70 uppercase transition-colors duration-500 outline-none hover:text-gold focus-visible:text-gold [&::-webkit-details-marker]:hidden">
        <Plus
          className="size-3 shrink-0 transition-transform duration-500 group-open:rotate-45"
          strokeWidth={2.5}
        />
        <span className="group-open:hidden">{rotulo}</span>
        <span className="hidden group-open:inline">Ocultar</span>
      </summary>
      <div className="mt-5">{children}</div>
    </details>
  );
}
