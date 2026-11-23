"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_CONFIG } from "@/utils/whatsapp";

export default function Home() {
  const [bookingType, setBookingType] = useState("hourly");
  const [pickupCity, setPickupCity] = useState("");
  const [hours, setHours] = useState("4");
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const instantWhatsAppLink = WHATSAPP_CONFIG.createWhatsAppLink(
    WHATSAPP_CONFIG.dispatchNumber,
    WHATSAPP_CONFIG.generateBookingMessage({
      serviceType: bookingType,
      pickup: pickupCity || "City location",
      hours,
      carModel: "My Car",
      transmission: "Automatic",
      selectedDriver: "Nearest Available Driver",
      clientName: "Customer",
    })
  );

  const faqs = [
    {
      q: "How does DriveConnect work with WhatsApp?",
      a: "When you book or select a driver, you get connected with them directly on WhatsApp. You can share your exact live location, give gate entry instructions, and receive instant arrival alerts without having to download or learn any new mobile app."
    },
    {
      q: "Can I chat with the driver directly before they arrive?",
      a: "Yes! Every verified driver has a direct WhatsApp contact. You can message them immediately regarding special car instructions (e.g. delicate manual clutch, infant car seat, specific route preferences)."
    },
    {
      q: "Are the drivers background-checked and verified?",
      a: "Yes, 100%. Every driver passes comprehensive background checks, government criminal history screenings, driving license validations, and in-person road driving tests before being onboarded."
    },
    {
      q: "Can drivers handle both automatic and manual transmissions?",
      a: "Absolutely. When booking, you select your car's transmission type (Manual, Automatic, or Luxury/EV). We pair you with drivers experienced and certified for your exact vehicle."
    },
    {
      q: "How does hourly pricing and overtime work?",
      a: "Our rates are completely transparent with no hidden fuel or vehicle charges. You pay for the scheduled duration, and if your trip extends, overtime is billed at a flat per-minute or per-hour rate shown upfront."
    },
    {
      q: "What if I need an outstation or overnight driver?",
      a: "You can book drivers for single-day or multi-day highway trips. Outstation packages include driver day allowances, so you won't encounter unexpected fees."
    }
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-gray-50/70 via-white to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Direct WhatsApp Driver & Client Connection
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.15]">
              Your car. Our driver. <br className="hidden sm:inline" />
              <span className="text-gray-500">Connected on WhatsApp.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Hire vetted, insured personal chauffeurs for your own vehicle by the hour, day, or trip. Connect instantly via WhatsApp to share live locations and get arrival updates.
            </p>
          </div>

          {/* QUICK BOOKING ESTIMATOR CARD */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-200 p-6 md:p-8">
            {/* Tabs */}
            <div className="flex items-center gap-2 border-b border-gray-100 pb-5 mb-6 overflow-x-auto">
              <button
                onClick={() => setBookingType("hourly")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                  bookingType === "hourly"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                Hourly Chauffeur
              </button>
              <button
                onClick={() => setBookingType("outstation")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                  bookingType === "outstation"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                Outstation / Road Trip
              </button>
              <button
                onClick={() => setBookingType("daily")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                  bookingType === "daily"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                Full Day Package
              </button>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Pickup Location */}
              <div className="md:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Pickup City / Area
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    placeholder="Enter pickup address"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Trip Details based on Tab */}
              <div className="md:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  {bookingType === "hourly" ? "Duration" : bookingType === "outstation" ? "Destination" : "Days Needed"}
                </label>
                {bookingType === "hourly" ? (
                  <select
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                  >
                    <option value="2">2 Hours (Quick errands)</option>
                    <option value="4">4 Hours (Half day)</option>
                    <option value="8">8 Hours (Full day)</option>
                    <option value="12">12 Hours (Events)</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder={bookingType === "outstation" ? "e.g., Lake Tahoe, Hills" : "Number of days (e.g. 2)"}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                  />
                )}
              </div>

              {/* Car Transmission */}
              <div className="md:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Car Type
                </label>
                <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition">
                  <option value="auto">Automatic Transmission</option>
                  <option value="manual">Manual Transmission</option>
                  <option value="luxury">Luxury / EV</option>
                  <option value="suv">7-Seater / Large SUV</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-1 flex flex-col justify-end gap-1.5">
                <a
                  href={instantWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-xl text-xs transition shadow-sm active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  Book on WhatsApp
                </a>
                <Link
                  href="/book"
                  className="w-full h-8 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg text-[11px] transition"
                >
                  Advanced Booking Form →
                </Link>
              </div>
            </div>

            {/* Trust Highlights below search */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-4">
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Instant WhatsApp Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Zero surge pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Full background-check verified</span>
              </div>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto border-y border-gray-100 py-8">
            <div>
              <div className="text-3xl font-extrabold text-black">50,000+</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Safe Trips Completed</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-black">4.9 / 5</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Average Driver Rating</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-black">1,800+</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Verified Drivers</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-black">&lt; 15 mins</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Avg. Arrival Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CONNECTION SPOTLIGHT */}
      <section className="py-16 bg-emerald-50/50 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                No App Download Needed
              </span>
              <h2 className="text-3xl font-extrabold text-black mt-3 leading-tight">
                Seamless WhatsApp Driver & Client Experience
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Why install another bulky app? DriveConnect lets you chat with your assigned chauffeur directly inside WhatsApp. Share your live gate location, tell them if you’re running 5 minutes late, and receive instant arrival alerts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 text-base">✓</span>
                  <span>Share live GPS location in WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 text-base">✓</span>
                  <span>Direct phone & voice notes to driver</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 text-base">✓</span>
                  <span>Trip receipt sent straight to your chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 text-base">✓</span>
                  <span>24/7 WhatsApp emergency dispatch</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-80 bg-gray-50 rounded-2xl p-5 border border-gray-200 text-xs shadow-inner">
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold">
                  D
                </div>
                <div>
                  <div className="font-bold text-black">DriveConnect Chauffeur</div>
                  <div className="text-[10px] text-emerald-600">Online • Typically replies instantly</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 bg-white rounded-xl shadow-xs border border-gray-100 text-gray-700">
                  👋 <em>&ldquo;Hello! I have arrived at your building lobby. Take your time, standing by your car.&rdquo;</em>
                </div>
                <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-950 font-medium ml-4 text-right">
                  <em>&ldquo;Coming down in 2 minutes! Keys are ready.&rdquo;</em>
                </div>
              </div>
              <a
                href={instantWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl font-bold flex items-center justify-center gap-1.5 transition text-center shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                Try WhatsApp Dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">How DriveConnect Works</h2>
            <p className="text-gray-500 mt-3 text-base">
              Get behind the passenger seat in 3 quick steps. Coordinated directly via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 hover:border-gray-300 transition relative">
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Book or WhatsApp</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Choose hourly chauffeur service, round-trip, or outstation. Send details online or directly via WhatsApp.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 hover:border-gray-300 transition relative">
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Driver Arrives & Chats</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A verified driver shares their arrival ETA on WhatsApp. Hand over your vehicle keys and give any preferences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 hover:border-gray-300 transition relative">
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Ride in Comfort</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sit back, check emails, or unwind with friends. Your driver safely navigates traffic, parks, and returns you safely home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR USE CASES */}
      <section className="py-20 md:py-28 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Convenience Everywhere</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">Why People Use DriveConnect</h2>
            </div>
            <Link
              href="/drivers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-600 transition"
            >
              Browse all drivers
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case 1 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Parties & Night Outs</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Enjoy your evening with friends, dinners, or weddings without worrying about designated driving or parking hassles.
              </p>
              <div className="text-xs font-semibold text-gray-400">Popular for: Fri - Sun evenings</div>
            </div>

            {/* Case 2 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Outstation & Road Trips</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Long highway drives can be tiring. Hire an expert highway driver so your whole family can enjoy the scenic route together.
              </p>
              <div className="text-xs font-semibold text-gray-400">Popular for: Weekend getaways</div>
            </div>

            {/* Case 3 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Business & Daily Commute</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Transform bumper-to-bumper traffic hours into an executive workspace. Prepare meetings, answer emails, or take calls.
              </p>
              <div className="text-xs font-semibold text-gray-400">Popular for: Peak morning/evening hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DRIVECONNECT / SAFETY */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Safety First</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2 leading-tight">
                Trained to treat your car with executive care
              </h2>
              <p className="text-gray-600 mt-4 text-base leading-relaxed">
                We understand your car is an important asset. That’s why we maintain the strictest onboarding standards in the industry.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Multi-tier Background Screening</h4>
                    <p className="text-sm text-gray-500 mt-0.5">Criminal checks, government ID verification, and driving violation reviews.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Road & Vehicle Competency Test</h4>
                    <p className="text-sm text-gray-500 mt-0.5">Tested on tight-space parking, manual clutching, automatic transmissions, and defensive highway driving.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Direct WhatsApp & Live Tracking</h4>
                    <p className="text-sm text-gray-500 mt-0.5">Share live ride status with loved ones and access 24/7 incident response on WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / Driver Profile Preview */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                <div>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Top Rated Driver</span>
                  <h3 className="text-xl font-bold text-black mt-0.5">Marcus Vance</h3>
                  <p className="text-xs text-gray-500">6+ years verified professional chauffeur</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                    ★ 4.96
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">940 trips completed</div>
                </div>
              </div>

              <div className="py-5 space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Specialty</span>
                  <span className="font-medium text-black">Sedans, SUVs & Luxury AT</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Communication</span>
                  <span className="font-medium text-emerald-700 flex items-center gap-1">
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" /> Direct WhatsApp Active
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Status</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Available Now
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a
                  href={WHATSAPP_CONFIG.createWhatsAppLink("919876543211", "Hello Marcus! I saw your profile on DriveConnect and want to book you.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  Chat Directly on WhatsApp
                </a>
                <Link
                  href="/book"
                  className="w-full block text-center py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold transition"
                >
                  View Booking Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Clear & Honest</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 mt-3 text-base">
              No subscription required. Pay only for the time you need with guaranteed upfront pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-black transition flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-black">Hourly Driver</h3>
                <p className="text-xs text-gray-500 mt-1">Perfect for dinners, parties, or short errands</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-black">$18</span>
                  <span className="text-gray-500 text-sm"> / hour</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-center gap-2">✓ 2-hour minimum</li>
                  <li className="flex items-center gap-2">✓ Within city limits</li>
                  <li className="flex items-center gap-2">✓ Manual or Automatic</li>
                  <li className="flex items-center gap-2">✓ Direct WhatsApp dispatch</li>
                </ul>
              </div>
              <Link
                href="/book"
                className="w-full py-3 text-center rounded-xl bg-gray-100 hover:bg-black hover:text-white font-medium text-sm transition"
              >
                Book Hourly
              </Link>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-black text-white rounded-2xl p-8 border border-black shadow-lg flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-emerald-500 text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Full-Day Chauffeur</h3>
                <p className="text-xs text-gray-400 mt-1">Full 8 hours dedicated driver for weddings or corporate</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">$119</span>
                  <span className="text-gray-400 text-sm"> / day</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-center gap-2">✓ 8 hours continuous service</li>
                  <li className="flex items-center gap-2">✓ Multi-stop city itinerary</li>
                  <li className="flex items-center gap-2">✓ Executive attire & protocol</li>
                  <li className="flex items-center gap-2">✓ Direct WhatsApp coordination</li>
                </ul>
              </div>
              <Link
                href="/book"
                className="w-full py-3 text-center rounded-xl bg-white hover:bg-gray-200 text-black font-semibold text-sm transition"
              >
                Book Full Day
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-black transition flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-black">Outstation Trip</h3>
                <p className="text-xs text-gray-500 mt-1">Highway and intercity multi-day journeys</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-black">$149</span>
                  <span className="text-gray-500 text-sm"> / day</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-center gap-2">✓ Highway specialist driver</li>
                  <li className="flex items-center gap-2">✓ Driver food allowance included</li>
                  <li className="flex items-center gap-2">✓ 24/7 WhatsApp emergency support</li>
                  <li className="flex items-center gap-2">✓ One-way or round-trip options</li>
                </ul>
              </div>
              <Link
                href="/book"
                className="w-full py-3 text-center rounded-xl bg-gray-100 hover:bg-black hover:text-white font-medium text-sm transition"
              >
                Book Outstation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left font-semibold text-black flex items-center justify-between text-base"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl font-light text-gray-400 ml-4">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 md:py-28 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to take the passenger seat?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Book a verified driver in under 2 minutes directly on WhatsApp, or reserve online.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={instantWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-full transition text-sm shadow-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              Chat on WhatsApp to Book
            </a>
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition text-sm"
            >
              Online Booking Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
