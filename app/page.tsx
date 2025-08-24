import HeroMinimal from "@/components/HeroMinimal";
import ServicesNew from "@/components/ServicesNew";
import PortfolioNew from "@/components/PortfolioNew";
import AboutNew from "@/components/AboutNew";
import ContactNew from "@/components/ContactNew";
import FooterModern from "@/components/FooterModern";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <HeroMinimal />
        <ServicesNew />
        <PortfolioNew />
        <AboutNew />
        <ContactNew />
      </main>
      <FooterModern />
    </>
  );
}