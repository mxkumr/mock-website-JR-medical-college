import {
  FullBleed,
  AccentTitle,
  ThemeLink,
  ImageGrid,
} from "@/components/site";
import { studentLifeSection, ASSETS } from "@/data/home-sections";

export function StudentLifeSection() {
  return (
    <FullBleed
      id="services"
      snapOnMobile
      className="relative overflow-hidden bg-white py-10 md:py-28"
    >
      <div className="relative z-10 overflow-hidden">
        <AccentTitle
          parts={[
            studentLifeSection.titleLeft,
            studentLifeSection.titleRight,
            studentLifeSection.titleBottom,
          ]}
          inline
        />
        <h4 className="mt-4 max-w-lg font-display text-h4 font-extrabold text-accent-6 md:mt-6">
          {studentLifeSection.quote}
        </h4>
        <ThemeLink href={studentLifeSection.cta.href} className="mt-4 md:mt-6">
          {studentLifeSection.cta.label}
        </ThemeLink>
      </div>

      <ImageGrid images={studentLifeSection.images} className="relative mt-8 md:mt-14" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ASSETS.shapePurple}
        alt=""
        className="pointer-events-none absolute -left-20 top-20 w-48 opacity-80 md:w-72"
        aria-hidden
      />
    </FullBleed>
  );
}
