import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageGridProps = {
  images: readonly string[];
  staggerMiddle?: boolean;
  className?: string;
};

export function ImageGrid({
  images,
  staggerMiddle = true,
  className,
}: ImageGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-4 md:gap-6", className)}>
      {images.map((src, i) => (
        <div
          key={src}
          className={cn(
            "relative aspect-[3/4] overflow-hidden",
            staggerMiddle && i === 1 && "mt-12",
          )}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 400px"
          />
        </div>
      ))}
    </div>
  );
}
