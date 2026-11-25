"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header (PDF Screen 04) */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
            {t("pricingTag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            {t("pricingTitle")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            {t("pricingSubtitle")}
          </p>
        </div>

        {/* 3 Pricing Cards (PDF Screen 04) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {/* Hourly */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">{t("hourlyPlan")}</span>
              <div className="my-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-black">{t("hourlyRate")}</span>
                <span className="text-xs text-gray-500"> {t("perHourUnit")}</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 mb-8">
                <li>— {t("hourlyFeat1")}</li>
                <li>— {t("hourlyFeat2")}</li>
                <li>— {t("hourlyFeat3")}</li>
              </ul>
            </div>
            <Link
              href="/book"
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center rounded-xl text-xs font-semibold transition"
            >
              {t("getStarted")}
            </Link>
          </div>

          {/* Full Day (Highlighted with black border and button) */}
          <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-md flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="text-xs font-bold text-black uppercase tracking-wider">{t("fullDayPlan")}</span>
              <div className="my-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-black">{t("fullDayRate")}</span>
                <span className="text-xs text-gray-500"> {t("perDayUnit")}</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li>— {t("fullDayFeat1")}</li>
                <li>— {t("fullDayFeat2")}</li>
                <li>— {t("fullDayFeat3")}</li>
              </ul>
            </div>
            <Link
              href="/book"
              className="w-full py-3 bg-black hover:bg-gray-800 text-white text-center rounded-xl text-xs font-semibold transition shadow-sm"
            >
              {t("getStarted")}
            </Link>
          </div>

          {/* Monthly */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">{t("monthlyPlan")}</span>
              <div className="my-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-black">{t("monthlyRate")}</span>
                <span className="text-xs text-gray-500"> {t("perMonthUnit")}</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 mb-8">
                <li>— {t("monthlyFeat1")}</li>
                <li>— {t("monthlyFeat2")}</li>
                <li>— {t("monthlyFeat3")}</li>
              </ul>
            </div>
            <Link
              href="/book"
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center rounded-xl text-xs font-semibold transition"
            >
              {t("getStarted")}
            </Link>
          </div>
        </div>

        {/* Visual Outstation / Corporate Banner */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 bg-black text-white border border-gray-800 shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
            style={{ backgroundImage: `url('/images/highway-trip.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          <div className="relative z-10 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
              Custom Requirements
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-3">
              Need Intercity Highway Trips or Monthly Corporate Fleet Drivers?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              We provide certified chauffeurs for multi-day outstation journeys, luxury SUVs, and corporate monthly retainers with direct billing.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition"
            >
              Contact Corporate Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
