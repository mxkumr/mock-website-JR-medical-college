import { FullBleed, ProcessSteps, ThemeLink } from "@/components/site";
import { applySection } from "@/data/home-sections";

export function ApplySection() {
  return (
    <FullBleed snapOnMobile className="section-apply bg-accent-4 py-10 max-lg:py-10 lg:py-5">
      <div className="site-content-wide">
        <h2 className="apply-title">{applySection.title}</h2>
        <ProcessSteps steps={applySection.steps} />
        <ThemeLink href={applySection.cta.href} className="apply-cta">
          {applySection.cta.label}
        </ThemeLink>
      </div>
    </FullBleed>
  );
}
