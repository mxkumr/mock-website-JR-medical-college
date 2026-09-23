"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "./ImageGrid";

type ImageCarouselProps = {
  images: readonly GalleryImage[];
  className?: string;
};

/** Elementor-style media carousel (3-up desktop, side arrows, accent dots). */
export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".gallery-carousel-slide");
    if (!slide) return;
    const gap = Number.parseFloat(getComputedStyle(el).gap || "0") || 0;
    const slideWidth = slide.offsetWidth + gap;
    const visible = Math.max(1, Math.round(el.clientWidth / slideWidth));
    const pages = Math.max(1, images.length - visible + 1);
    setPageCount(pages);
    const nextPage = Math.round(el.scrollLeft / slideWidth);
    setPage(Math.min(Math.max(0, nextPage), pages - 1));
  }, [images.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".gallery-carousel-slide");
    if (!slide) return;
    const gap = Number.parseFloat(getComputedStyle(el).gap || "0") || 0;
    const slideWidth = slide.offsetWidth + gap;
    const next = Math.min(Math.max(0, index), pageCount - 1);
    el.scrollTo({ left: next * slideWidth, behavior: "smooth" });
  };

  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  return (
    <div className={cn("gallery-carousel", className)}>
      <div className="gallery-carousel-viewport">
        <button
          type="button"
          className="gallery-carousel-arrow gallery-carousel-arrow--prev"
          aria-label="Previous images"
          disabled={!canPrev}
          onClick={() => goTo(page - 1)}
        >
          <ChevronLeft aria-hidden />
        </button>

        <div
          ref={trackRef}
          className="gallery-carousel-track"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Campus gallery"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") goTo(page - 1);
            if (e.key === "ArrowRight") goTo(page + 1);
          }}
        >
          {images.map((image, i) => (
            <figure
              key={`${image.src}-${i}`}
              className="gallery-carousel-slide"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 85vw, 33vw"
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="gallery-carousel-arrow gallery-carousel-arrow--next"
          aria-label="Next images"
          disabled={!canNext}
          onClick={() => goTo(page + 1)}
        >
          <ChevronRight aria-hidden />
        </button>
      </div>

      {pageCount > 1 && (
        <div className="gallery-carousel-dots" role="tablist" aria-label="Gallery pages">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "gallery-carousel-dot",
                i === page && "gallery-carousel-dot--active",
              )}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
