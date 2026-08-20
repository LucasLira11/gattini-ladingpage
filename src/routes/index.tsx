import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Specialties } from "@/components/site/Specialties";
import { Team } from "@/components/site/Team";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Gattini" },
      {
        name: "description",
        content:
          "Há mais de 20 anos, a Clínica Gattini une ciência e acolhimento em psicologia, neuropsicologia e desenvolvimento humano para crianças, adolescentes, adultos e famílias.",
      },
      { property: "og:title", content: "Clínica Gattini — Psicologia e Neuropsicologia" },
      {
        property: "og:description",
        content:
          "Ciência para compreender. Humanidade para acolher. Excelência para permanecer. Clínica fundada pelo Dr. Carlos Gattini.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Team />
      </main>
      <SiteFooter />
    </div>
  );
}
