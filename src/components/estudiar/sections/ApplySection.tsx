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
    <FullBleed className="bg-accent-4 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <AccentTitle parts={[applySection.title]} />
          <ProcessSteps steps={applySection.steps} className="mt-12" />
          <ThemeLink href={applySection.cta.href} className="mt-10">
            {applySection.cta.label}
          </ThemeLink>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
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
