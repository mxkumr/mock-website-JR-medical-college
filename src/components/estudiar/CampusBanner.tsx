import Image from "next/image";
import { ThemeLink } from "./ThemeLink";

type CampusBannerProps = {
  titleLines: [string, string];
  body: string;
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
};

export function CampusBanner({
  titleLines,
  body,
  image,
  imageAlt,
  cta,
}: CampusBannerProps) {
  return (
    <section className="snap-section-mobile snap-section-mobile--start snap-section-mobile--fit overflow-x-hidden bg-white md:mt-[280px]">
      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
        <div className="relative md:min-h-[520px]">
          <h2 className="relative z-20 flex flex-col items-start justify-start text-accent-title -ml-2.5 pl-[clamp(1.25rem,6vw,6.25rem)] text-accent-6">
            <span>{titleLines[0]}</span>
            <span>{titleLines[1]}</span>
          </h2>
          <div className="relative z-10 -mt-[calc(var(--text-accent-title)*0.8)] w-full bg-accent-2 pb-6 pl-[clamp(1.25rem,6vw,6.25rem)] pr-8 pt-[calc(var(--text-accent-title)*0.8)] md:w-[72%] md:pb-[300px]">
            <p className="text-body max-w-md">{body}</p>
            <ThemeLink href={cta.href} className="mt-4 md:mt-6">
              {cta.label}
            </ThemeLink>
          </div>
          <div className="relative aspect-[16/10] max-h-[min(34dvh,260px)] w-full md:absolute md:right-0 md:top-0 md:aspect-auto md:h-full md:max-h-none md:w-[50%]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
