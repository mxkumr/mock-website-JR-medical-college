import { CampusBanner } from "@/components/estudiar";
import { campusSection } from "@/data/estudiar-home";

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
