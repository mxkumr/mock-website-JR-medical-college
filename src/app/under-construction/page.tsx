import type { Metadata } from "next";
import { UnderConstructionPage } from "@/components/site/pages/UnderConstructionPage";

export const metadata: Metadata = {
  title: "Under Construction | JR Medical College and Hospital",
  description: "This page is currently under construction. Please check back soon.",
};

export default function Page() {
  return <UnderConstructionPage />;
}
