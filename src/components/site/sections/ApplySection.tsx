import { FullBleed, ProcessSteps, ThemeLink } from "@/components/site";
import { applySection } from "@/data/home-sections";

export function ApplySection() {
  return (
    <FullBleed
      snapOnMobile
      className="bg-accent-4 py-10 md:py-28"
      innerClassName="px-5 lg:px-[30px]"
    >
      <div className="max-w-[1060px]">
        <h2 className="apply-title">{applySection.title}</h2>
        <ProcessSteps steps={applySection.steps} />
        <ThemeLink href={applySection.cta.href} className="apply-cta">
          {applySection.cta.label}
        </ThemeLink>
      </div>
    </FullBleed>
  );
}
