import { Building2, Clock, MessageCircle, Navigation, Phone, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const ENDERECO = "Av. Prudente de Morais, 840 — 7.º andar · Coração de Jesus, Belo Horizonte – MG";

/**
 * Rota por link, e não por mapa embutido.
 *
 * O iframe do Maps carrega mais de um megabyte para todo visitante, traz o
 * rastreamento do Google para dentro da página — o que hoje não acontece em
 * lugar nenhum deste site — e exigiria abrir a política de segurança para
 * conteúdo de terceiros. O link resolve o mesmo problema melhor: no celular,
 * de onde a rota costuma ser pedida, ele abre o aplicativo do Maps com a
 * navegação já montada, em vez de mostrar um mapinha que ainda precisa de
 * outro toque.
 *
 * O destino leva o nome da clínica junto do endereço, de propósito: assim o
 * Maps casa com o estabelecimento cadastrado e mostra "Clínica Gattini" como
 * destino. Só com o endereço em texto, o Google normaliza o logradouro e chega
 * a rotular o número 840 como Santo Antônio, enquanto o cadastro da clínica diz
 * Coração de Jesus.
 */
const ROTA = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Clínica Gattini, Av. Prudente de Morais, 840, Belo Horizonte - MG",
)}`;

/**
 * Perfil da clínica no Google, pelo identificador permanente do
 * estabelecimento. Esse formato não depende de sessão, de parâmetros de
 * compartilhamento nem da busca acertar o resultado — aponta sempre para este
 * cadastro. Abre com fotos, horário, telefone, avaliações e o botão de rotas.
 *
 * Se ficar vazio, o botão simplesmente não é exibido: melhor nenhum botão do
 * que um que não leva a lugar nenhum.
 */
const PERFIL_GOOGLE = "https://maps.google.com/?cid=15877131859760372136";

const msgChegada = "Olá! Estou chegando à clínica e preciso de ajuda para encontrar a entrada.";

export function ComoChegar() {
  return (
    <section
      id="como-chegar"
      className="relative flex flex-col border-t border-gold/10 bg-card md:flex-row"
    >
      <div className="w-full px-6 pt-24 md:w-[42%] md:px-16 md:py-28 lg:px-24">
        <div className="md:sticky md:top-32">
          <Reveal>
            <span className="eyebrow mb-6 block">Onde estamos</span>
            <h2 className="text-3xl leading-tight font-light md:text-[2.9rem]">
              Como <span className="italic">chegar</span>.
            </h2>
            <p className="mt-8 max-w-sm text-lg leading-relaxed font-light text-foreground/60">
              O botão de rota abre o mapa com a navegação pronta, a partir de onde você estiver.
            </p>
            <div className="mt-10 h-px w-24 bg-gold/50" />
          </Reveal>
        </div>
      </div>

      <div className="w-full border-gold/10 bg-background md:w-[58%] md:border-l">
        <Reveal>
          <div className="border-b border-gold/10 px-6 py-12 md:px-16 md:py-14 lg:px-20">
            <p className="flex items-baseline gap-4 text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
              <Building2 className="size-3.5 shrink-0 self-center" strokeWidth={1.75} />
              Endereço
            </p>
            <p className="mt-5 max-w-md text-xl leading-relaxed font-light text-offwhite">
              {ENDERECO}
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={ROTA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border border-gold/40 px-8 py-4 text-xs font-bold tracking-[0.2em] text-gold uppercase transition-colors duration-500 hover:border-gold"
              >
                <Navigation className="size-4" strokeWidth={1.75} />
                <span>Traçar rota</span>
                <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
              </a>

              {PERFIL_GOOGLE && (
                <a
                  href={PERFIL_GOOGLE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-foreground/60 uppercase transition-colors hover:text-gold"
                >
                  <Star className="size-3.5" strokeWidth={1.75} />
                  Ver no Google
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="border-b border-gold/10 px-6 py-12 md:px-16 md:py-14 lg:px-20">
            <p className="flex items-baseline gap-4 text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
              <Clock className="size-3.5 shrink-0 self-center" strokeWidth={1.75} />
              Horário de atendimento
            </p>
            <ul className="mt-6 space-y-3 text-base font-light text-foreground/70">
              <li className="flex items-center gap-4">
                <span className="h-px w-4 shrink-0 bg-gold" />
                Segunda a sexta, 8h às 21h
              </li>
              <li className="flex items-center gap-4">
                <span className="h-px w-4 shrink-0 bg-gold" />
                Sábados, 8h às 13h
              </li>
              <li className="flex items-center gap-4">
                <span className="h-px w-4 shrink-0 bg-gold" />
                Atendimento presencial e online
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="px-6 py-12 md:px-16 md:py-14 lg:px-20">
            <p className="text-[10px] font-bold tracking-[0.25em] text-gold uppercase">
              Chegou e não encontrou?
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed font-light text-foreground/60">
              Ligue ou mande mensagem — alguém orienta você até a sala.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+553132960662"
                className="inline-flex items-center gap-3 border border-gold/25 px-5 py-3 text-[11px] font-bold tracking-[0.18em] text-gold uppercase transition-colors duration-500 hover:border-gold"
              >
                <Phone className="size-3.5" strokeWidth={1.75} />
                <span className="whitespace-nowrap">(31) 3296-0662</span>
              </a>
              <a
                href={`https://wa.me/5531999340469?text=${encodeURIComponent(msgChegada)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gold/25 px-5 py-3 text-[11px] font-bold tracking-[0.18em] text-gold uppercase transition-colors duration-500 hover:border-gold"
              >
                <MessageCircle className="size-3.5" strokeWidth={1.75} />
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
