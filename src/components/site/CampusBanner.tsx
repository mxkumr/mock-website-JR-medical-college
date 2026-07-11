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
    <section className="section-campus snap-section-mobile snap-section-mobile--start snap-section-mobile--fit overflow-x-hidden bg-white">
      <div className="site-container">
        <div className="relative lg:min-h-[520px]">
          <h2 className="relative z-20 flex flex-col items-start justify-start pl-[clamp(0rem,2vw,0rem)] text-accent-title text-accent-6 lg:pl-[4.375rem]">
            <span>{titleLines[0]}</span>
            <span>{titleLines[1]}</span>
          </h2>
          <div className="relative z-10 -mt-[calc(var(--text-accent-title)*0.8)] w-full bg-accent-2 pb-6 pl-[clamp(1.25rem,6vw,4.375rem)] pr-8 pt-[calc(var(--text-accent-title)*0.8)] lg:w-[72%] lg:pb-16">
            <p className="text-body max-w-md">{body}</p>
            <ThemeLink href={cta.href} className="mt-4 md:mt-6">
              {cta.label}
            </ThemeLink>
          </div>
          <div className="relative aspect-[16/10] max-h-[min(34dvh,260px)] w-full lg:absolute lg:right-0 lg:top-0 lg:aspect-auto lg:h-full lg:max-h-none lg:w-[50%]">
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
