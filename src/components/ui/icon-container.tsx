import React from "react";
import { cn } from "@/lib/utils";

export interface IconContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "cyan" | "blue" | "navy" | "orange" | "subtle";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  variant = "cyan",
  size = "md",
  className,
  children,
  ...props
}) => {
  const variants = {
    cyan: "bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-xs",
    blue: "bg-[#00B3FF]/10 text-[#00B3FF] border border-[#00B3FF]/30 shadow-xs",
    navy: "bg-[#01153B] text-white border border-[#031E4D] shadow-xs",
    orange: "bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/30 shadow-xs",
    subtle: "bg-slate-100 text-[#01153B] border border-slate-200 shadow-xs",
  };

  const sizes = {
    sm: "w-8 h-8 rounded-md p-1.5 text-sm",
    md: "w-11 h-11 rounded-lg p-2.5 text-base",
    lg: "w-14 h-14 rounded-xl p-3.5 text-xl",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
