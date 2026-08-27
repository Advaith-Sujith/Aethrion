import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import PlatformOverview from "@/components/sections/PlatformOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import TechDifferentiators from "@/components/sections/TechDifferentiators";
import ProductModules from "@/components/sections/ProductModules";
import SentimentAnalytics from "@/components/sections/SentimentAnalytics";
import Industries from "@/components/sections/Industries";
import Customer360 from "@/components/sections/Customer360";
import AgentExperience from "@/components/sections/AgentExperience";
import ManagerDashboard from "@/components/sections/ManagerDashboard";
import Architecture from "@/components/sections/Architecture";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactModal from "@/components/ui/ContactModal";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <PlatformOverview />
        <HowItWorks />
        <TechDifferentiators />
        <ProductModules />
        <SentimentAnalytics />
        <Industries />
        <Customer360 />
        <AgentExperience />
        <ManagerDashboard />
        <Architecture />
        <FinalCTA />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
