"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

function BookContent() {
  const { t } = useLanguage();
  const { drivers, showNotification } = useApp();
  const searchParams = useSearchParams();
  const preselectedDriverId = searchParams.get("driver");

  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
    duration: "4", // "2" | "4" | "8"
    carType: "Automatic", // "Automatic" | "Manual"
    driverId: preselectedDriverId || "arjun",
    clientName: "",
    clientPhone: "",
    notes: "",
  });

  const [confirmed, setConfirmed] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (preselectedDriverId) {
      setFormData((prev) => ({ ...prev, driverId: preselectedDriverId }));
    }
  }, [preselectedDriverId]);

  const selectedDriver =
    (drivers || []).find((d) => d.id === formData.driverId) || (drivers && drivers[0]) || {
      id: "arjun",
      name: "Arjun Mehta",
      rate: 450,
      phone: "919876543211",
      city: "Mumbai",
      car: "Toyota Camry",
      rating: 4.9,
      trips: 1240,
    };

  const hoursNum = parseInt(formData.duration, 10) || 4;
  const estimatedTotal = selectedDriver.rate * hoursNum;

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingRecord = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      driver: selectedDriver,
      pickup: formData.pickup,
      destination: formData.destination || "City Destination",
      date: formData.date || "Today",
      time: formData.time || "Immediate",
      duration: `${formData.duration} ${t("hours2").includes("तास") ? "तास" : t("hours2").includes("घंटे") ? "घंटे" : "hours"}`,
      carType: formData.carType === "Automatic" ? t("automatic") : t("manual"),
      totalFare: estimatedTotal,
      clientName: formData.clientName || "Valued Rider",
      clientPhone: formData.clientPhone || "919820012345",
    };

    setConfirmedBooking(bookingRecord);
    setConfirmed(true);
    showNotification(
      `Booking request sent to ${selectedDriver.name}! Connect directly via WhatsApp.`,
      "success"
    );
  };

  if (confirmed && confirmedBooking) {
    const waMessage = `Hello ${confirmedBooking.driver.name}! I booked your chauffeuring service on DriveConnect (Booking ID: ${confirmedBooking.id}).%0A%0A*Trip Details:*%0A• Pickup: ${confirmedBooking.pickup}%0A• Date & Time: ${confirmedBooking.date} at ${confirmedBooking.time}%0A• Duration: ${confirmedBooking.duration}%0A• Vehicle: ${confirmedBooking.carType}%0A• Est. Total: ₹${confirmedBooking.totalFare}%0A%0APlease let me know your confirmation!`;

    const waLink = `https://wa.me/${confirmedBooking.driver.phone}?text=${waMessage}`;

    return (
      <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 flex items-center justify-center">
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl p-8 shadow-sm text-center">
          {/* Success Checkmark */}
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black">
            ✓
          </div>

          <h2 className="text-2xl font-black mt-5">
            {t("bookingConfirmed")}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {t("bookingConfirmedSub")}
          </p>

          {/* Booking Summary Box */}
          <div className="mt-6 bg-gray-50 rounded-2xl p-4 text-left border border-gray-100 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">{t("bookingId")}</span>
              <span className="font-bold text-black">{confirmedBooking.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t("assignedDriver")}</span>
              <span className="font-bold text-black">{confirmedBooking.driver.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t("pickupLocation")}</span>
              <span className="font-bold text-black truncate max-w-[200px]">
                {confirmedBooking.pickup}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t("schedule")}</span>
              <span className="font-bold text-black">
                {confirmedBooking.date} • {confirmedBooking.time}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t("duration")}</span>
              <span className="font-bold text-black">{confirmedBooking.duration}</span>
            </div>
            <div className="pt-2 border-t border-gray-200 flex justify-between font-black text-sm">
              <span>{t("totalEstFare")}</span>
              <span>₹{confirmedBooking.totalFare}</span>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="mt-6 space-y-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
              </svg>
              <span>{t("openWhatsApp")}</span>
            </a>

            <Link
              href="/"
              className="block w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-black rounded-xl text-xs font-bold transition"
            >
              {t("backToHome")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header (Screen 07) */}
        <div className="mb-8">
          <Link
            href="/drivers"
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-black mb-4 transition"
          >
            {t("backToDrivers")}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("bookingTitle")}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            {t("bookingSub")}
          </p>
        </div>

        {/* Selected Driver Banner */}
        <div className="mb-8 p-4 rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white font-extrabold text-sm flex items-center justify-center">
              {selectedDriver.name[0]}
            </div>
            <div>
              <div className="font-extrabold text-sm text-black">
                {selectedDriver.name}
              </div>
              <div className="text-xs text-gray-500">
                {selectedDriver.city} • ★ {selectedDriver.rating} ({selectedDriver.trips} {t("trips")})
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-black text-black">₹{selectedDriver.rate}/hr</div>
            <Link
              href="/drivers"
              className="text-[11px] text-gray-500 hover:text-black font-semibold underline"
            >
              {t("changeDriver")}
            </Link>
          </div>
        </div>

        {/* Booking Form (PDF Screen 07) */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pickup Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              {t("pickupAddress")} *
            </label>
            <input
              type="text"
              required
              placeholder={t("pickupAddressPlaceholder")}
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t("pickupDate")} *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t("pickupTime")} *
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>
          </div>

          {/* Duration Options */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              {t("duration")} *
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "2", label: t("hours2") },
                { value: "4", label: t("hours4") },
                { value: "8", label: t("fullDay") },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, duration: item.value })}
                  className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition ${
                    formData.duration === item.value
                      ? "bg-black text-white border-black"
                      : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Car Type (Transmission) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              {t("carType")} *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "Automatic", label: t("automatic") },
                { value: "Manual", label: t("manual") },
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, carType: type.value })}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition ${
                    formData.carType === type.value
                      ? "bg-black text-white border-black"
                      : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t("yourName")}
              </label>
              <input
                type="text"
                required
                placeholder="Ravi Sharma"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                {t("whatsappPhone")}
              </label>
              <input
                type="tel"
                required
                placeholder="9820012345"
                value={formData.clientPhone}
                onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>
          </div>

          {/* Pricing Estimation summary */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>{t("driverHourlyRate")}</span>
              <span>₹{selectedDriver.rate} / hr</span>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>{t("duration")}</span>
              <span>{formData.duration} {t("hours2").includes("तास") ? "तास" : t("hours2").includes("घंटे") ? "घंटे" : "Hours"}</span>
            </div>
            <div className="pt-2 border-t border-gray-200 flex justify-between font-black text-base text-black">
              <span>{t("totalEstFare")}</span>
              <span>₹{estimatedTotal}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition shadow-sm"
          >
            {t("confirmBooking")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center p-8">
          <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <BookContent />
    </Suspense>
  );
}
