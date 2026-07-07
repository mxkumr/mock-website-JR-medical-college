import { FullBleed, SectionHeader } from "@/components/estudiar";
import { aboutSection } from "@/data/estudiar-home";

export function AboutSection() {
  return (
    <FullBleed
      id="about"
      className="bg-white pt-32 pb-20 md:mt-[120px] md:pt-0 md:pb-28"
    >
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,15%)_minmax(0,85%)] md:gap-0">
        <div className="hidden justify-end pr-12 md:flex">
          <div
            className="flex h-[83px] w-[83px] items-center justify-center rounded-full bg-accent-4"
            aria-hidden
          >
            <span className="font-display text-2xl font-extrabold text-accent-6">
              JR
            </span>
          </div>
        </div>
        <div className="max-w-[885px]">
          <SectionHeader
            title={aboutSection.title}
            subtitle={aboutSection.body}
            cta={aboutSection.cta}
          />
        </div>
      </div>
    </FullBleed>
  );
}
