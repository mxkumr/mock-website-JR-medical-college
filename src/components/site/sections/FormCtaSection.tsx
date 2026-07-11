import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FullBleed } from "@/components/site";
import { formSection } from "@/data/home-sections";

export function FormCtaSection() {
  const [primary, ...secondary] = formSection.buttons;

  return (
    <FullBleed id="contact" boxed={false} className="form-section">
      <div className="form-title-block">
        <h1 className="form-title">{formSection.title}</h1>
      </div>

      <div className="form-panel">
        <div className="form-panel-inner">
          <h5 className="form-subtitle">{formSection.subtitle}</h5>

          <Link href={primary.href} className="form-primary-btn">
            <span>{primary.label}</span>
            <ArrowRight className="form-primary-btn-icon" aria-hidden />
          </Link>

          <div className="form-secondary-links">
            {secondary.map((btn, index) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={
                  index === 0 ? "form-secondary-link form-secondary-link--rule" : "form-secondary-link"
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </FullBleed>
  );
}
