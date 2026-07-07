import { cn } from "@/lib/utils";
import { Container } from "./Container";

/** Full-width section with optional boxed inner content (Elementor layout: full_width). */
export function FullBleed({
  children,
  className,
  innerClassName,
  boxed = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  boxed?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("w-full", className)}>
      {boxed ? (
        <Container className={innerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
