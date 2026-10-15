import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  level?: 1 | 2 | 3 | 4;
  gradientTitle?: boolean;
  isDark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2,
  gradientTitle = false,
  isDark = false,
  className,
  ...props
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const HeadingTag = `h${level}` as React.ElementType;

  const headingSizes = {
    1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]",
    2: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
    3: "text-2xl sm:text-3xl font-semibold tracking-tight",
    4: "text-xl sm:text-2xl font-semibold",
  };

  return (
    <div
      className={cn("flex flex-col max-w-3xl space-y-4", alignClasses[align], className)}
      {...props}
    >
      {eyebrow && <Badge variant={isDark ? "blue" : "cyan"}>{eyebrow}</Badge>}

      <HeadingTag
        className={cn(
          isDark ? "text-white" : "text-[#01153B]",
          "font-sans tracking-tight",
          headingSizes[level],
          gradientTitle && (isDark ? "bg-gradient-to-r from-white via-slate-200 to-[#00B3FF] bg-clip-text text-transparent" : "bg-gradient-to-r from-[#01153B] via-[#031E4D] to-[#00B3FF] bg-clip-text text-transparent")
        )}
      >
        {title}
      </HeadingTag>

      {description && (
        <p className={cn(isDark ? "text-slate-300" : "text-slate-600", "text-base sm:text-lg font-normal leading-relaxed")}>
          {description}
        </p>
      )}
    </div>
  );
};
