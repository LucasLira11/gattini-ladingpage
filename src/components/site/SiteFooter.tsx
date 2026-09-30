import { Mail, MapPin, MessageCircle, Phone, Smartphone } from "lucide-react";
import logoWhite from "@/assets/G_SIMBOLO_WHITE.png";

const msgGeral = "Olá! Gostaria de saber sobre a disponibilidade de horários na clínica.";

export function SiteFooter() {
  return (
    <footer id="contato" className="border-t border-gold/15 bg-card pt-24 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16 lg:px-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <img
              src={logoWhite}
              alt="Clínica Gattini"
              width={509}
              height={341}
              loading="lazy"
              decoding="async"
              className="h-24 w-auto"
            />
            <p className="mt-6 text-[11px] tracking-[0.3em] text-gold uppercase">
              Psicologia <span className="text-foreground/30">.</span> Neuropsicologia{" "}
              <span className="text-foreground/30">.</span> Desenvolvimento Humano
            </p>
            <p className="mt-8 max-w-md text-lg leading-relaxed font-light text-foreground/60">
              Ciência para compreender. Humanidade para acolher. Excelência para permanecer.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-foreground/50 uppercase">Contato</h3>
              <ul className="mt-6 space-y-4 text-sm font-light text-foreground/70">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href="tel:+553132960662"
                    className="whitespace-nowrap transition-colors hover:text-gold"
                  >
                    (31) 3296-0662
                  </a>
                  <span className="text-xs text-foreground/40">fixo</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href="tel:+5531997392707"
                    className="whitespace-nowrap transition-colors hover:text-gold"
                  >
                    (31) 99739-2707
                  </a>
                  <span className="text-xs text-foreground/40">celular</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href={`https://wa.me/5531999340469?text=${encodeURIComponent(msgGeral)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap transition-colors hover:text-gold"
                  >
                    (31) 99934-0469
                  </a>
                  <span className="text-xs text-foreground/40">WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href="mailto:clinica@gattini.com.br"
                    className="whitespace-nowrap transition-colors hover:text-gold"
                  >
                    clinica@gattini.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span>
                    Av. Prudente de Morais, 840 - Coração de Jesus
                    <br />
                    7.º andar
                    <br />
                    Belo Horizonte - MG
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-foreground/50 uppercase">
                Atendimento
              </h3>
              <ul className="mt-6 space-y-4 text-sm font-light text-foreground/70">
                <li className="flex items-center gap-3">
                  <span className="h-px w-4 bg-gold" /> Segunda a sexta, 8h às 21h
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-px w-4 bg-gold" /> Sábados, 8h às 13h
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-px w-4 bg-gold" /> Presencial e online
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gold/10 pt-8">
          <p className="text-[10px] tracking-[0.2em] text-foreground/40 uppercase">
            © {new Date().getFullYear()} Clínica Gattini. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
