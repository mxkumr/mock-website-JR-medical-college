import { cn } from "@/lib/utils";

type PageTitleProps = {
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  light?: boolean;
};

/** Sub-header page title with decorative underline. */
export function PageTitle({
  title,
  description,
  as: Tag = "h2",
  className,
  light = false,
}: PageTitleProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Tag
        className={cn(
          "font-display text-h2 font-bold",
          light ? "text-white" : "text-accent-6",
        )}
      >
        {title}
      </Tag>
      <span
        className={cn(
          "mt-4 block h-0.5 w-[100px]",
          light ? "bg-accent-2" : "bg-accent-1",
        )}
        aria-hidden
      />
      {description && (
        <p
          className={cn(
            "text-body mt-4 max-w-2xl",
            light && "text-white/80",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
