"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

export default function Home() {
  const { t } = useLanguage();
  const { drivers } = useApp();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const topDrivers = (drivers || []).slice(0, 3);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const services = [
    {
      title: t("serviceExecutiveTitle"),
      desc: t("serviceExecutiveDesc"),
      img: "/images/executive-chauffeur.jpg",
      tag: "Business & Airport",
    },
    {
      title: t("serviceFamilyTitle"),
      desc: t("serviceFamilyDesc"),
      img: "/images/passenger-relaxing.jpg",
      tag: "Family Care",
    },
    {
      title: t("serviceOutstationTitle"),
      desc: t("serviceOutstationDesc"),
      img: "/images/highway-trip.jpg",
      tag: "Outstation & Expressways",
    },
    {
      title: t("serviceNightTitle"),
      desc: t("serviceNightDesc"),
      img: "/images/night-out.jpg",
      tag: "Parties & Dining",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* CINEMATIC HERO SECTION WITH BACKGROUND VIDEO */}
      <section className="relative overflow-hidden bg-black text-white min-h-[600px] sm:min-h-[680px] flex items-center justify-center py-20 px-4 sm:px-6">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-car.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 transition-opacity duration-700"
        >
          <source src="/videos/hero-drive.mp4" type="video/mp4" />
          <source src="/videos/city-drive.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Optimum Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 backdrop-blur-[0.5px]"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
              {t("trustedRiders")}
            </span>
          </div>

          {/* Hero Tagline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
            {t("brandTagline")}
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm font-normal">
            {t("heroSubtitle")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-md mx-auto">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-200 text-black font-bold rounded-full text-sm transition active:scale-95 shadow-lg shadow-black/40 text-center"
            >
              {t("bookDriver")}
            </Link>
            <Link
              href="/drivers"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-sm border border-white/25 backdrop-blur-md transition text-center"
            >
              {t("browseDrivers")}
            </Link>
          </div>
        </div>

        {/* Video Control Pill (Bottom Right) */}
        <div className="absolute bottom-5 right-5 z-20">
          <button
            onClick={toggleVideo}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 backdrop-blur-md text-[11px] font-medium transition"
            title={isPlaying ? t("pauseVideo") : t("playVideo")}
          >
            <span>{isPlaying ? "❚❚" : "▶"}</span>
            <span>{isPlaying ? t("pauseVideo") : t("playVideo")}</span>
          </button>
        </div>
      </section>

      {/* PLATFORM SERVICES SHOWCASE (WITH REAL SERVICE IMAGERY) */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
              PLATFORM SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
              {t("ourServicesTitle")}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 leading-relaxed">
              {t("ourServicesSub")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-black transition-all hover:shadow-md flex flex-col justify-between"
              >
                {/* Service Image with Zoom Hover */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-base text-black mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href="/book"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-black group-hover:underline"
                  >
                    <span>{t("bookDriver")}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
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

      {/* TOP-RATED DRIVERS PREVIEW (WITH AUTHENTIC CHAUFFEUR PHOTOS) */}
      <section className="py-12 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                {t("topRatedDrivers")}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Background-verified and rated by personal vehicle owners
              </p>
            </div>
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
                <div className="flex items-center gap-3 mb-4">
                  {/* Photo Avatar */}
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                    {driver.avatar ? (
                      <img
                        src={driver.avatar}
                        alt={driver.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-sm text-black">
                        {driver.name.charAt(0)}
                      </div>
                    )}
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-sm text-black">{driver.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {driver.city} • {driver.car}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                  {driver.bio}
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-black">
                    ★ {driver.rating} <span className="text-gray-400 font-normal">({driver.trips} {t("trips")})</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-black">₹{driver.rate}/hr</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "DRIVE WITH DRIVECONNECT" CTA CARD (WITH BACKGROUND IMAGE) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center border border-gray-200 shadow-xl bg-black text-white">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105"
              style={{ backgroundImage: `url('/images/driver-cta.jpg')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80"></div>

            {/* Content */}
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white mb-4">
                Partner Chauffeur Program
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                {t("driveWithUsTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mb-8 leading-relaxed">
                {t("driveWithUsDesc")}
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-3.5 bg-white text-black font-bold rounded-full text-xs sm:text-sm hover:bg-gray-200 transition active:scale-95 shadow-lg"
              >
                {t("becomeDriver")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
