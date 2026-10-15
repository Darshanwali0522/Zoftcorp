import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "cyan" | "blue" | "navy" | "orange" | "outline" | "subtle";
  withDot?: boolean;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "cyan",
  withDot = false,
  className,
  children,
  ...props
}) => {
  const variants = {
    cyan: "bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30",
    blue: "bg-[#00B3FF]/10 text-[#01153B] border border-[#00B3FF]/30",
    navy: "bg-[#01153B] text-white border border-[#031E4D]",
    orange: "bg-[#FF6F00]/10 text-[#FF6F00] border border-[#FF6F00]/30",
    outline: "bg-transparent text-[#01153B] border border-slate-300",
    subtle: "bg-slate-100 text-slate-700 border border-slate-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {withDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
      )}
      <span>{children}</span>
    </div>
  );
};
