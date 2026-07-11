import {
  FullBleed,
  SectionHeader,
  PriceList,
} from "@/components/estudiar";
import { leadersSection } from "@/data/estudiar-home";

export function LeadersSection() {
  return (
    <FullBleed snapOnMobile className="bg-white py-10 md:py-28">
      <SectionHeader
        accentParts={[leadersSection.titleLeft, leadersSection.titleRight]}
        accentInline
        title={leadersSection.subtitle}
        cta={leadersSection.financialAid}
      />

      <div className="mt-8 grid gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="font-display text-h3 font-bold text-accent-6">
            {leadersSection.tuitionTitle}
          </h3>
          <p className="text-body mt-4">{leadersSection.tuitionBody}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {leadersSection.priceLists.map((list) => (
            <PriceList
              key={list.period}
              period={list.period}
              items={list.items}
              total={list.total}
            />
          ))}
        </div>
      </div>
    </FullBleed>
  );
}
