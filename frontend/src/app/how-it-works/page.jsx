"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header (PDF Screen 03) */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
            {t("hiwTag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            {t("hiwTitle")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            {t("hiwSubtitle")}
          </p>
        </div>

        {/* 3 Step Cards with Authentic Service Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between hover:border-black transition">
            <div className="h-44 w-full bg-gray-100 overflow-hidden relative">
              <img
                src="/images/hero-car.jpg"
                alt="Choose your time"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-md">
                1
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-black mb-2">{t("hiwStep1Title")}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t("hiwStep1Desc")}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between hover:border-black transition">
            <div className="h-44 w-full bg-gray-100 overflow-hidden relative">
              <img
                src="/images/executive-chauffeur.jpg"
                alt="Get matched"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-md">
                2
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-black mb-2">{t("hiwStep2Title")}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t("hiwStep2Desc")}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between hover:border-black transition">
            <div className="h-44 w-full bg-gray-100 overflow-hidden relative">
              <img
                src="/images/passenger-relaxing.jpg"
                alt="Enjoy the ride"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-md">
                3
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-black mb-2">{t("hiwStep3Title")}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t("hiwStep3Desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/book"
            className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-medium rounded-full text-xs sm:text-sm transition text-center"
          >
            {t("bookDriver")}
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full text-xs sm:text-sm transition text-center"
          >
            {t("seePricing")}
          </Link>
        </div>
      </div>
    </div>
  );
}
