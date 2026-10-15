"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Cloud,
  Database,
  Layers,
  ShieldCheck,
  Cpu,
  Server,
  Zap,
  Code2,
  Activity,
  CheckCircle2,
  FileText,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NavItem as NavItemType } from "@/data/navigation";

const ICON_MAP: Record<string, LucideIcon> = {
  Cloud,
  Database,
  Layers,
  ShieldCheck,
  Cpu,
  Server,
  Zap,
  Code2,
  Activity,
  CheckCircle2,
  FileText,
  TrendingUp,
};

export interface NavItemProps {
  item: NavItemType;
}

export const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive =
    pathname === item.href ||
    (item.categories &&
      item.categories.some((cat) =>
        cat.items.some(
          (sub) =>
            pathname === sub.href ||
            (sub.children && sub.children.some((child) => pathname === child.href))
        )
      ));

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (item.type !== "link") setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (item.type === "link") {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2",
          isActive
            ? "text-[#01153B] bg-[#00B3FF]/10 font-semibold"
            : "text-slate-700 hover:text-[#01153B] hover:bg-slate-100/70"
        )}
      >
        {item.label}
      </Link>
    );
  }

  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      // If arrow down, focus first link inside dropdown after render
      if (e.key === "ArrowDown") {
        setTimeout(() => {
          const firstLink = dropdownRef.current?.querySelector<HTMLAnchorElement>("a");
          firstLink?.focus();
        }, 50);
      }
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`menu-dropdown-${item.id}`}
        className={cn(
          "inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2",
          isActive || isOpen
            ? "text-[#01153B] bg-[#00B3FF]/10 font-semibold"
            : "text-slate-700 hover:text-[#01153B] hover:bg-slate-100/70"
        )}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200 ease-out-smooth opacity-70",
            isOpen && "rotate-180 text-[#00B3FF] opacity-100"
          )}
        />
      </button>

      {/* Dropdown / Mega-Menu Container with Safe Hover Bridge */}
      {isOpen && (
        <div
          id={`menu-dropdown-${item.id}`}
          className={cn(
            "absolute top-full left-0 mt-2 z-50 rounded-xl bg-white border border-slate-200 shadow-xl p-6 text-slate-900 animate-dropdownIn",
            "before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3",
            item.type === "mega-menu"
              ? "w-[720px] -left-36 grid grid-cols-12 gap-6"
              : "w-[380px]"
          )}
        >
          <div
            className={cn(
              item.type === "mega-menu" ? "col-span-8 space-y-6" : "space-y-4"
            )}
          >
            {item.categories?.map((cat, idx) => (
              <div key={idx} className="space-y-3">
                {cat.categoryTitle && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-2">
                    {cat.categoryTitle}
                  </p>
                )}
                <div className="space-y-1">
                  {cat.items.map((subItem) => {
                    const IconComp = subItem.iconName
                      ? ICON_MAP[subItem.iconName]
                      : null;
                    const hasChildren = subItem.children && subItem.children.length > 0;

                    return (
                      <div
                        key={subItem.href}
                        className="p-2.5 rounded-lg hover:bg-slate-50/90 transition-all duration-150 group"
                      >
                        <Link
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2"
                        >
                          {IconComp && (
                            <div className="w-8 h-8 rounded-md bg-[#00B3FF]/10 text-[#01153B] flex items-center justify-center shrink-0 border border-[#00B3FF]/20 group-hover:border-[#00B3FF] group-hover:bg-[#00B3FF]/20 group-hover:scale-105 transition-all duration-200 mt-0.5 motion-reduce:group-hover:scale-100">
                              <IconComp className="w-4 h-4 text-[#00B3FF]" />
                            </div>
                          )}
                          <div className="space-y-0.5 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-[#01153B] group-hover:text-[#00B3FF] group-hover:translate-x-0.5 transition-all duration-150 motion-reduce:group-hover:translate-x-0">
                                {subItem.title}
                              </span>
                              {subItem.badge && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00B3FF]/15 text-[#01153B] font-bold uppercase">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            {subItem.description && (
                              <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                                {subItem.description}
                              </p>
                            )}
                          </div>
                        </Link>

                        {hasChildren && (
                          <div className="mt-2 pl-2 pt-1.5 border-t border-slate-100 flex flex-wrap items-center gap-x-3 gap-y-1">
                            {subItem.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xs font-medium text-slate-600 hover:text-[#00B3FF] hover:translate-x-0.5 transition-all duration-150 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-1 py-0.5 motion-reduce:hover:translate-x-0"
                              >
                                <span className="text-slate-400 text-[10px]">↳</span>
                                <span>{child.title}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Mega-menu banner */}
          {item.type === "mega-menu" && item.featuredBanner && (
            <div className="col-span-4 bg-[#01153B] text-white p-5 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#00B3FF] uppercase tracking-wider">
                  Featured Focus
                </span>
                <p className="text-sm font-bold text-slate-100 leading-snug">
                  {item.featuredBanner.title}
                </p>
                <p className="text-xs text-slate-300 leading-normal">
                  {item.featuredBanner.description}
                </p>
              </div>
              <Link
                href={item.featuredBanner.ctaHref}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B3FF] hover:text-[#33C2FF] mt-4 group focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded py-0.5 transition-colors"
              >
                <span>{item.featuredBanner.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out-smooth group-hover:translate-x-1 motion-reduce:transform-none" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
