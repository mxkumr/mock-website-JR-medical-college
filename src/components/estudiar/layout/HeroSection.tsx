"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { ThemeLink } from "@/components/estudiar/ThemeLink";
import { heroSection, ASSETS } from "@/data/estudiar-home";
import { cn } from "@/lib/utils";

function HeroGradientOverlay() {
  return <div className="hero-gradient-overlay absolute inset-0" aria-hidden />;
}

function HeroLetter({
  children,
  className,
  parallax = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  parallax?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn(
        "text-hero-letter inline-block select-none text-white",
        className,
      )}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) * parallax * 0.05;
        const dy = (e.clientY - rect.top - rect.height / 2) * parallax * 0.05;
        x.set(dx);
        y.set(dy);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

function HeroTextStack({ className }: { className?: string }) {
  const { mobileTitle, taglines, cta } = heroSection;

  return (
    <div className={cn("hero-text-stack", className)}>
      <h1 className="text-hero-title whitespace-pre-line text-white">{mobileTitle}</h1>

      <h3 className="text-hero-subtitle whitespace-pre-line text-white">
        {taglines.join("\n")}
      </h3>

      <Link
        href={cta.href}
        className="text-hero-link inline-flex w-fit items-center gap-[0.625em] !text-white no-underline transition-colors hover:!text-accent-2"
      >
        {cta.label}
        <ArrowRight className="h-[1.125em] w-[1.125em] shrink-0" aria-hidden />
      </Link>
    </div>
  );
}

function HeroCenterContent({ className }: { className?: string }) {
  const { taglines, cta } = heroSection;

  return (
    <div className={cn("relative z-[2]", className)}>
      <h3 className="text-hero-subtitle whitespace-pre-line text-white">
        {taglines.join("\n")}
      </h3>
      <ThemeLink
        href={cta.href}
        variant="hero"
        className="text-hero-link mt-[var(--hero-link-gap)]"
      >
        {cta.label}
      </ThemeLink>
    </div>
  );
}

function HeroLetterGrid() {
  const { left, right, bottom } = heroSection;

  return (
    <div className="relative mx-auto w-full max-w-[1100px] flex-1">
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-0">
        <div className="flex justify-end pr-[clamp(1rem,4vw,3rem)] pt-2">
          <HeroLetter parallax={0.4}>{left}</HeroLetter>
        </div>

        <div className="relative z-[2] flex flex-col items-start justify-end px-2">
          <HeroCenterContent />
        </div>

        <div className="flex justify-start pl-[clamp(0.5rem,2vw,1.5rem)] pt-1">
          <HeroLetter parallax={0.7}>{right}</HeroLetter>
        </div>
      </div>

      <div className="-mt-[clamp(3rem,10vw,5.5rem)] grid grid-cols-3 items-end">
        {bottom.map((letter, index) => (
          <div
            key={letter || `slot-${index}`}
            className={cn(
              "flex",
              index === 0 && "justify-start pl-2",
              index === 1 && "justify-center",
              index === 2 && "justify-end pr-2",
            )}
          >
            {letter ? (
              <HeroLetter parallax={[0.9, 0.75, 0.85][index] ?? 0.75}>
                {letter}
              </HeroLetter>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Desktop hero — scattered letters + campus photo (tablet/mobile use HeroSectionMobile). */
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
      className="relative -mt-[var(--header-overlap)] hidden min-h-[clamp(600px,70vh,800px)] h-[70vh] overflow-hidden lg:block"
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
        className="relative mx-auto flex h-full max-w-[var(--site-max-width)] flex-col px-[clamp(1.25rem,3vw,1.875rem)] pt-[clamp(8rem,18vh,12.5rem)] pb-[clamp(6rem,14vh,10.625rem)]"
      >
        <HeroLetterGrid />
      </motion.div>

      <h1 className="sr-only">
        JR Medical College and Hospital — JRMCH
      </h1>
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
      className="relative min-h-[clamp(55vh,60svh,70vh)] overflow-hidden lg:hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.heroBackground})` }}
        aria-hidden
      />
      <HeroGradientOverlay />

      <div className="relative z-[2]">
        <HeroTextStack />
      </div>
    </section>
  );
}

/** @deprecated Use HeroSection */
export const EstudiarHero = HeroSection;

/** @deprecated Use HeroSectionMobile */
export const EstudiarHeroMobile = HeroSectionMobile;
