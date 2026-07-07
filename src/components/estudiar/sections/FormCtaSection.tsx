import { FullBleed, Container, AccentTitle, ThemeLink } from "@/components/estudiar";
import { formSection } from "@/data/estudiar-home";

export function FormCtaSection() {
  return (
    <FullBleed id="contact" className="bg-accent-6 py-20 text-white md:py-28">
      <Container className="text-center">
        <AccentTitle parts={[formSection.title]} light className="justify-center" />
        <h5 className="mx-auto mt-8 max-w-xl font-display text-h5 font-semibold text-white/90">
          {formSection.subtitle}
        </h5>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
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
