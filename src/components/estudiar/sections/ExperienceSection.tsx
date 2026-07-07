import { FullBleed, SectionHeader } from "@/components/estudiar";
import { experienceSection } from "@/data/estudiar-home";

export function ExperienceSection() {
  return (
    <FullBleed className="bg-white py-20 md:py-28">
      <SectionHeader
        title={experienceSection.title}
        subtitle={experienceSection.body}
        cta={experienceSection.cta}
      />
    </FullBleed>
  );
}
