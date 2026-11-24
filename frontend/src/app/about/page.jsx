"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header (PDF Screen 05) */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
            {t("aboutTag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            {t("aboutTitle")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            {t("aboutSubtitle")}
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-black">50K+</div>
            <div className="text-xs text-gray-500 mt-1 font-semibold">{t("ridersStat")}</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-black">3,000+</div>
            <div className="text-xs text-gray-500 mt-1 font-semibold">{t("driversStat")}</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-black">12</div>
            <div className="text-xs text-gray-500 mt-1 font-semibold">{t("citiesStat")}</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-black">4.8★</div>
            <div className="text-xs text-gray-500 mt-1 font-semibold">{t("avgRatingStat")}</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-xl mb-8">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
            {t("missionText")}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-medium rounded-full text-xs sm:text-sm transition"
          >
            {t("getInTouch")}
          </Link>
        </div>
      </div>
    </div>
  );
}
