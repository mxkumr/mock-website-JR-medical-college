import { StatGrid } from "@/components/estudiar";
import { statsSection } from "@/data/estudiar-home";

export function StatsSection() {
  return (
    <StatGrid
      stats={statsSection.stats}
      links={statsSection.links}
      className="snap-section-mobile"
    />
  );
}
