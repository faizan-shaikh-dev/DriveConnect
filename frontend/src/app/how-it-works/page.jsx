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
            HOW IT WORKS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            Three steps to a stress-free drive
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            Simple, transparent and built around your schedule.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs mb-6">
                1
              </div>
              <h3 className="text-base font-bold text-black mb-2">Choose a time</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pick your date, pickup location and how long you need a driver.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs mb-6">
                2
              </div>
              <h3 className="text-base font-bold text-black mb-2">Get matched</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We assign a verified driver near you within minutes. Direct WhatsApp contact shared immediately.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs mb-6">
                3
              </div>
              <h3 className="text-base font-bold text-black mb-2">Enjoy the ride</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Sit back in your own car. Pay securely when you're done. Rate your driver to help the community.
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
            See pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
