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
    <div
      className={cn(
        "mx-auto w-full px-[30px]",
        !fullWidth && "max-w-[1260px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
