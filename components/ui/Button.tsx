import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition duration-200 [&_svg]:shrink-0";

const variantClasses = {
  primary:
    "bg-cyan-600 text-white shadow-sm shadow-cyan-600/20 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:bg-cyan-500 dark:shadow-cyan-500/25 dark:hover:bg-cyan-400 dark:focus-visible:outline-cyan-400",
  secondary:
    "border border-zinc-300/90 bg-white text-zinc-900 shadow-sm shadow-zinc-950/5 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-none dark:hover:border-zinc-500 dark:hover:bg-zinc-800",
  ghost:
    "text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <a {...props} className={classes}>
        {children}
      </a>
    );
  }

  const { type, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button type={type ?? "button"} {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
