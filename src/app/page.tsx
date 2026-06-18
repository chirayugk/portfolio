import { Hero } from "@/components/sections/Hero";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Contact } from "@/components/sections/Contact";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const [aiSection, fullStackSection, cloudSection] = portfolioData.sections;

  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <PortfolioSection data={aiSection} />
      <PortfolioSection data={fullStackSection} variant="alternate" />
      <PortfolioSection data={cloudSection} />
      <Contact />
    </main>
  );
}
