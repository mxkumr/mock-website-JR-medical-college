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
    <section className="mt-28 overflow-hidden bg-white md:mt-[280px]">
      <div className="mx-auto max-w-[var(--site-max-width)]">
        <div className="relative md:min-h-[520px]">
          <div className="relative z-10 w-full bg-accent-2 pb-24 pl-[clamp(1.25rem,6vw,6.25rem)] pr-8 md:w-[72%] md:pb-[300px]">
            <h2 className="text-accent-title -ml-2.5 -mt-[85px] text-accent-6">
              {titleLines[0]}
              <br />
              {titleLines[1]}
            </h2>
            <p className="mt-4 max-w-md text-lg font-medium leading-relaxed text-accent-8">
              {body}
            </p>
            <ThemeLink href={cta.href} className="mt-6">
              {cta.label}
            </ThemeLink>
          </div>
          <div className="relative aspect-[4/5] w-full md:absolute md:right-0 md:top-0 md:aspect-auto md:h-full md:w-[50%]">
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
