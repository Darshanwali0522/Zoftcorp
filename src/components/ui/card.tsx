import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "subtle" | "ghost";
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default:
        "bg-white border border-slate-200/90 rounded-xl shadow-xs",
      interactive:
        "bg-white hover:bg-slate-50/90 border border-slate-200/90 hover:border-[#00B3FF]/40 rounded-xl transition-all duration-200 ease-out-smooth shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] group cursor-pointer motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
      subtle:
        "bg-slate-50/80 border border-slate-200/80 rounded-xl",
      ghost:
        "bg-transparent border border-transparent rounded-xl",
    };

    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div
        ref={ref}
        className={cn(variants[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
