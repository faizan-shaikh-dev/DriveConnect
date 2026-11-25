"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Banner with Background Image (PDF Screen 05) */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-white mb-12 bg-black border border-gray-800 shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
            style={{ backgroundImage: `url('/images/hero-car.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
              {t("aboutTag")}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {t("aboutTitle")}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
              {t("aboutSubtitle")}
            </p>
          </div>
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

        {/* Visual Story Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-black mb-4">
              Our Vision for Personal Car Mobility
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              {t("missionText")}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              Unlike traditional ride-hailing where you sit in another stranger's car, DriveConnect keeps you in your own sanitized, familiar personal vehicle with a certified executive driver behind the wheel.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-medium rounded-full text-xs sm:text-sm transition shadow-sm"
            >
              {t("getInTouch")}
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md h-72">
            <img
              src="/images/passenger-relaxing.jpg"
              alt="Passenger relaxing in backseat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
