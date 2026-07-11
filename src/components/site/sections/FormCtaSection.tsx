import { FullBleed, Container, AccentTitle, ThemeLink } from "@/components/site";
import { formSection } from "@/data/home-sections";

export function FormCtaSection() {
  return (
    <FullBleed id="contact" snapOnMobile className="bg-accent-6 py-10 text-white md:py-28">
      <Container className="max-lg:flex max-lg:flex-1 max-lg:flex-col max-lg:justify-center max-lg:text-center text-center">
        <AccentTitle parts={[formSection.title]} light className="justify-center" />
        <h5 className="mx-auto mt-6 max-w-xl font-display text-h5 font-semibold text-white/90 md:mt-8">
          {formSection.subtitle}
        </h5>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:mt-10 md:gap-8">
          {formSection.buttons.map((btn) => (
            <ThemeLink key={btn.label} href={btn.href} light>
              {btn.label}
            </ThemeLink>
          ))}
        </div>
      </Container>
    </FullBleed>
  );
}
