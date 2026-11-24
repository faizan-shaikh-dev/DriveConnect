"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

export default function DriverDashboard() {
  const { t } = useLanguage();
  const {
    drivers,
    activeDriverId,
    activeRide,
    startTrip,
    finishTrip,
    showNotification,
  } = useApp();

  const currentDriver =
    drivers.find((d) => d.id === activeDriverId) || drivers[0];
  const isBusy = currentDriver?.status === "busy";

  // Weekly activity bar chart mock (Screen 10 in PDF)
  const weeklyData = [
    { day: "Mon", trips: 3, height: "45%" },
    { day: "Tue", trips: 5, height: "70%" },
    { day: "Wed", trips: 4, height: "60%" },
    { day: "Thu", trips: 6, height: "85%" },
    { day: "Fri", trips: 5, height: "75%" },
    { day: "Sat", trips: 7, height: "100%" },
    { day: "Sun", trips: 2, height: "35%" },
  ];

  const handleStartTrip = () => {
    startTrip();
  };

  const handleFinishTrip = () => {
    finishTrip();
  };

  const waRiderLink = `https://wa.me/${activeRide.customerPhone}?text=${encodeURIComponent(
    `Hello ${activeRide.customer}! I am your DriveConnect Chauffeur (${currentDriver.name}). I am coordinating your trip to ${activeRide.destination}. Let me know if you are ready at ${activeRide.pickup}!`
  )}`;

  return (
    <div className="min-h-screen bg-white text-black py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Header (Screen 10) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Driver Partner Portal
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="text-xs text-gray-500">ID: #DRV-8491</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-1">
              {t("welcomeBack")}, {currentDriver.name}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Profile Availability Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs">
              {isBusy ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="font-bold text-black">{t("onTrip")}</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-bold text-gray-700">{t("available")}</span>
                </>
              )}
            </div>

            <Link
              href="/login"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-black text-xs font-bold rounded-xl transition"
            >
              {t("switchAccount")}
            </Link>
          </div>
        </div>

        {/* 4 Metric Cards (Screen 10) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">{t("todaysEarnings")}</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">₹2,450</div>
            <span className="text-[11px] text-gray-400 font-medium">3 trips completed</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">{t("tripsThisWeek")}</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">18</div>
            <span className="text-[11px] text-gray-400 font-medium">+4 vs last week</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">{t("rating")}</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">
              ★ {currentDriver.rating}
            </div>
            <span className="text-[11px] text-gray-400 font-medium">
              Based on {currentDriver.trips} trips
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">{t("hoursOnline")}</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">32h</div>
            <span className="text-[11px] text-gray-400 font-medium">This week</span>
          </div>
        </div>

        {/* Interactive Trip Lifecycle Control Card */}
        <div className="bg-white rounded-3xl border-2 border-black p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-[11px] font-bold text-black mb-2">
                Booking ID: {activeRide.id}
              </div>
              <h2 className="text-xl font-extrabold text-black">
                Assigned Trip: {activeRide.customer}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Vehicle: {activeRide.car} • Scheduled Duration: {activeRide.duration}
              </p>
            </div>

            {/* Current Trip Status Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Trip Status:
              </span>
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-black ${
                  activeRide.status === "on_trip"
                    ? "bg-black text-white"
                    : activeRide.status === "completed"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-gray-200 text-black"
                }`}
              >
                {activeRide.status === "on_trip"
                  ? "ON THE TRIP (BUSY)"
                  : activeRide.status === "completed"
                  ? "COMPLETED"
                  : "ACCEPTED / READY TO START"}
              </span>
            </div>
          </div>

          {/* Trip Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 text-xs">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="text-gray-400 font-bold block mb-1">PICKUP LOCATION</span>
              <span className="font-extrabold text-black text-sm block">
                {activeRide.pickup}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="text-gray-400 font-bold block mb-1">DESTINATION</span>
              <span className="font-extrabold text-black text-sm block">
                {activeRide.destination}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="text-gray-400 font-bold block mb-1">TOTAL FARE</span>
              <span className="font-extrabold text-black text-sm block">
                ₹{activeRide.fare}
              </span>
            </div>
          </div>

          {/* Action Buttons: Start Trip, Finish Trip, WhatsApp */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {activeRide.status !== "on_trip" && activeRide.status !== "completed" && (
              <button
                type="button"
                onClick={handleStartTrip}
                className="flex-1 py-3 px-5 bg-black text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition shadow-sm"
              >
                {t("startTrip")}
              </button>
            )}

            {activeRide.status === "on_trip" && (
              <button
                type="button"
                onClick={handleFinishTrip}
                className="flex-1 py-3 px-5 bg-black text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition shadow-sm animate-pulse"
              >
                {t("finishTrip")}
              </button>
            )}

            {activeRide.status === "completed" && (
              <div className="flex-1 py-3 px-4 bg-gray-100 text-black text-xs font-bold rounded-xl text-center">
                ✓ Trip Completed. Profile is Available in directory.
              </div>
            )}

            <a
              href={waRiderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 border border-gray-300 hover:border-black rounded-xl text-xs font-bold text-black flex items-center justify-center gap-2 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
              </svg>
              <span>WhatsApp Rider</span>
            </a>
          </div>
        </div>

        {/* Weekly Activity Section (Screen 10) */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-extrabold text-black">
              {t("weeklyActivity")}
            </h3>
            <span className="text-xs text-gray-500">Trips completed per day</span>
          </div>

          <div className="h-44 flex items-end justify-between gap-3 pt-6 border-b border-gray-200 px-2 sm:px-6">
            {weeklyData.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-[10px] font-bold text-gray-600">{d.trips}</span>
                <div
                  className="w-full max-w-[36px] bg-black rounded-t-lg transition-all"
                  style={{ height: d.height }}
                ></div>
                <span className="text-xs font-semibold text-gray-500 mt-2">{d.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
