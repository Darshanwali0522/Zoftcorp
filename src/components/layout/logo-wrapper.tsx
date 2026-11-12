import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoWrapperProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  variant?: "header" | "footer";
}

export const LogoWrapper: React.FC<LogoWrapperProps> = ({
  className,
  size = "md",
  href = "/",
  variant = "header",
}) => {
  // Aspect ratio calibrated to official Zoftcorp horizontal lockup (~4.468:1 ratio)
  const dimensions = {
    sm: { height: 28, width: 125 },
    md: { height: 36, width: 161 },
    lg: { height: 44, width: 197 },
  };

  const isFooter = variant === "footer";
  const logoSrc = isFooter ? "/brand/zoft-logo-footer.png" : "/brand/zoftcorp-logo.png";

  const logoContent = (
    <div
      className={cn(
        "inline-flex items-center shrink-0 transition-opacity duration-200 hover:opacity-90 py-1 px-1 focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-4 rounded",
        className
      )}
      aria-label="Zoftcorp Home Page"
    >
      <Image
        src={logoSrc}
        alt="Zoftcorp Logo"
        width={dimensions[size].width}
        height={dimensions[size].height}
        className={cn(
          "h-auto w-auto object-contain",
          size === "sm" ? "max-h-8" : size === "md" ? "max-h-10" : "max-h-12"
        )}
        priority
        unoptimized
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Zoftcorp Home Page">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
