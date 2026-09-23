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

/** Horizontal image carousel matching Estudiar 3-up gallery rhythm. */
export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateControls();
    el.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    return () => {
      el.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls, images]);

  const scrollByPage = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={cn("gallery-carousel", className)}>
      <div
        ref={trackRef}
        className="gallery-carousel-track"
        tabIndex={0}
        role="region"
        aria-label="Campus gallery"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") scrollByPage(-1);
          if (e.key === "ArrowRight") scrollByPage(1);
        }}
      >
        {images.map((image, i) => (
          <figure key={`${image.src}-${i}`} className="gallery-carousel-slide">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, 33vw"
            />
          </figure>
        ))}
      </div>

      <div className="gallery-carousel-controls">
        <button
          type="button"
          className="gallery-carousel-btn"
          aria-label="Previous images"
          disabled={!canPrev}
          onClick={() => scrollByPage(-1)}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          className="gallery-carousel-btn"
          aria-label="Next images"
          disabled={!canNext}
          onClick={() => scrollByPage(1)}
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
