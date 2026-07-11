import { FullBleed, SectionHeader } from "@/components/estudiar";
import { experienceSection } from "@/data/estudiar-home";

export function ExperienceSection() {
  return (
    <FullBleed snapOnMobile className="bg-white py-10 md:py-28">
      <SectionHeader
        title={experienceSection.title}
        subtitle={experienceSection.body}
        cta={experienceSection.cta}
      />
    </FullBleed>
  );
}
