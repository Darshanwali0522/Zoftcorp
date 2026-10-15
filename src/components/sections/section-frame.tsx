import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export interface SectionFrameProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary" | "tertiary" | "navy" | "navySecondary" | "glow";
  containerSize?: "default" | "narrow" | "wide" | "full";
  spacing?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const SectionFrame: React.FC<SectionFrameProps> = ({
  variant = "primary",
  containerSize = "default",
  spacing = "lg",
  className,
  children,
  ...props
}) => {
  const bgVariants = {
    primary: "bg-white text-[#01153B]",
    secondary: "bg-slate-50/80 text-[#01153B] border-y border-slate-200/80",
    tertiary: "bg-slate-100/70 text-[#01153B] border-y border-slate-200/60",
    navy: "bg-[#01153B] text-white",
    navySecondary: "bg-[#031E4D] text-white",
    glow: "bg-gradient-to-b from-white via-slate-50/70 to-white text-[#01153B] relative overflow-hidden",
  };

  const spacings = {
    sm: "py-10 sm:py-12",
    md: "py-14 sm:py-16",
    lg: "py-20 sm:py-24",
    xl: "py-24 sm:py-32",
  };

  return (
    <section className={cn(bgVariants[variant], spacings[spacing], className)} {...props}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};
