"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { heroSection, ASSETS } from "@/data/home-sections";
import { SiteLogo } from "@/components/site/layout/SiteLogo";
import { cn } from "@/lib/utils";

function HeroGradientOverlay() {
  return <div className="hero-gradient-overlay absolute inset-0" aria-hidden />;
}

function HeroCtaLink({ className }: { className?: string }) {
  const { cta } = heroSection;

  return (
    <div className={cn("hero-cta-wrap", className)}>
      <Link
        href={cta.href}
        className="text-hero-link inline-flex w-fit items-center gap-[0.625em] no-underline transition-colors hover:text-accent-2"
      >
        {cta.label}
        <ArrowRight className="h-[1.125em] w-[1.125em] shrink-0" aria-hidden />
      </Link>
    </div>
  );
}

function HeroTextStack({ className }: { className?: string }) {
  const { title, taglines } = heroSection;

  return (
    <div className={cn("hero-text-stack", className)}>
      <h1 className="text-hero-title-institution">{title}</h1>

      <h3 className="text-hero-subtitle whitespace-pre-line">{taglines.join("\n")}</h3>

      <HeroCtaLink />
    </div>
  );
}

function HeroDesktopStack() {
  const { title, taglines } = heroSection;

  return (
    <div className="hero-desktop-stack">
      <SiteLogo size="hero" className="hero-desktop-logo" priority />

      <h1 className="text-hero-title-institution">{title}</h1>

      <h3 className="text-hero-subtitle whitespace-pre-line">{taglines.join("\n")}</h3>

      <HeroCtaLink />
    </div>
  );
}

/** Desktop hero — institution name + taglines (tablet/mobile use HeroSectionMobile). */
export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["0%", "18%"],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["0%", "10%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero-section-desktop relative overflow-hidden"
      aria-label="Hero"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[8%] h-[116%] w-full bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="JR Medical College and Hospital campus"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.heroBackground})` }}
        />
        <HeroGradientOverlay />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="hero-section-inner mx-auto max-w-[var(--site-max-width)]"
      >
        <HeroDesktopStack />
      </motion.div>
    </section>
  );
}

/**
 * Mobile/tablet hero — Elementor section 8fa2e83 (post 70).
 * Order: nav (SiteHeaderMobile) → JRMCH → taglines → View Our Programs.
 */
export function HeroSectionMobile() {
  return (
    <section
      className="hero-section-mobile relative overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.heroBackground})` }}
        aria-hidden
      />
      <HeroGradientOverlay />

      <div className="hero-section-mobile-content relative z-[2]">
        <HeroTextStack />
      </div>
    </section>
  );
}
