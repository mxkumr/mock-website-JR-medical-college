import { GraduationCap } from "lucide-react";
import { FullBleed, PriceList, ThemeLink } from "@/components/site";
import { leadersSection } from "@/data/home-sections";

export function LeadersSection() {
  const { tuitionTitle, tuitionBody, priceLists, cta } = leadersSection;

  return (
    <FullBleed snapOnMobile boxed={false} className="tuition-section py-0 md:py-0">
      <div className="tuition-section-grid">
        <div className="tuition-intro">
          <GraduationCap className="tuition-intro-icon" aria-hidden />
          <h3 className="tuition-intro-title">{tuitionTitle}</h3>
          <p className="tuition-intro-body">{tuitionBody}</p>
          <ThemeLink href={cta.href} light className="tuition-intro-cta">
            {cta.label}
          </ThemeLink>
        </div>

        <div className="tuition-cards">
          {priceLists.map((list) => (
            <div key={list.period} className="tuition-price-card">
              <PriceList
                period={list.period}
                items={list.items}
                detailsCta={list.detailsCta}
              />
            </div>
          ))}
        </div>
      </div>
    </FullBleed>
  );
}
