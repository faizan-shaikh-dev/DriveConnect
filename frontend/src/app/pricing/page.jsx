"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [calcHours, setCalcHours] = useState(4);
  const [carType, setCarType] = useState("auto");

  // Calculate live estimate
  const ratePerHour = carType === "luxury" ? 24 : 18;
  const baseCost = calcHours * ratePerHour;
  const discount = calcHours >= 8 ? 25 : calcHours >= 6 ? 15 : 0;
  const totalCost = baseCost - discount + 4; // +$4 safety fee

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Honest & Simple</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mt-2 tracking-tight">
            Transparent Pricing
          </h1>
          <p className="text-base text-gray-500 mt-3">
            No dynamic surge algorithms, no vehicle rental markup. You only pay for our verified driver’s professional time.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Hourly Card */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-between hover:border-black transition">
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Quick Trips & Errands</div>
              <h3 className="text-2xl font-black text-black mt-1">Hourly Chauffeur</h3>
              <p className="text-xs text-gray-500 mt-1">For dinners, doctor appointments, or shopping sprees.</p>

              <div className="my-6">
                <span className="text-4xl font-extrabold text-black">$18</span>
                <span className="text-gray-500 text-sm"> / hour</span>
              </div>

              <ul className="space-y-3 text-xs text-gray-700 mb-8">
                <li className="flex items-center gap-2">✓ 2-hour minimum booking</li>
                <li className="flex items-center gap-2">✓ Unlimited stops within city</li>
                <li className="flex items-center gap-2">✓ Manual & Automatic cars</li>
                <li className="flex items-center gap-2">✓ Instant driver dispatch</li>
                <li className="flex items-center gap-2">✓ Overtime billed per minute ($0.35/m)</li>
              </ul>
            </div>

            <Link
              href="/book"
              className="w-full text-center py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              Book Hourly Chauffeur
            </Link>
          </div>

          {/* Full Day Card (Featured) */}
          <div className="bg-black text-white rounded-3xl p-8 border border-black shadow-xl flex flex-col justify-between relative scale-105">
            <div className="absolute -top-3.5 right-8 bg-emerald-500 text-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Save 20%
            </div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Most Popular Choice</div>
              <h3 className="text-2xl font-black text-white mt-1">Full-Day Dedicated</h3>
              <p className="text-xs text-gray-400 mt-1">Dedicated driver for a whole 8-hour day itinerary.</p>

              <div className="my-6">
                <span className="text-4xl font-extrabold text-white">$119</span>
                <span className="text-gray-400 text-sm"> / day (8 hours)</span>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 mb-8">
                <li className="flex items-center gap-2">✓ 8 continuous hours reserved</li>
                <li className="flex items-center gap-2">✓ Executive chauffeur attire & manners</li>
                <li className="flex items-center gap-2">✓ Multiple pickups & corporate meetings</li>
                <li className="flex items-center gap-2">✓ Car fueling & detailing coordination</li>
                <li className="flex items-center gap-2">✓ Priority driver replacement guarantee</li>
              </ul>
            </div>

            <Link
              href="/book"
              className="w-full text-center py-3.5 bg-white hover:bg-gray-200 text-black rounded-xl text-xs font-bold transition shadow-sm"
            >
              Book Full Day Chauffeur
            </Link>
          </div>

          {/* Outstation Card */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-between hover:border-black transition">
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Highway & Long Distance</div>
              <h3 className="text-2xl font-black text-black mt-1">Outstation Trip</h3>
              <p className="text-xs text-gray-500 mt-1">Weekend getaways, intercity highway drives, family vacations.</p>

              <div className="my-6">
                <span className="text-4xl font-extrabold text-black">$149</span>
                <span className="text-gray-500 text-sm"> / 24 hours</span>
              </div>

              <ul className="space-y-3 text-xs text-gray-700 mb-8">
                <li className="flex items-center gap-2">✓ Highway certified long-haul driver</li>
                <li className="flex items-center gap-2">✓ Driver food & stay allowance included</li>
                <li className="flex items-center gap-2">✓ 24/7 roadside mechanical assistance</li>
                <li className="flex items-center gap-2">✓ Safe hill-station & adverse weather experience</li>
                <li className="flex items-center gap-2">✓ One-way or round-trip flexibility</li>
              </ul>
            </div>

            <Link
              href="/book"
              className="w-full text-center py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              Book Outstation Trip
            </Link>
          </div>
        </div>

        {/* INTERACTIVE FARE CALCULATOR */}
        <div className="my-16 bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12">
          <div className="max-w-xl mx-auto text-center mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Estimate Your Cost</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black mt-1">Live City Fare Calculator</h2>
            <p className="text-xs text-gray-500 mt-1">
              Drag the slider below to see how much your chauffeur will cost before booking.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            {/* Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Select Trip Duration:
                </label>
                <span className="text-lg font-black text-black">{calcHours} Hours</span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="1"
                value={calcHours}
                onChange={(e) => setCalcHours(parseInt(e.target.value))}
                className="w-full accent-black cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>2 Hours (Min)</span>
                <span>6 Hours</span>
                <span>12 Hours (Max)</span>
              </div>
            </div>

            {/* Vehicle Type Choice */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Vehicle Transmission / Category
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCarType("auto")}
                  className={`p-3 rounded-xl border text-xs font-semibold transition ${
                    carType === "auto" ? "border-black bg-black text-white" : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Standard / SUV ($18/hr)
                </button>
                <button
                  type="button"
                  onClick={() => setCarType("luxury")}
                  className={`p-3 rounded-xl border text-xs font-semibold transition ${
                    carType === "luxury" ? "border-black bg-black text-white" : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Executive Luxury / EV ($24/hr)
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>{calcHours} Hours @ ${ratePerHour}/hr:</span>
                <span className="font-semibold text-black">${baseCost}.00</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Extended Duration Discount:</span>
                  <span>-${discount}.00</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Insurance & 24/7 Roadside Support:</span>
                <span className="font-semibold text-black">$4.00</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-sm">
                <span className="font-bold text-black">Estimated Total:</span>
                <span className="text-2xl font-black text-black">${totalCost}.00</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/book"
                className="w-full inline-block py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
              >
                Proceed to Book This Trip (${totalCost}.00) →
              </Link>
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="my-16">
          <h2 className="text-2xl font-bold text-black text-center mb-8">Why DriveConnect Saves You Money</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-gray-200 rounded-2xl overflow-hidden">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-bold uppercase text-[11px]">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-black bg-gray-100 font-extrabold">DriveConnect</th>
                  <th className="p-4">Ride-Hail / Uber Black</th>
                  <th className="p-4">Traditional Chauffeur Rental</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Vehicle Comfort</td>
                  <td className="p-4 bg-gray-50/50 font-bold text-emerald-700">Your Own Car (Personal Settings)</td>
                  <td className="p-4 text-gray-600">Stranger's vehicle</td>
                  <td className="p-4 text-gray-600">Rental fleet car</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Hourly Rate</td>
                  <td className="p-4 bg-gray-50/50 font-bold text-emerald-700">$18 / hr flat</td>
                  <td className="p-4 text-gray-600">$55 - $95 / hr</td>
                  <td className="p-4 text-gray-600">$60+ / hr + car fee</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Surge Pricing</td>
                  <td className="p-4 bg-gray-50/50 font-bold text-emerald-700">Never (Guaranteed flat)</td>
                  <td className="p-4 text-gray-600">2x - 3x during peak/rain</td>
                  <td className="p-4 text-gray-600">High weekend minimums</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Multi-Stop Waiting</td>
                  <td className="p-4 bg-gray-50/50 font-bold text-emerald-700">Driver waits in your car for free</td>
                  <td className="p-4 text-gray-600">Expensive per-minute idle fee</td>
                  <td className="p-4 text-gray-600">Included but high cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
