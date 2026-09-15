import { Monitor, Wifi } from "lucide-react";

type Props = {
  marca?: string | undefined;
  marcaSecundaria?: string | undefined;
  letra?: string | undefined;
  icone?: "wifi" | "monitor" | undefined;
  /** md = blocos de tutorial, sm = tabela e listas */
  tamanho?: "sm" | "md";
  className?: string;
};

/**
 * Marca da plataforma dentro de um quadro dourado — o mesmo enquadramento
 * usado no resto do site. As marcas oficiais entram como máscara, o que as
 * mantém monocromáticas e coerentes com a identidade da clínica.
 */
export function Marca({
  marca,
  marcaSecundaria,
  letra,
  icone,
  tamanho = "md",
  className = "",
}: Props) {
  const caixa = tamanho === "sm" ? "size-9" : "size-12";
  const glifo = tamanho === "sm" ? "size-4" : "size-5";

  return (
    <span
      className={`inline-flex ${caixa} shrink-0 items-center justify-center gap-1 border border-gold/25 bg-navy ${className}`}
      aria-hidden="true"
    >
      {marca && <Glifo arquivo={marca} className={marcaSecundaria ? "size-3.5" : glifo} />}
      {marcaSecundaria && <Glifo arquivo={marcaSecundaria} className="size-3.5" />}
      {!marca && letra && (
        <span
          className={`font-display font-semibold text-gold ${
            tamanho === "sm" ? "text-xs" : "text-sm"
          }`}
        >
          {letra}
        </span>
      )}
      {!marca && !letra && icone === "wifi" && (
        <Wifi className={`${glifo} text-gold`} strokeWidth={1.5} />
      )}
      {!marca && !letra && icone === "monitor" && (
        <Monitor className={`${glifo} text-gold`} strokeWidth={1.5} />
      )}
    </span>
  );
}

function Glifo({ arquivo, className }: { arquivo: string; className: string }) {
  const url = `/plataformas/${arquivo}.svg`;
  return (
    <span
      className={`${className} block bg-gold`}
      style={{
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
