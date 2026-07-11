import { CampusBanner } from "@/components/site";
import { campusSection } from "@/data/home-sections";

export function CampusSection() {
  return (
    <CampusBanner
      titleLines={[campusSection.titleLeft, campusSection.titleRight]}
      body={campusSection.body}
      image={campusSection.image}
      imageAlt="JR Medical College campus"
      cta={campusSection.cta}
    />
  );
}
