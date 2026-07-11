import { FullBleed, SectionHeader, ProgramColumn, ThemeLink } from "@/components/site";
import { programsSection } from "@/data/home-sections";

export function ProgramsSection() {
  return (
    <FullBleed id="departments" snapOnMobile className="bg-white py-10 md:py-28">
      <SectionHeader
        accentParts={[programsSection.titleLeft, programsSection.titleRight]}
        accentInline
        title={programsSection.subtitle}
        className="mb-8 overflow-hidden md:mb-14"
      />
      <div className="grid gap-6 md:grid-cols-3 md:gap-10">
        {programsSection.columns.map((col) => (
          <ProgramColumn
            key={col.title}
            title={col.title}
            badge={col.badge}
            links={col.links}
          />
        ))}
      </div>
      <ThemeLink href={programsSection.cta.href} className="mt-8 md:mt-12">
        {programsSection.cta.label}
      </ThemeLink>
    </FullBleed>
  );
}
