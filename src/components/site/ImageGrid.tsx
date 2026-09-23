import Image from "next/image";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGridProps = {
  images: readonly (string | GalleryImage)[];
  staggerMiddle?: boolean;
  className?: string;
};

function resolveImage(image: string | GalleryImage): GalleryImage {
  return typeof image === "string" ? { src: image, alt: "" } : image;
}

/** Estudiar-style staggered photo grid (3-up, middle column offset). */
export function ImageGrid({
  images,
  staggerMiddle = true,
  className,
}: ImageGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-4 md:gap-6", className)}>
      {images.map((image, i) => {
        const { src, alt } = resolveImage(image);

        return (
          <div
            key={`${src}-${i}`}
            className={cn(
              "relative aspect-[3/4] overflow-hidden",
              staggerMiddle && i % 3 === 1 && "mt-12",
            )}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 400px"
            />
          </div>
        );
      })}
    </div>
  );
}
