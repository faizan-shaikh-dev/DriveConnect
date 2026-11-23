"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_CONFIG } from "@/utils/whatsapp";

export default function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [activeRequest, setActiveRequest] = useState({
    id: "TRIP-902",
    customer: "Sophia Williams",
    customerPhone: "919876543299",
    pickup: "740 Park Avenue, Apt 4B",
    car: "2024 BMW X5 (Automatic)",
    type: "Hourly Chauffeur (4 Hours)",
    payout: "$88.00",
    pickupTime: "In 25 minutes",
    distance: "1.8 miles away"
  });
  const [accepted, setAccepted] = useState(false);

  const clientWhatsAppLink = activeRequest
    ? WHATSAPP_CONFIG.createWhatsAppLink(
        activeRequest.customerPhone,
        `Hello ${activeRequest.customer}! I am your DriveConnect Chauffeur (Marcus). I have accepted your ${activeRequest.type} request and am en route to ${activeRequest.pickup}. Please let me know if you need anything on the way!`
      )
    : "#";

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
            <span className="text-xs text-gray-400 font-medium">Direct WhatsApp</span>
            <div className="text-2xl font-black text-emerald-600 mt-1">Enabled</div>
            <span className="text-[11px] text-gray-500">Client chat ready</span>
          </div>
        </div>

        {/* INCOMING RIDE REQUEST ALERT (LIVE MOCK) */}
        {isOnline && activeRequest && (
          <div className="mb-10 bg-white rounded-3xl border-2 border-emerald-600 p-6 md:p-8 shadow-xl relative overflow-hidden animate-slide-up">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#25D366]"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  {accepted ? "Trip In Progress • WhatsApp Connected" : "New Nearby Ride Request"}
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
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={clientWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      Chat with Client on WhatsApp
                    </a>
                    <button
                      onClick={() => setAccepted(false)}
                      className="px-4 py-3 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-200"
                    >
                      End Trip
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
                { time: "Tomorrow, 6:00 PM", type: "Event Chauffeur (3h)", client: "Robert K.", phone: "919876543291", car: "Mercedes S-Class", pay: "$66" },
                { time: "Saturday, 8:00 AM", type: "Outstation Trip (24h)", client: "Elena M.", phone: "919876543292", car: "Audi Q7 SUV", pay: "$149" },
              ].map((trip, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-black">{trip.type}</div>
                    <div className="text-gray-500 mt-0.5">{trip.time} • {trip.car}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={WHATSAPP_CONFIG.createWhatsAppLink(trip.phone, `Hello ${trip.client}! This is Marcus Vance, your DriveConnect driver for your upcoming trip.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:text-[#1EBE5D] font-bold p-1"
                      title="WhatsApp Client"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                    </a>
                    <span className="font-extrabold text-sm text-black">{trip.pay}</span>
                  </div>
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

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
