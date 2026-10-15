import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navy" | "secondary" | "tertiary" | "blue" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      className,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-medium transition-all duration-200 ease-out-smooth rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B3FF] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:transform-none disabled:shadow-none select-none cursor-pointer tracking-tight [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out-smooth group-hover:[&_svg]:translate-x-0.5 motion-reduce:group-hover:[&_svg]:transform-none";

    const variants = {
      primary:
        "bg-[#FF6F00] hover:bg-[#E66400] text-white font-semibold shadow-xs hover:shadow-md hover:shadow-[#FF6F00]/25 border border-[#E66400] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
      navy:
        "bg-[#01153B] hover:bg-[#031E4D] text-white font-semibold shadow-xs hover:shadow-md hover:shadow-[#01153B]/30 border border-[#01153B] hover:border-[#00B3FF]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
      secondary:
        "bg-white hover:bg-slate-50 text-[#01153B] border border-slate-300 hover:border-slate-400 shadow-2xs hover:shadow-xs active:scale-[0.98] hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
      tertiary:
        "bg-slate-100 hover:bg-slate-200/90 text-[#01153B] border border-slate-200/80 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
      blue:
        "bg-[#00B3FF] hover:bg-[#33C2FF] text-[#01153B] font-semibold shadow-xs hover:shadow-md hover:shadow-[#00B3FF]/25 border border-[#00B3FF] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
      ghost:
        "bg-transparent hover:bg-slate-100/80 text-[#01153B] hover:text-[#00B3FF] active:scale-[0.98] motion-reduce:active:scale-100",
      link:
        "bg-transparent text-[#00B3FF] hover:text-[#0099DD] underline-offset-4 hover:underline p-0 h-auto font-medium focus-visible:outline-offset-1",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
      md: "text-sm px-4 py-2 gap-2 h-10",
      lg: "text-base px-6 py-3 gap-2.5 h-12",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== "link" && sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span
            className="inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin shrink-0"
            aria-hidden="true"
          />
        ) : (
          leftIcon && (
            <span className="inline-flex items-center shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span
            className="inline-flex items-center shrink-0 transition-transform duration-200 ease-out-smooth group-hover:translate-x-1 motion-reduce:transform-none"
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
