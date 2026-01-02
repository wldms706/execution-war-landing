import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TurningPointSection from "@/components/TurningPointSection";
import ProgramIntroSection from "@/components/ProgramIntroSection";
import WeeklyStructureSection from "@/components/WeeklyStructureSection";
import RulesSection from "@/components/RulesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <TurningPointSection />
      <ProgramIntroSection />
      <WeeklyStructureSection />
      <RulesSection />
      <TargetAudienceSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
