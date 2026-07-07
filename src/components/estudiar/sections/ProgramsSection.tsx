import { FullBleed, SectionHeader, ProgramColumn, ThemeLink } from "@/components/estudiar";
import { programsSection } from "@/data/estudiar-home";

export function ProgramsSection() {
  return (
    <FullBleed id="departments" className="bg-white py-20 md:py-28">
      <SectionHeader
        accentParts={[programsSection.titleLeft, programsSection.titleRight]}
        accentInline
        title={programsSection.subtitle}
        className="mb-14 overflow-hidden"
      />
      <div className="grid gap-10 md:grid-cols-3">
        {programsSection.columns.map((col) => (
          <ProgramColumn
            key={col.title}
            title={col.title}
            badge={col.badge}
            links={col.links}
          />
        ))}
      </div>
      <ThemeLink href={programsSection.cta.href} className="mt-12">
        {programsSection.cta.label}
      </ThemeLink>
    </FullBleed>
  );
}
