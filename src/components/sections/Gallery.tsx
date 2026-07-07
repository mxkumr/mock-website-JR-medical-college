"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span?: string;
};

type GalleryProps = {
  images: GalleryImage[];
  className?: string;
};

export function Gallery({ images, className }: GalleryProps) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]",
          className,
        )}
      >
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => setLightbox(image)}
            className={cn(
              "group relative overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              image.span ?? "col-span-1 row-span-1",
            )}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-300 group-hover:bg-primary/40"
              aria-hidden
            >
              <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            role="dialog"
            aria-modal
            aria-label="Image lightbox"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 rounded-sm p-2 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-full rounded-sm object-contain"
              />
              <p className="mt-3 text-center text-sm text-white/70">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
