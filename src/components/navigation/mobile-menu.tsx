"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { LogoWrapper } from "@/components/layout/logo-wrapper";
import { Button } from "@/components/ui/button";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  triggerRef,
}) => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Synchronize rendering state during render when opening
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setIsRendered(true);
    }
  }

  // Smooth enter/exit transition synchronization
  useEffect(() => {
    if (isOpen) {
      const raf = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      const raf = requestAnimationFrame(() => {
        setIsVisible(false);
      });
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 300);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  // Focus management: focus Close button when opening, restore to trigger on close
  useEffect(() => {
    if (isOpen && isVisible) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen, isVisible]);

  const handleClose = React.useCallback(() => {
    onClose();
    triggerRef?.current?.focus();
  }, [onClose, triggerRef]);

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      handleClose();
    }
  }, [pathname, handleClose, isOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Close menu on Escape key press & Focus Trap
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isRendered) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-out-smooth",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[#01153B]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Slide-in Drawer Sheet */}
      <div
        ref={drawerRef}
        className={cn(
          "relative ml-auto h-full w-full max-w-sm sm:max-w-md bg-white text-slate-900 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out-smooth motion-reduce:transition-none motion-reduce:transform-none",
          isVisible ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Top Bar inside Mobile Menu */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 shrink-0">
          <LogoWrapper size="sm" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="p-2 rounded-lg text-slate-600 hover:text-[#01153B] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] active:scale-95"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Accordion / Navigation Links List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
          {MAIN_NAVIGATION.map((item) => {
            const hasCategories = item.categories && item.categories.length > 0;
            const isExpanded = !!expandedItems[item.id];
            const isActive = pathname === item.href;

            return (
              <div key={item.id} className="border-b border-slate-100 pb-2">
                {!hasCategories ? (
                  <Link
                    href={item.href}
                    onClick={handleClose}
                    className={cn(
                      "flex items-center py-2.5 px-3 text-sm font-semibold rounded-lg transition-all duration-150 min-h-[42px] focus-visible:outline-2 focus-visible:outline-[#00B3FF]",
                      isActive
                        ? "text-[#01153B] bg-[#00B3FF]/15 font-bold"
                        : "text-slate-800 hover:text-[#00B3FF] hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`mobile-sub-${item.id}`}
                      className={cn(
                        "flex items-center justify-between w-full py-2.5 px-3 text-sm font-semibold text-left rounded-lg transition-all duration-150 min-h-[42px] focus-visible:outline-2 focus-visible:outline-[#00B3FF]",
                        isExpanded
                          ? "text-[#00B3FF] bg-[#00B3FF]/10"
                          : "text-slate-800 hover:text-[#00B3FF] hover:bg-slate-50"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 ease-out-smooth",
                          isExpanded ? "rotate-180 text-[#00B3FF]" : "text-slate-400"
                        )}
                      />
                    </button>

                    {/* Animated Expanded Submenu Accordion */}
                    <div
                      id={`mobile-sub-${item.id}`}
                      role="region"
                      aria-label={`${item.label} sub-navigation`}
                      inert={!isExpanded}
                      className={cn(
                        "grid transition-all duration-300 ease-out-smooth overflow-hidden pl-3 border-l-2 border-[#00B3FF]/30 motion-reduce:transition-none",
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-2 py-1.5"
                          : "grid-rows-[0fr] opacity-0 py-0"
                      )}
                    >
                      <div className="overflow-hidden space-y-2">
                        {item.categories?.map((cat, idx) => (
                          <div key={idx} className="space-y-1.5">
                            {cat.categoryTitle && (
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 pt-1 font-mono">
                                {cat.categoryTitle}
                              </p>
                            )}
                            <div className="space-y-0.5">
                              {cat.items.map((sub) => {
                                const hasChildren = sub.children && sub.children.length > 0;
                                return (
                                  <div key={sub.href} className="space-y-0.5">
                                    <Link
                                      href={sub.href}
                                      onClick={handleClose}
                                      className="block text-xs text-slate-700 hover:text-[#00B3FF] hover:bg-slate-50 py-2 px-2.5 rounded-md font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] min-h-[38px] flex items-center"
                                    >
                                      {sub.title}
                                    </Link>
                                    {hasChildren && (
                                      <div className="pl-3 ml-2 space-y-0.5 border-l border-slate-200 py-1">
                                        {sub.children!.map((child) => (
                                          <Link
                                            key={child.href}
                                            href={child.href}
                                            onClick={handleClose}
                                            className="block text-[11px] text-slate-500 hover:text-[#00B3FF] hover:bg-slate-50 py-1.5 px-2.5 rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] min-h-[34px] flex items-center"
                                          >
                                            {child.title}
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
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Footer CTAs */}
        <div className="p-5 border-t border-slate-200 space-y-3 bg-slate-50 shrink-0">
          <Link href="/contact" onClick={handleClose} className="block w-full">
            <Button variant="primary" size="lg" className="w-full justify-between">
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <p className="text-[11px] text-center text-slate-500 pt-0.5 font-sans">
            ZOFT Corp — Enterprise Technology &amp; Database Advisory
          </p>
        </div>
      </div>
    </div>
  );
};

