import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FullBleed, ProgramPanels } from "@/components/site";
import { programsSection } from "@/data/home-sections";

export function ProgramsSection() {
  const { titleLeft, titleRight, subtitle, body, columns, cta } = programsSection;

  return (
    <FullBleed
      id="departments"
      snapOnMobile
      snapAlign="start"
      className="section-programs max-lg:snap-section-mobile--fit bg-white pt-[var(--section-gap-before-programs)] pb-10 max-lg:pb-10"
    >
      <header className="programs-header programs-panels-gap">
        <div className="programs-title-stack">
          <span className="programs-title-line">{titleLeft}</span>
          <div className="programs-title-row">
            <span className="programs-title-line">{titleRight}</span>
            <h2 className="programs-subtitle">{subtitle}</h2>
          </div>
        </div>
        <p className="programs-intro">{body}</p>
      </header>

      <div className="-mx-[var(--site-gutter-mobile)] lg:mx-0">
        <ProgramPanels columns={columns} />
      </div>

      <Link href={cta.href} className="programs-more-link">
        <span>{cta.label}</span>
        <ArrowRight className="size-[18px]" aria-hidden />
      </Link>
    </FullBleed>
  );
}
