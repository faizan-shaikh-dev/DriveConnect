"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [bookingType, setBookingType] = useState("hourly");
  const [pickupCity, setPickupCity] = useState("");
  const [hours, setHours] = useState("4");
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does DriveConnect work?",
      a: "DriveConnect connects you with vetted, professional drivers who drive your personal vehicle. Whether you need a chauffeur for an evening party, a long outstation trip, or daily traffic assistance, simply book online and your driver arrives at your doorstep."
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              On-demand professional drivers in your city
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.15]">
              Your car. Our driver. <br className="hidden sm:inline" />
              <span className="text-gray-500">Anywhere you need to go.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Hire vetted, insured personal chauffeurs for your own vehicle by the hour, day, or trip. Skip parking hassles, avoid traffic fatigue, and travel in comfort.
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

              {/* Action Button */}
              <div className="md:col-span-1 flex flex-col justify-end">
                <Link
                  href="/book"
                  className="w-full h-12 flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-medium rounded-xl text-sm transition shadow-sm"
                >
                  Find Driver
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Trust Highlights below search */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-4">
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
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free cancellation up to 1 hr prior</span>
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

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">How DriveConnect Works</h2>
            <p className="text-gray-500 mt-3 text-base">
              Get behind the passenger seat in 3 quick steps. No paperwork, no complicated rental forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 hover:border-gray-300 transition relative">
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Book Your Driver</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Choose hourly chauffeur service, round-trip, or outstation. Select your pickup time, location, and transmission type.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 hover:border-gray-300 transition relative">
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Driver Arrives at Your Door</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A verified, uniformed driver arrives at your designated spot on time. Hand over your vehicle keys and give any preferences.
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
                    <h4 className="font-bold text-black text-base">Live Trip Tracking & SOS Support</h4>
                    <p className="text-sm text-gray-500 mt-0.5">Share live ride status with loved ones and access 24/7 incident response.</p>
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
                  <span>Languages</span>
                  <span className="font-medium text-black">English, Spanish</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Status</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Available Now
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic mb-4">
                  &ldquo;Marcus was on time, dressed sharply, and navigated 2 hours of downtown Friday rush effortlessly. Will definitely book again!&rdquo;
                </p>
                <Link
                  href="/book"
                  className="w-full block text-center py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition"
                >
                  Book Driver Like Marcus
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
                  <li className="flex items-center gap-2">✓ Instant driver matching</li>
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
                  <li className="flex items-center gap-2">✓ Fuel/car management assistance</li>
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
                  <li className="flex items-center gap-2">✓ 24/7 roadside coordination</li>
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
            Book a verified driver in under 2 minutes, or join our growing network of certified chauffeurs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition text-sm shadow-sm"
            >
              Book a Driver Now
            </Link>
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-3.5 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition text-sm"
            >
              Become a Driver
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
