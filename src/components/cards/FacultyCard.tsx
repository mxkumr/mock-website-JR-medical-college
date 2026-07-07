import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Card, CardBody, CardImage } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export type FacultyCardProps = {
  name: string;
  role: string;
  department: string;
  image: string;
  href: string;
  email?: string;
  className?: string;
};

export function FacultyCard({
  name,
  role,
  department,
  image,
  href,
  email,
  className,
}: FacultyCardProps) {
  return (
    <Card hover padding="none" className={cn("overflow-hidden text-center", className)}>
      <Link href={href} className="group block">
        <CardImage className="aspect-[3/4] bg-surface">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </CardImage>
        <CardBody className="p-5">
          <h3 className="font-serif text-lg font-semibold text-text group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{role}</p>
          <p className="mt-1 text-sm text-secondary">{department}</p>
        </CardBody>
      </Link>
      {email && (
        <div className="border-t border-secondary/10 px-5 py-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-xs text-secondary transition-colors hover:text-primary"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {email}
          </a>
        </div>
      )}
    </Card>
  );
}
