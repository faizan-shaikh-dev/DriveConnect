"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

export default function Home() {
  const { t } = useLanguage();
  const { drivers } = useApp();

  const topDrivers = (drivers || []).slice(0, 3);

  return (
    <div className="w-full bg-white text-gray-900">
      {/* HERO SECTION (PDF Screen 01) */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">
            {t("trustedRiders")}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-[1.1] mb-6">
            {t("brandTagline")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xs sm:max-w-md mx-auto">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-medium rounded-full text-sm transition active:scale-95 shadow-sm text-center"
            >
              {t("bookDriver")}
            </Link>
            <Link
              href="/drivers"
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full text-sm transition text-center"
            >
              {t("browseDrivers")}
            </Link>
          </div>
        </div>
      </section>

      {/* 3 CORE BENEFITS SECTION (PDF Screen 01) */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200/80">
              <span className="text-xs font-mono font-bold text-gray-400 block mb-3">01</span>
              <h3 className="text-base font-bold text-black mb-1.5">{t("benefit1Title")}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t("benefit1Desc")}</p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200/80">
              <span className="text-xs font-mono font-bold text-gray-400 block mb-3">02</span>
              <h3 className="text-base font-bold text-black mb-1.5">{t("benefit2Title")}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t("benefit2Desc")}</p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200/80">
              <span className="text-xs font-mono font-bold text-gray-400 block mb-3">03</span>
              <h3 className="text-base font-bold text-black mb-1.5">{t("benefit3Title")}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t("benefit3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP-RATED DRIVERS PREVIEW (PDF Screen 01) */}
      <section className="py-12 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
              {t("topRatedDrivers")}
            </h2>
            <Link href="/drivers" className="text-xs font-semibold text-gray-500 hover:text-black transition">
              {t("viewAll")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topDrivers.map((driver) => (
              <div
                key={driver.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-black transition"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm mb-4">
                  {driver.name.charAt(0)}
                </div>
                <h3 className="font-bold text-sm text-black">{driver.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {driver.city} • ★ {driver.rating} • {driver.trips} {t("trips")}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-black">₹{driver.rate}/hr</span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      driver.status === "available"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-black text-white"
                    }`}
                  >
                    {driver.status === "available" ? t("available") : t("onTrip")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLACK CALL TO ACTION CARD (PDF Screen 01) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-black text-white rounded-3xl p-8 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              {t("driveWithUsTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
              {t("driveWithUsDesc")}
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-3.5 bg-white text-black font-semibold rounded-full text-xs sm:text-sm hover:bg-gray-200 transition active:scale-95"
            >
              {t("becomeDriver")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
