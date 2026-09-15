import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ParentalHero } from "@/components/parental/ParentalHero";
import { Ferramentas } from "@/components/parental/Ferramentas";
import { CentralTutoriais } from "@/components/parental/CentralTutoriais";
import { PorOndeComecar } from "@/components/parental/PorOndeComecar";

export const Route = createFileRoute("/controle-parental")({
  head: () => ({
    meta: [
      { title: "Controle Parental — Clínica Gattini" },
      {
        name: "description",
        content:
          "Central de tutoriais de controle parental da Clínica Gattini: celulares, computadores, videogames e streaming. Limite de tempo, classificação etária, bloqueio de compras e privacidade, passo a passo.",
      },
      {
        property: "og:title",
        content: "Controle Parental — Clínica Gattini",
      },
      {
        property: "og:description",
        content:
          "Os aplicativos que fazem o trabalho pesado sozinhos, e o passo a passo para configurar cada plataforma: iPhone, Android, computador, PlayStation, Xbox, Nintendo, Netflix, YouTube, Disney+ e mais.",
      },
    ],
  }),
  component: ControleParental,
});

function ControleParental() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ParentalHero />
        <Ferramentas />
        <CentralTutoriais />
        <PorOndeComecar />
      </main>
      <SiteFooter />
    </div>
  );
}
