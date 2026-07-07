import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-white hover:bg-secondary focus-visible:ring-primary/40",
  secondary:
    "bg-surface text-text border border-secondary/20 hover:border-secondary/40 hover:bg-white focus-visible:ring-secondary/30",
  accent:
    "bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent/40",
  outline:
    "border-2 border-white/30 text-white bg-transparent hover:bg-white/10 focus-visible:ring-white/30",
  ghost:
    "text-text hover:bg-surface focus-visible:ring-secondary/20",
  link: "text-primary underline-offset-4 hover:underline hover:text-secondary p-0 h-auto",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function ButtonContent({
  children,
  leftIcon,
  rightIcon,
}: Pick<BaseProps, "children" | "leftIcon" | "rightIcon">) {
  return (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variant !== "link" && sizes[size],
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </button>
  );
}
