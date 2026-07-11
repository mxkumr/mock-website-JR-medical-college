import { cn } from "@/lib/utils";
import { Container } from "./Container";

/** Full-width section with optional boxed inner content (Elementor layout: full_width). */
export function FullBleed({
  children,
  className,
  innerClassName,
  boxed = true,
  id,
  snapOnMobile = false,
  snapAlign = "center",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  boxed?: boolean;
  id?: string;
  /** Full-viewport scroll snap on phone/tablet (< lg). */
  snapOnMobile?: boolean;
  /** Vertical alignment of content within a snap section on mobile. */
  snapAlign?: "center" | "start";
}) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        snapOnMobile && "snap-section-mobile",
        snapOnMobile && snapAlign === "start" && "snap-section-mobile--start",
        className,
      )}
    >
      {boxed ? (
        <Container
          className={cn(
            snapOnMobile &&
              "max-lg:flex max-lg:w-full max-lg:flex-1 max-lg:flex-col",
            snapOnMobile &&
              (snapAlign === "start"
                ? "max-lg:justify-start"
                : "max-lg:justify-center"),
            innerClassName,
          )}
        >
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}
