import Link from "next/link";
import { ArrowRight, HardHat } from "lucide-react";
import { SiteLogo } from "@/components/site/layout/SiteLogo";
import { ThemeLink } from "@/components/site/ThemeLink";

export function UnderConstructionPage() {
  return (
    <div className="under-construction-page">
      <header className="under-construction-header">
        <Link href="/" aria-label="Back to homepage">
          <SiteLogo size="sm" />
        </Link>
      </header>

      <main className="under-construction-main">
        <div className="under-construction-icon-wrap" aria-hidden>
          <HardHat className="under-construction-icon" />
        </div>

        <p className="under-construction-eyebrow">JR Medical College &amp; Hospital</p>
        <h1 className="under-construction-title">Under Construction</h1>
        <p className="under-construction-body">
          This page is being built. Check back soon for updates, or return to the
          homepage to explore what&apos;s available now.
        </p>

        <ThemeLink href="/" className="under-construction-cta">
          Back to Home
          <ArrowRight className="h-4 w-4" aria-hidden />
        </ThemeLink>
      </main>

      <footer className="under-construction-footer">
        <p>Copyright {new Date().getFullYear()} © The CRUD Studio</p>
      </footer>
    </div>
  );
}
