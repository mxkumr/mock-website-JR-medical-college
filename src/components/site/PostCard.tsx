import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeLink } from "./ThemeLink";

export type PostCardProps = {
  title: string;
  date: string;
  href: string;
  excerpt: string;
  className?: string;
};

export function PostCard({
  title,
  date,
  href,
  excerpt,
  className,
}: PostCardProps) {
  return (
    <article className={cn("news-card", className)}>
      <time className="news-card-date">{date}</time>
      <h3 className="news-card-title">
        <Link href={href} className="news-card-title-link">
          {title}
        </Link>
      </h3>
      <p className="news-card-excerpt">{excerpt}</p>
      <ThemeLink href={href} className="news-card-link">
        Read more
      </ThemeLink>
    </article>
  );
}
