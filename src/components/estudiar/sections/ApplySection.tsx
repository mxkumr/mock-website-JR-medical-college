import Image from "next/image";
import {
  FullBleed,
  AccentTitle,
  ProcessSteps,
  ThemeLink,
} from "@/components/estudiar";
import { applySection } from "@/data/estudiar-home";

export function ApplySection() {
  return (
    <FullBleed snapOnMobile className="bg-accent-4 py-10 md:py-28">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <AccentTitle parts={[applySection.title]} />
          <ProcessSteps steps={applySection.steps} className="mt-8 md:mt-12" />
          <ThemeLink href={applySection.cta.href} className="mt-8 md:mt-10">
            {applySection.cta.label}
          </ThemeLink>
        </div>
        <div className="relative aspect-[4/3] max-h-[min(36dvh,280px)] overflow-hidden lg:aspect-[4/5] lg:max-h-none">
          <Image
            src={applySection.image}
            alt="Students applying to medical college"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </FullBleed>
  );
}
