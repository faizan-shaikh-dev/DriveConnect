"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_CONFIG } from "@/utils/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("drivers"), href: "/drivers" },
    { label: t("howItWorks"), href: "/how-it-works" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  const whatsAppLink = WHATSAPP_CONFIG.createWhatsAppLink(
    WHATSAPP_CONFIG.dispatchNumber,
    "Hello DriveConnect! I need a driver for my car. Please connect me with an available driver."
  );

  return (
    <header className="w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="font-extrabold text-base sm:text-lg text-black tracking-tight flex items-center gap-2 group">
          <span className="w-7 h-7 bg-black text-white rounded-lg flex items-center justify-center text-xs font-black group-hover:scale-105 transition-transform">
            D
          </span>
          DriveConnect
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive ? "text-black font-semibold" : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full animate-scale-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Language Switcher (Desktop) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Switcher */}
          <div className="flex items-center p-1 bg-gray-100 rounded-full border border-gray-200 text-xs font-semibold">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition ${
                language === "en" ? "bg-black text-white shadow-xs" : "text-gray-600 hover:text-black"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2.5 py-1 rounded-full transition ${
                language === "hi" ? "bg-black text-white shadow-xs" : "text-gray-600 hover:text-black"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLanguage("mr")}
              className={`px-2.5 py-1 rounded-full transition ${
                language === "mr" ? "bg-black text-white shadow-xs" : "text-gray-600 hover:text-black"
              }`}
            >
              मराठी
            </button>
          </div>

          <Link
            href="/login"
            className="text-xs sm:text-sm px-3.5 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition font-medium"
          >
            {t("login")}
          </Link>

          <Link
            href="/book"
            className="text-xs sm:text-sm px-4 sm:px-5 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 active:scale-95 transition-all shadow-sm shadow-black/10 whitespace-nowrap"
          >
            {t("bookDriver")}
          </Link>
        </div>

        {/* Mobile Header Right (Lang + Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Mobile Language Toggle */}
          <div className="flex items-center bg-gray-100 p-0.5 rounded-full border border-gray-200 text-[11px] font-bold">
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : language === "hi" ? "mr" : "en")}
              className="px-2.5 py-1 bg-black text-white rounded-full uppercase"
            >
              {language}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 sm:px-6 py-5 animate-slide-up space-y-4 shadow-xl">
          {/* Mobile Language Selector Tabs */}
          <div className="grid grid-cols-3 p-1 bg-gray-100 rounded-xl text-xs font-semibold text-center">
            <button
              onClick={() => setLanguage("en")}
              className={`py-1.5 rounded-lg transition ${
                language === "en" ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`py-1.5 rounded-lg transition ${
                language === "hi" ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLanguage("mr")}
              className={`py-1.5 rounded-lg transition ${
                language === "mr" ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              मराठी
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive ? "bg-gray-100 text-black font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
            >
              {t("login")}
            </Link>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-xl transition"
            >
              {t("bookDriver")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
