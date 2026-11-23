"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WHATSAPP_CONFIG } from "@/utils/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Drivers", href: "/drivers" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const whatsAppLink = WHATSAPP_CONFIG.createWhatsAppLink(
    WHATSAPP_CONFIG.dispatchNumber,
    "Hello DriveConnect! I want to book a driver for my car. Please connect me with an available driver."
  );

  return (
    <header className="w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="font-extrabold text-lg text-black tracking-tight flex items-center gap-2 group">
          <span className="w-7 h-7 bg-black text-white rounded-lg flex items-center justify-center text-xs font-black group-hover:scale-105 transition-transform">
            D
          </span>
          DriveConnect
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
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

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3.5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-full font-semibold transition"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            WhatsApp
          </a>
          <Link
            href="/login"
            className="text-sm px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition font-medium"
          >
            Log in
          </Link>
          <Link
            href="/book"
            className="text-sm px-5 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 active:scale-95 transition-all shadow-sm shadow-black/10"
          >
            Book a driver
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-6 py-5 animate-slide-up space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive ? "bg-gray-100 text-black font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 rounded-xl transition flex items-center justify-center gap-2"
            >
              💬 Connect on WhatsApp
            </a>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
            >
              Log in
            </Link>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-xl transition"
            >
              Book a driver
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
