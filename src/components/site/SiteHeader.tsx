import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/G_SIMBOLO_WHITE.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#corpo-clinico", label: "Corpo Clínico" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-gold/15 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-16 lg:px-24">
        <a href="#top" className="flex items-center" aria-label="Clínica Gattini — início">
          <img
            src={logoWhite}
            alt="Clínica Gattini"
            width={1536}
            height={512}
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[11px] font-semibold tracking-[0.2em] text-foreground/70 uppercase transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 border border-gold/40 px-6 py-3 text-[11px] font-bold tracking-[0.2em] text-gold uppercase transition-colors duration-500 hover:border-gold"
          >
            Agendar Consulta
            <span className="h-px w-5 bg-gold transition-all duration-500 group-hover:w-8" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/10 bg-background px-6 pb-8 md:hidden">
          <nav className="flex flex-col gap-6 pt-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[11px] font-semibold tracking-[0.2em] text-foreground/70 uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-3 border border-gold/40 px-6 py-3 text-[11px] font-bold tracking-[0.2em] text-gold uppercase"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
