import { FullBleed } from "@/components/site";
import { ThemeLink } from "@/components/site/ThemeLink";
import { SiteLogo } from "@/components/site/layout/SiteLogo";
import { aboutSection } from "@/data/home-sections";

export function AboutSection() {
  const { title, body, cta } = aboutSection;

  return (
    <FullBleed
      id="about"
      className="section-about bg-white max-lg:pb-[var(--section-gap-after-about)] max-lg:pt-[var(--section-gap-sm)]"
    >
      <div className="site-content-narrow grid gap-5 lg:grid-cols-[83px_1fr] lg:items-start lg:gap-x-[50px] lg:gap-y-0">
        <div className="lg:pt-2.5 lg:text-right">
          <SiteLogo size="lg" />
        </div>

        <div className="flex flex-col gap-[var(--section-gap-sm)] lg:mt-0 lg:gap-[30px]">
          <h2 className="text-h2 max-w-[80%] whitespace-pre-line text-accent-6">
            {title}
          </h2>

          <p className="text-body max-w-none font-semibold">{body}</p>

          <ThemeLink href={cta.href}>{cta.label}</ThemeLink>
        </div>
      </div>
    </FullBleed>
  );
}
