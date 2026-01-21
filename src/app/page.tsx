import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SolutionsSection from "@/components/sections/solutions";
import DifferentiatorsSection from "@/components/sections/differentiators";
import CtaSection from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <DifferentiatorsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
