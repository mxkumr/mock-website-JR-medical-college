"use client";

import { useRef } from "react";
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

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(
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

  const { left, right, bottom, taglines, cta } = heroSection;

  return (
    <section
      ref={ref}
      className="relative -mt-[var(--header-overlap)] hidden min-h-[600px] h-[70vh] overflow-hidden md:block"
      aria-label="Hero"
    >
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 -top-[8%] h-[116%] w-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={ASSETS.heroPoster}
          className="h-full w-full object-cover"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative mx-auto flex h-full max-w-[var(--site-max-width)] flex-col px-[30px] pt-[200px] pb-[170px]"
      >
        <div className="relative mx-auto w-full max-w-[1100px] flex-1">
          <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-0">
            <div className="flex justify-end pr-[clamp(1rem,4vw,3rem)] pt-2">
              <HeroLetter parallax={0.4}>{left}</HeroLetter>
            </div>

            <div className="relative z-[2] flex h-[min(52vw,355px)] w-[min(52vw,355px)] flex-col items-start justify-start rounded-full bg-accent-1 px-[14%] pt-[16%]">
              <div className="space-y-0.5">
                {taglines.map((line) => (
                  <p
                    key={line}
                    className="font-display text-[clamp(0.95rem,1.6vw,1.35rem)] font-bold leading-snug text-white"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <ThemeLink href={cta.href} variant="hero" className="mt-5 text-base">
                {cta.label}
              </ThemeLink>
            </div>

            <div className="flex justify-start pl-[clamp(0.5rem,2vw,1.5rem)] pt-1">
              <HeroLetter parallax={0.7}>{right}</HeroLetter>
            </div>
          </div>

          <div className="-mt-[clamp(3rem,10vw,5.5rem)] grid grid-cols-3 items-end">
            <div className="flex justify-start pl-2">
              <HeroLetter parallax={0.9}>{bottom[0]}</HeroLetter>
            </div>
            <div className="flex justify-center">
              <HeroLetter parallax={0.75}>{bottom[1]}</HeroLetter>
            </div>
            <div className="flex justify-end pr-2">
              <HeroLetter parallax={0.85}>{bottom[2]}</HeroLetter>
            </div>
          </div>
        </div>

        <p className="mt-auto text-[11px] text-white/50">
          Video credit: Edinboro University
        </p>
      </motion.div>

      <h1 className="sr-only">
        JR Medical College and Hospital — Leaders in Medical Education
      </h1>
    </section>
  );
}

export function HeroSectionMobile() {
  const { taglines, cta } = heroSection;

  return (
    <section
      className="relative -mt-[var(--header-overlap)] min-h-[55vh] overflow-hidden bg-cover bg-center px-5 pt-[140px] pb-16 md:hidden"
      style={{ backgroundImage: `url(${ASSETS.mobileHeroCover})` }}
    >
      <div className="absolute inset-0 bg-accent-1/25" aria-hidden />

      <div className="relative mx-auto max-w-lg">
        <h1 className="text-accent-title -ml-2.5 mb-6 text-white">
          LEAD
          <br />
          ERS
        </h1>
        <div className="relative mx-auto flex h-[min(72vw,280px)] w-[min(72vw,280px)] flex-col items-start justify-start rounded-full bg-accent-1 px-8 pt-12">
          <div className="space-y-0.5">
            {taglines.map((line) => (
              <p
                key={line}
                className="font-display text-base font-bold leading-snug text-white"
              >
                {line}
              </p>
            ))}
          </div>
          <ThemeLink href={cta.href} variant="hero" className="mt-4 text-sm">
            {cta.label}
          </ThemeLink>
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use HeroSection */
export const EstudiarHero = HeroSection;

/** @deprecated Use HeroSectionMobile */
export const EstudiarHeroMobile = HeroSectionMobile;
