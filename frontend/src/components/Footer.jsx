"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div>
            <h3 className="font-bold text-black text-base">DriveConnect</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
              {t("footerTagline")}
            </p>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="font-semibold text-xs text-black uppercase tracking-wider mb-3">
              {t("product")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link href="/drivers" className="hover:text-black transition">
                  {t("findDriversLink")}
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-black transition">
                  {t("bookRideLink")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-black transition">
                  {t("pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="font-semibold text-xs text-black uppercase tracking-wider mb-3">
              {t("company")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link href="/about" className="hover:text-black transition">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-black transition">
                  {t("howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals Col */}
          <div>
            <h4 className="font-semibold text-xs text-black uppercase tracking-wider mb-3">
              {t("portals")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link href="/driver" className="hover:text-black transition">
                  {t("driverDashboardLink")}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-black transition">
                  {t("adminDashboardLink")}
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-black transition">
                  {t("becomeDriver")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © 2026 DriveConnect. {t("allRightsReserved")}
        </div>
      </div>
    </footer>
  );
}
