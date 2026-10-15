import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoWrapperProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const LogoWrapper: React.FC<LogoWrapperProps> = ({
  className,
  size = "md",
  href = "/",
}) => {
  // Height ratios preserving official ZOFT logo dimensions
  const dimensions = {
    sm: { height: 28, width: 140 },
    md: { height: 36, width: 180 },
    lg: { height: 44, width: 220 },
  };

  const logoContent = (
    <div
      className={cn(
        "inline-flex items-center shrink-0 transition-opacity duration-200 hover:opacity-90 py-1 px-1 focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-4 rounded",
        className
      )}
      aria-label="ZOFT Corp Home Page"
    >
      <Image
        src="/brand/zoft-logo.png"
        alt="ZOFT Corp Logo"
        width={dimensions[size].width}
        height={dimensions[size].height}
        className="h-auto w-auto object-contain max-h-11"
        priority
      />
    </div>
  );

  if (href) {
    return <Link href={href}>{logoContent}</Link>;
  }

  return logoContent;
};
