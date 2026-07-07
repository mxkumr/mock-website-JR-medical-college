import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-sm bg-white border border-secondary/10 shadow-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-secondary/20",
        paddingMap[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>{children}</div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
  as: Tag = "h3",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}) {
  return (
    <Tag
      className={cn(
        "font-serif text-xl font-semibold text-text leading-snug",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-secondary text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}
