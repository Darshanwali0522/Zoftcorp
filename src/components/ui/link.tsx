import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "default" | "muted" | "accent" | "nav";
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      variant = "default",
      isExternal = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "text-[#01153B] hover:text-[#00B3FF] font-medium transition-colors duration-200",
      light: "text-slate-200 hover:text-white transition-colors duration-200",
      muted: "text-slate-500 hover:text-[#01153B] transition-colors duration-200",
      accent: "text-[#00B3FF] hover:text-[#00B3FF]/80 font-medium transition-colors duration-200",
      orange: "text-[#FF6F00] hover:text-[#E66400] font-medium transition-colors duration-200",
      nav: "text-slate-700 hover:text-[#00B3FF] font-medium text-sm transition-colors duration-200 py-1",
    };

    const externalProps = isExternal
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(
          "group inline-flex items-center gap-1 rounded focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out-smooth group-hover:[&_svg]:translate-x-0.5 motion-reduce:group-hover:[&_svg]:transform-none",
          variants[variant],
          className
        )}
        {...externalProps}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
