import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  fullWidth = false,
}: {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={cn(!fullWidth && "site-container", fullWidth && "w-full", className)}>
      {children}
    </div>
  );
}
