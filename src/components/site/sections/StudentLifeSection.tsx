import { FullBleed, StudentLifeCards, ThemeLink } from "@/components/site";
import { studentLifeSection, ASSETS } from "@/data/home-sections";

export function StudentLifeSection() {
  const { titleLeft, titleRight, titleBottom, quote, cta, cards } =
    studentLifeSection;

  return (
    <FullBleed
      id="services"
      snapOnMobile
      snapAlign="start"
      boxed={false}
      className="student-life-section max-lg:snap-section-mobile--fit"
    >
      <div className="student-life-container site-container">
        <div className="student-life-header">
          <div className="student-life-title-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.shapePurple}
              alt=""
              className="student-life-shape"
              aria-hidden
            />
            <div className="student-life-title-stack">
              <span className="student-life-title-line">{titleLeft}</span>
              <span className="student-life-title-line">{titleRight}</span>
              <span className="student-life-title-line">{titleBottom}</span>
            </div>
          </div>

          <div className="student-life-content">
            <h4 className="student-life-quote">{quote}</h4>
            <ThemeLink href={cta.href} className="student-life-cta">
              {cta.label}
            </ThemeLink>
          </div>
        </div>

        <StudentLifeCards cards={cards} />
      </div>
    </FullBleed>
  );
}
