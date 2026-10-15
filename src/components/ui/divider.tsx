import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "subtle" | "accent" | "gradient";
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "subtle",
  className,
  ...props
}) => {
  const isHorizontal = orientation === "horizontal";

  const variants = {
    subtle: "bg-slate-200/90",
    dark: "bg-white/10",
    accent: "bg-[#00B3FF]/30",
    orange: "bg-[#FF6F00]/30",
    gradient: isHorizontal
      ? "bg-gradient-to-r from-transparent via-[#00B3FF]/30 to-transparent"
      : "bg-gradient-to-b from-transparent via-[#00B3FF]/30 to-transparent",
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        isHorizontal ? "w-full h-px my-6" : "h-full w-px mx-4 inline-block",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
