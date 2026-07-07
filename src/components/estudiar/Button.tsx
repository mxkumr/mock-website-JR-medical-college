import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  solid:
    "bg-accent-1 text-white hover:bg-accent-2 hover:text-accent-6 focus-visible:ring-accent-1/40",
  outline:
    "border border-accent-1 bg-transparent text-accent-1 hover:bg-accent-1 hover:text-white focus-visible:ring-accent-1/40",
  ghost:
    "bg-transparent text-accent-6 hover:bg-accent-2 hover:text-accent-6 focus-visible:ring-accent-2/40",
  light:
    "border border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/30",
} as const;

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-[27px] py-[11px] text-base",
  lg: "px-[27px] py-[22px] text-lg",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    sizes[size],
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
