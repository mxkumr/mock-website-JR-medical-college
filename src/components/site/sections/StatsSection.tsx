import { StatGrid } from "@/components/site";
import { statsSection } from "@/data/home-sections";

export function StatsSection() {
  return (
    <StatGrid
      stats={statsSection.stats}
      links={statsSection.links}
    />
  );
}
