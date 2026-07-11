import Image from "next/image";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/data/estudiar-home";

export function SiteLogo({
  className,
  imageClassName,
  priority = false,
  size = "sm",
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  size?: "sm" | "lg";
}) {
  const isLarge = size === "lg";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-white",
        isLarge ? "p-1.5" : "p-1",
        className,
      )}
    >
      <Image
        src={ASSETS.headerLogo}
        alt="JR Medical College and Hospital"
        width={isLarge ? 83 : 48}
        height={isLarge ? 83 : 48}
        className={cn(
          isLarge ? "h-[75px] w-[75px]" : "h-10 w-10",
          "object-contain",
          imageClassName,
        )}
        priority={priority}
      />
    </span>
  );
}
