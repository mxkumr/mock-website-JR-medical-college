import {
  SiteHeader,
  SiteFooter,
  HeroSection,
  HeroSectionMobile,
} from "@/components/estudiar/layout";
import { ScrollToTop } from "@/components/estudiar/ScrollToTop";
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
} from "@/components/estudiar/sections";

/** Full homepage — Estudiar Home 2 layout composed from reusable components. */
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
