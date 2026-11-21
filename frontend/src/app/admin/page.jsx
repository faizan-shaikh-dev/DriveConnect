"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [pendingDrivers, setPendingDrivers] = useState([
    { id: "APP-901", name: "Gabriel Soto", city: "Los Angeles", exp: "7 yrs", transmission: "Auto & Manual", license: "CA-948120", date: "2 hrs ago" },
    { id: "APP-902", name: "Amina Yusuf", city: "New York", exp: "5 yrs", transmission: "Luxury / EV", license: "NY-382910", date: "4 hrs ago" },
    { id: "APP-903", name: "Thomas Miller", city: "Chicago", exp: "9 yrs", transmission: "Manual & SUV", license: "IL-104928", date: "Yesterday" },
  ]);

  const [activeTrips] = useState([
    { id: "TRIP-101", customer: "Liam Neeson", driver: "Marcus Vance", pickup: "5th Ave, NY", car: "BMW 740i", status: "In Progress", fare: "$88" },
    { id: "TRIP-102", customer: "Sarah Connor", driver: "Elena Rostova", pickup: "Wilshire Blvd, LA", car: "Tesla Model S", status: "Driver En Route", fare: "$54" },
    { id: "TRIP-103", customer: "Bruce Wayne", driver: "David Chen", pickup: "Michigan Ave, CHI", car: "Porsche Cayenne", status: "In Progress", fare: "$149" },
  ]);

  const handleApprove = (id) => {
    setPendingDrivers(pendingDrivers.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50/60 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Operations Control</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="text-xs text-gray-500">Superadmin Access</span>
            </div>
            <h1 className="text-2xl font-black text-black mt-1">DriveConnect Platform Operations</h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-700">Dispatch System Operational</span>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Active Trips on Road</span>
            <div className="text-2xl font-black text-black mt-1">28 Rides</div>
            <span className="text-[11px] text-emerald-600 font-semibold">Across 12 metro areas</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Driver Queue for Review</span>
            <div className="text-2xl font-black text-black mt-1">{pendingDrivers.length} Pending</div>
            <span className="text-[11px] text-purple-600 font-semibold">Action required</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">7-Day Gross Bookings</span>
            <div className="text-2xl font-black text-black mt-1">$24,850</div>
            <span className="text-[11px] text-emerald-600 font-semibold">+18% vs last week</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Average Driver Rating</span>
            <div className="text-2xl font-black text-black mt-1">4.94 ★</div>
            <span className="text-[11px] text-gray-500">99.2% incident-free</span>
          </div>
        </div>

        {/* PENDING DRIVER VERIFICATION QUEUE */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-black">Driver Partner Verification Queue</h2>
              <p className="text-xs text-gray-500">Review driving records and approve road assessment eligibility.</p>
            </div>
            <span className="text-xs bg-purple-50 text-purple-700 font-bold px-3 py-1 rounded-full">
              {pendingDrivers.length} to verify
            </span>
          </div>

          {pendingDrivers.length === 0 ? (
            <div className="text-center py-8 text-xs text-gray-400">
              ✓ All driver applications have been reviewed!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 uppercase text-[10px] font-bold">
                    <th className="py-3 px-2">Applicant</th>
                    <th className="py-3 px-2">City</th>
                    <th className="py-3 px-2">Experience</th>
                    <th className="py-3 px-2">Transmissions</th>
                    <th className="py-3 px-2">License #</th>
                    <th className="py-3 px-2 text-right">Decision</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pendingDrivers.map((driver) => (
                    <tr key={driver.id} className="hover:bg-gray-50 transition">
                      <td className="py-3.5 px-2">
                        <div className="font-bold text-black">{driver.name}</div>
                        <div className="text-[10px] text-gray-400 font-mono">{driver.id} • {driver.date}</div>
                      </td>
                      <td className="py-3.5 px-2 text-gray-600 font-medium">{driver.city}</td>
                      <td className="py-3.5 px-2 text-gray-600 font-medium">{driver.exp}</td>
                      <td className="py-3.5 px-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-medium">
                          {driver.transmission}
                        </span>
                      </td>
                      <td className="py-3.5 px-2 font-mono text-gray-500">{driver.license}</td>
                      <td className="py-3.5 px-2 text-right">
                        <div className="inline-flex gap-2">
                          <button
                            onClick={() => handleApprove(driver.id)}
                            className="px-3 py-1.5 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleApprove(driver.id)}
                            className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ACTIVE LIVE TRIPS MONITOR */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-black">Live Active Dispatch Monitor</h2>
              <p className="text-xs text-gray-500">Real-time status of personal chauffeurs currently navigating customer cars.</p>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Live Feed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 uppercase text-[10px] font-bold">
                  <th className="py-3 px-2">Trip ID</th>
                  <th className="py-3 px-2">Customer & Vehicle</th>
                  <th className="py-3 px-2">Chauffeur</th>
                  <th className="py-3 px-2">Pickup / City</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 text-right">Fare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {activeTrips.map((trip) => (
                  <tr key={trip.id} className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-2 font-mono font-bold text-black">{trip.id}</td>
                    <td className="py-3.5 px-2">
                      <div className="font-bold text-black">{trip.customer}</div>
                      <div className="text-[10px] text-gray-500">{trip.car}</div>
                    </td>
                    <td className="py-3.5 px-2 font-medium text-gray-700">{trip.driver}</td>
                    <td className="py-3.5 px-2 text-gray-500">{trip.pickup}</td>
                    <td className="py-3.5 px-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        trip.status === "In Progress"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-right font-black text-black">{trip.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
