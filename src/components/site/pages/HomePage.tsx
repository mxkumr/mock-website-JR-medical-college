import {
  SiteHeader,
  SiteFooter,
  HeroSection,
  HeroSectionMobile,
} from "@/components/site/layout";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import {
  AboutSection,
  CampusSection,
  StatsSection,
  ProgramsSection,
  ApplySection,
  LeadersSection,
  StudentLifeSection,
  NewsSection,
  ExperienceSection,
  FormCtaSection,
} from "@/components/site/sections";

/** Full homepage layout composed from reusable site components. */
export function HomePage() {
  return (
    <>
      <SiteHeader />
      <div id="page-scroll">
        <HeroSection />
        <HeroSectionMobile />
        <main>
          <AboutSection />
          <CampusSection />
          <StatsSection />
          <ProgramsSection />
          <ApplySection />
          <LeadersSection />
          <StudentLifeSection />
          <NewsSection />
          <ExperienceSection />
          <FormCtaSection />
        </main>
        <SiteFooter />
      </div>
      <ScrollToTop />
    </>
  );
}
