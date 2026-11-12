"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { LogoWrapper } from "@/components/layout/logo-wrapper";
import { NavItem } from "@/components/navigation/nav-item";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Split navigation items: main center items vs right contact item
  const centerNavItems = MAIN_NAVIGATION.filter((item) => item.id !== "contact");

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-slate-200/90 shadow-xs py-3"
          : "bg-white/95 backdrop-blur-sm border-slate-200/80 py-4"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT: Official ZOFT Logo */}
        <LogoWrapper size="md" />

        {/* CENTER / MAIN NAVIGATION */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1.5"
        >
          {centerNavItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>

        {/* RIGHT: Contact Link & Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 hover:text-[#00B3FF] transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/70 focus-visible:outline-2 focus-visible:outline-[#00B3FF] focus-visible:outline-offset-2"
          >
            Contact
          </Link>
          <Link href="/contact">
            <Button variant="primary" size="md">
              Talk to an Expert
            </Button>
          </Link>
        </div>

        {/* MOBILE: Hamburger Trigger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-lg text-slate-700 hover:text-[#01153B] bg-white border border-slate-200 hover:border-slate-300 transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] active:scale-95 touch-manipulation cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-800" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-slate-800" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        triggerRef={hamburgerRef}
      />
    </header>
  );
};

