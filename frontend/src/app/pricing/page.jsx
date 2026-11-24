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
            PRICING
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            No surge pricing. No hidden fees.
          </p>
        </div>

        {/* 3 Pricing Cards (PDF Screen 04) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Hourly */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">Hourly</span>
              <div className="my-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-black">₹399</span>
                <span className="text-xs text-gray-500"> /hour</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 mb-8">
                <li>— Minimum 2 hours</li>
                <li>— City driving</li>
                <li>— Verified driver</li>
              </ul>
            </div>
            <Link
              href="/book"
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center rounded-xl text-xs font-semibold transition"
            >
              Get started
            </Link>
          </div>

          {/* Full Day (Highlighted with black border and button) */}
          <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-md flex flex-col justify-between relative">
            <div>
              <span className="text-xs font-bold text-black uppercase tracking-wider">Full day</span>
              <div className="my-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-black">₹2,999</span>
                <span className="text-xs text-gray-500"> /day</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-700 font-medium mb-8">
                <li>— Up to 10 hours</li>
                <li>— City & outstation</li>
                <li>— Priority matching</li>
              </ul>
            </div>
            <Link
              href="/book"
              className="w-full py-3 bg-black hover:bg-gray-800 text-white text-center rounded-xl text-xs font-semibold transition"
            >
              Get started
            </Link>
          </div>

          {/* Monthly */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">Monthly</span>
              <div className="my-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-black">₹24,999</span>
                <span className="text-xs text-gray-500"> /month</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 mb-8">
                <li>— Dedicated driver</li>
                <li>— Flexible schedule</li>
                <li>— Account manager</li>
              </ul>
            </div>
            <Link
              href="/book"
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center rounded-xl text-xs font-semibold transition"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
