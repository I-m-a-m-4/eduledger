import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import TopSharedMaterials from "@/components/TopSharedMaterials";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import DiscoverMaterials from "@/components/DiscoverMaterials";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <TopSharedMaterials />
      <FeaturesGrid />
      <HowItWorks />
      <DiscoverMaterials />
      <FaqSection />
      <Footer />
    </main>
  );
}
