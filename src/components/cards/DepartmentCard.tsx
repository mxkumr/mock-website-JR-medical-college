import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardBody, CardDescription, CardImage, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export type DepartmentCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  programs?: number;
  className?: string;
};

export function DepartmentCard({
  title,
  description,
  image,
  href,
  programs,
  className,
}: DepartmentCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <Card hover padding="none" className="h-full overflow-hidden">
        <CardImage className="aspect-[4/3]">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"
            aria-hidden
          />
          {programs !== undefined && (
            <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-sm bg-white/90 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              {programs} Programs
            </span>
          )}
        </CardImage>
        <CardBody className="p-6">
          <CardTitle className="group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-2">
            {description}
          </CardDescription>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all group-hover:opacity-100">
            Explore department
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardBody>
      </Card>
    </Link>
  );
}
