import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardBody, CardDescription, CardImage, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export type NewsCardProps = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href: string;
  variant?: "default" | "horizontal";
  className?: string;
};

export function NewsCard({
  title,
  excerpt,
  category,
  date,
  image,
  href,
  variant = "default",
  className,
}: NewsCardProps) {
  if (variant === "horizontal") {
    return (
      <Link href={href} className={cn("group block", className)}>
        <Card hover padding="none" className="overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <CardImage className="aspect-[16/10] sm:aspect-auto sm:w-2/5 sm:min-h-[200px]">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </CardImage>
            <CardBody className="flex flex-1 flex-col justify-center p-6">
              <NewsMeta category={category} date={date} />
              <CardTitle className="mt-3 group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="mt-2 line-clamp-2">{excerpt}</CardDescription>
              <ReadMore />
            </CardBody>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={href} className={cn("group block", className)}>
      <Card hover padding="none" className="h-full overflow-hidden">
        <CardImage className="aspect-[16/10]">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute left-4 top-4 rounded-sm bg-accent px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {category}
          </span>
        </CardImage>
        <CardBody className="p-6">
          <NewsMeta category={category} date={date} className="sm:hidden" />
          <div className="hidden sm:block">
            <time className="flex items-center gap-1.5 text-xs text-secondary">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              {date}
            </time>
          </div>
          <CardTitle className="mt-3 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-3">{excerpt}</CardDescription>
          <ReadMore />
        </CardBody>
      </Card>
    </Link>
  );
}

function NewsMeta({
  category,
  date,
  className,
}: {
  category: string;
  date: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 text-xs", className)}>
      <span className="font-semibold uppercase tracking-wide text-accent">
        {category}
      </span>
      <span className="text-secondary" aria-hidden>
        ·
      </span>
      <time className="flex items-center gap-1 text-secondary">
        <Calendar className="h-3.5 w-3.5" aria-hidden />
        {date}
      </time>
    </div>
  );
}

function ReadMore() {
  return (
    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
      Read more
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </span>
  );
}
