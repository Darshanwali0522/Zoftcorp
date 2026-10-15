import React from "react";
import { cn } from "@/lib/utils";

export interface PlatformLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Clean Brand-Safe AWS Component (Plain Text Treatment per Official Trademark Guidance)
 */
export const AwsLogo: React.FC<PlatformLogoProps> = ({ className, size = "md" }) => {
  const sizes = {
    sm: "text-base font-extrabold",
    md: "text-lg sm:text-xl font-extrabold",
    lg: "text-2xl font-extrabold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center tracking-tight text-[#232F3E] font-sans shrink-0 select-none",
        sizes[size],
        className
      )}
      aria-label="AWS"
    >
      <span>AWS</span>
    </div>
  );
};

/**
 * Official Microsoft Azure Logo Component
 */
export const AzureLogo: React.FC<PlatformLogoProps> = ({ className, size = "md" }) => {
  const sizes = {
    sm: "h-5 w-auto",
    md: "h-7 w-auto",
    lg: "h-9 w-auto",
  };

  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("object-contain shrink-0", sizes[size], className)}
      aria-label="Microsoft Azure Logo"
    >
      <g transform="translate(0, 5)">
        <path d="M18.1 2L3.7 23.3H12.8L21.8 9.6L18.1 2Z" fill="#0078D4"/>
        <path d="M19.5 3.8L11.2 31.3H21.6L29.6 16.8L19.5 3.8Z" fill="#50E6FF"/>
        <path d="M0.7 31.3H18.1L27.7 17.4L19.5 3.8L0.7 31.3Z" fill="#0078D4"/>
      </g>
      <text x="38" y="25" fontFamily="Segoe UI, sans-serif" fontWeight="600" fontSize="20" fill="#0f172a">Azure</text>
    </svg>
  );
};

/**
 * Official Google Cloud Logo Component
 */
export const GoogleCloudLogo: React.FC<PlatformLogoProps> = ({ className, size = "md" }) => {
  const sizes = {
    sm: "h-5 w-auto",
    md: "h-7 w-auto",
    lg: "h-9 w-auto",
  };

  return (
    <svg
      viewBox="0 0 170 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("object-contain shrink-0", sizes[size], className)}
      aria-label="Google Cloud Logo"
    >
      <g transform="translate(0, 5)">
        <path d="M25.7 15.5C25.7 14.7 25.6 14 25.5 13.3H13.3V18.4H20.3C20 19.9 19.1 21.2 17.7 22.1V25.2H21.9C24.3 23 25.7 19.5 25.7 15.5Z" fill="#4285F4"/>
        <path d="M13.3 28C16.8 28 19.6 26.8 21.9 25.2L17.7 22.1C16.5 22.9 15.1 23.3 13.3 23.3C10 23.3 7.2 21.1 6.1 18H1.9V21.2C4.1 25.3 8.4 28 13.3 28Z" fill="#34A853"/>
        <path d="M6.1 18C5.8 17.2 5.7 16.3 5.7 15.3C5.7 14.4 5.8 13.5 6.1 12.7V9.5H1.9C0.9 11.2 0.4 13.2 0.4 15.3C0.4 17.5 0.9 19.5 1.9 21.2L6.1 18Z" fill="#FBBC05"/>
        <path d="M13.3 7.3C15.2 7.3 16.9 8 18.3 9.2L22.3 5.5C19.6 3 16.8 1.8 13.3 1.8C8.4 1.8 4.1 4.5 1.9 8.6L6.1 11.8C7.2 8.7 10 7.3 13.3 7.3Z" fill="#EA4335"/>
      </g>
      <text x="34" y="25" fontFamily="Roboto, sans-serif" fontWeight="500" fontSize="18" fill="#0f172a">Google Cloud</text>
    </svg>
  );
};

/**
 * Official Oracle Logo Component
 */
export const OracleLogo: React.FC<PlatformLogoProps> = ({ className, size = "md" }) => {
  const sizes = {
    sm: "h-5 w-auto",
    md: "h-7 w-auto",
    lg: "h-9 w-auto",
  };

  return (
    <svg
      viewBox="0 0 130 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("object-contain shrink-0", sizes[size], className)}
      aria-label="Oracle Logo"
    >
      <path d="M19.5 5H9.6C4.3 5 0 9.3 0 14.6V22C0 27.3 4.3 31.6 9.6 31.6H19.5C24.8 31.6 29.1 27.3 29.1 22V14.6C29.1 9.3 24.8 5 19.5 5ZM22.8 22C22.8 23.8 21.3 25.3 19.5 25.3H9.6C7.8 25.3 6.3 23.8 6.3 22V14.6C6.3 12.8 7.8 11.3 9.6 11.3H19.5C21.3 11.3 22.8 12.8 22.8 14.6V22Z" fill="#C74634"/>
      <text x="35" y="25" fontFamily="Helvetica Neue, Arial, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.5" fill="#C74634">ORACLE</text>
    </svg>
  );
};
