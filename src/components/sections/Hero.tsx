"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: { value: string; label: string }[];
};

export function Hero({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  stats,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-10 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    variant="accent"
                    size="lg"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}

            {stats && stats.length > 0 && (
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-serif text-2xl font-semibold text-white md:text-3xl">
                      {stat.value}
                    </dd>
                    <dd className="mt-1 text-xs text-white/60 md:text-sm">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative min-h-[320px] lg:min-h-full"
        >
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent lg:via-primary/20"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
