"use client";

import { useState } from "react";
import Link from "next/link";

export default function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [activeRequest, setActiveRequest] = useState({
    id: "TRIP-902",
    customer: "Sophia Williams",
    pickup: "740 Park Avenue, Apt 4B",
    car: "2024 BMW X5 (Automatic)",
    type: "Hourly Chauffeur (4 Hours)",
    payout: "$88.00",
    pickupTime: "In 25 minutes",
    distance: "1.8 miles away"
  });
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50/60 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Driver Partner Portal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="text-xs text-gray-500">ID: #DRV-8491</span>
            </div>
            <h1 className="text-2xl font-black text-black mt-1">Hello, Marcus Vance</h1>
          </div>

          {/* ONLINE STATUS TOGGLE */}
          <div className="flex items-center gap-4 bg-white p-2.5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 px-3">
              <span className={`w-3 h-3 rounded-full ${isOnline ? "bg-emerald-500 animate-pulse" : "bg-gray-400"}`}></span>
              <span className="text-xs font-bold text-black">{isOnline ? "YOU ARE ONLINE" : "OFFLINE"}</span>
            </div>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                isOnline ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {isOnline ? "Go Offline" : "Go Online"}
            </button>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Today's Earnings</span>
            <div className="text-2xl font-black text-black mt-1">$142.50</div>
            <span className="text-[11px] text-emerald-600 font-semibold">+2 trips today</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Weekly Projected</span>
            <div className="text-2xl font-black text-black mt-1">$890.00</div>
            <span className="text-[11px] text-gray-500">Direct deposit Monday</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Driver Rating</span>
            <div className="text-2xl font-black text-black mt-1">★ 4.96</div>
            <span className="text-[11px] text-gray-500">Based on 940 trips</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Acceptance Rate</span>
            <div className="text-2xl font-black text-black mt-1">98%</div>
            <span className="text-[11px] text-emerald-600 font-semibold">Tier 1 Elite Driver</span>
          </div>
        </div>

        {/* INCOMING RIDE REQUEST ALERT (LIVE MOCK) */}
        {isOnline && activeRequest && (
          <div className="mb-10 bg-white rounded-3xl border-2 border-black p-6 md:p-8 shadow-xl relative overflow-hidden animate-slide-up">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-500"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  {accepted ? "Trip In Progress" : "New Nearby Ride Request"}
                </div>
                <h3 className="text-2xl font-extrabold text-black">{activeRequest.type}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Customer: <span className="font-semibold text-black">{activeRequest.customer}</span> • {activeRequest.distance}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📍 Pickup:</span>
                    <span className="font-semibold text-black">{activeRequest.pickup}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">🚗 Car:</span>
                    <span className="font-semibold text-black">{activeRequest.car}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="text-right flex flex-col md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0">
                <div className="mb-4">
                  <span className="text-xs text-gray-400">Guaranteed Payout</span>
                  <div className="text-3xl font-black text-emerald-600">{activeRequest.payout}</div>
                  <span className="text-[11px] text-gray-400">+ 100% of tips kept</span>
                </div>

                {accepted ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert("Navigating to " + activeRequest.pickup)}
                      className="px-6 py-3 bg-black text-white text-xs font-bold rounded-xl shadow-sm"
                    >
                      Start Navigation 🧭
                    </button>
                    <button
                      onClick={() => setAccepted(false)}
                      className="px-4 py-3 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-200"
                    >
                      Complete Trip
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3 w-full md:w-auto">
                    <button
                      onClick={() => setActiveRequest(null)}
                      className="w-1/2 md:w-auto px-5 py-3 border border-gray-200 text-gray-600 rounded-xl text-xs font-semibold hover:bg-gray-50 transition"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => setAccepted(true)}
                      className="w-1/2 md:w-auto px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
                    >
                      Accept Trip ({activeRequest.payout})
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SCHEDULED & COMPLETED TRIPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upcoming Schedule */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-base text-black mb-4">Upcoming Scheduled Trips</h3>
            <div className="space-y-3">
              {[
                { time: "Tomorrow, 6:00 PM", type: "Event Chauffeur (3h)", client: "Robert K.", car: "Mercedes S-Class", pay: "$66" },
                { time: "Saturday, 8:00 AM", type: "Outstation Trip (24h)", client: "Elena M.", car: "Audi Q7 SUV", pay: "$149" },
              ].map((trip, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-black">{trip.type}</div>
                    <div className="text-gray-500 mt-0.5">{trip.time} • {trip.car}</div>
                  </div>
                  <span className="font-extrabold text-sm text-black">{trip.pay}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent History */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-base text-black mb-4">Recent Completed Rides</h3>
            <div className="space-y-3">
              {[
                { date: "Yesterday, 9:30 PM", client: "David W.", payout: "$54.00", tip: "+$15 tip", rating: "★★★★★" },
                { date: "Nov 17, 3:00 PM", client: "Claire L.", payout: "$72.00", tip: "+$20 tip", rating: "★★★★★" },
              ].map((trip, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-black">{trip.client}</div>
                    <div className="text-gray-500 mt-0.5">{trip.date} • {trip.rating}</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-sm text-black">{trip.payout}</span>
                    <div className="text-[10px] text-emerald-600 font-bold">{trip.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
