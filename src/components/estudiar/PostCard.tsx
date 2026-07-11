import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { themeLinkClassName } from "./ThemeLink";

export type PostCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
  excerpt?: string;
  className?: string;
};

/** Estudiar blog/post card — hover scale image, accent title link. */
export function PostCard({
  title,
  date,
  image,
  href,
  excerpt,
  className,
}: PostCardProps) {
  return (
    <Link href={href} className={cn("group block bg-white", className)}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <time className="text-xs font-medium text-accent-8">{date}</time>
        <h3 className="mt-2 font-display text-xl font-bold text-accent-6 transition-colors group-hover:text-accent-1">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-accent-8">{excerpt}</p>
        )}
        <span
          className={cn(
            themeLinkClassName,
            "mt-4 text-accent-1 decoration-accent-1 group-hover:text-accent-2 group-hover:decoration-accent-2",
          )}
        >
          Read more
        </span>
      </div>
    </Link>
  );
}
