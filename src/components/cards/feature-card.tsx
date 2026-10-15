import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  eyebrow?: string;
  badge?: string;
  href?: string;
  ctaText?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  eyebrow,
  badge,
  href,
  ctaText = "Explore capability",
  className,
}) => {
  const isClickable = Boolean(href);

  const content = (
    <Card
      variant={isClickable ? "interactive" : "default"}
      className={cn("flex flex-col h-full justify-between space-y-6", className)}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <IconContainer variant="cyan" size="md">
            {icon}
          </IconContainer>
          {badge && <Badge variant="cyan">{badge}</Badge>}
        </div>

        {eyebrow && (
          <span className="text-xs font-semibold text-[#00B3FF] uppercase tracking-wider block">
            {eyebrow}
          </span>
        )}

        <h3 className={cn(
          "text-xl font-bold text-[#01153B] transition-colors duration-200",
          isClickable && "group-hover:text-[#00B3FF]"
        )}>
          {title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {href && (
        <div className="pt-4 border-t border-slate-200/90 flex items-center justify-between text-xs font-semibold text-[#01153B] group-hover:text-[#00B3FF] transition-colors duration-200">
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out-smooth group-hover:translate-x-1 motion-reduce:transform-none" />
        </div>
      )}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2 rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
};
