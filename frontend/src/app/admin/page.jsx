"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

export default function AdminDashboard() {
  const { t } = useLanguage();
  const {
    drivers,
    pendingApplicants,
    approveDriverKYC,
    showNotification,
  } = useApp();

  const [activeTrips] = useState([
    {
      id: "TRIP-1084",
      customer: "Ravi Sharma",
      driver: "Arjun Mehta",
      pickup: "Andheri West, Mumbai",
      car: "Toyota Camry",
      status: "In Progress",
      fare: "₹1,800",
    },
    {
      id: "TRIP-1085",
      customer: "Kavita Rao",
      driver: "Vikram Rao",
      pickup: "Koregaon Park, Pune",
      car: "Kia Seltos",
      status: "On the Trip",
      fare: "₹1,720",
    },
    {
      id: "TRIP-1086",
      customer: "Amitabh Sen",
      driver: "Rahul Verma",
      pickup: "Connaught Place, Delhi",
      car: "Hyundai Verna",
      status: "Driver En Route",
      fare: "₹2,100",
    },
  ]);

  // Weekly bookings activity data (Screen 11)
  const weeklyBookings = [
    { day: "Mon", count: 48, height: "55%" },
    { day: "Tue", count: 62, height: "70%" },
    { day: "Wed", count: 75, height: "85%" },
    { day: "Thu", count: 58, height: "65%" },
    { day: "Fri", count: 88, height: "100%" },
    { day: "Sat", count: 82, height: "92%" },
    { day: "Sun", count: 42, height: "48%" },
  ];

  const handleReject = (id, name) => {
    showNotification(`Application for ${name} declined.`, "info");
  };

  return (
    <div className="min-h-screen bg-white text-black py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header (Screen 11) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Operations & Verification
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="text-xs text-gray-500">Superadmin Access</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-1">
              {t("adminDashboard")}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-bold text-gray-700">Dispatch Operational</span>
            </div>

            <Link
              href="/login"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-black text-xs font-bold rounded-xl transition"
            >
              {t("switchAccount")}
            </Link>
          </div>
        </div>

        {/* 4 Metric Cards (Screen 11) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">Total Bookings</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">12,480</div>
            <span className="text-[11px] text-gray-400 font-medium">All-time rides</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">Active Drivers</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">
              {drivers.length} Verified
            </div>
            <span className="text-[11px] text-gray-400 font-medium">Across 12 cities</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">Revenue (Month)</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">₹48.2L</div>
            <span className="text-[11px] text-gray-400 font-medium">+14% vs previous</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 font-semibold">{t("rating")}</span>
            <div className="text-2xl sm:text-3xl font-black text-black mt-1">★ 4.8</div>
            <span className="text-[11px] text-gray-400 font-medium">Average rider score</span>
          </div>
        </div>

        {/* DRIVER KYC APPROVALS QUEUE (User Flow Requirement) */}
        <div className="bg-white rounded-3xl border-2 border-black p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-2 mb-6">
            <div>
              <h2 className="text-lg font-black text-black flex items-center gap-2">
                <span>{t("driverApprovals")}</span>
                <span className="px-2 py-0.5 rounded-full bg-black text-white text-[10px] font-black">
                  {pendingApplicants.length} PENDING
                </span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Verify driving license and collect one-time ₹499 INR platform fee to activate driver in directory.
              </p>
            </div>
          </div>

          {pendingApplicants.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-xs font-bold text-gray-700">All driver applications reviewed!</p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                New driver submissions from /signup will appear here instantly.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 pr-4">Applicant</th>
                    <th className="pb-3 pr-4">Location</th>
                    <th className="pb-3 pr-4">License No.</th>
                    <th className="pb-3 pr-4">Experience</th>
                    <th className="pb-3 pr-4">Rate</th>
                    <th className="pb-3 pr-4">Platform Fee</th>
                    <th className="pb-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium">
                  {pendingApplicants.map((applicant) => (
                    <tr key={applicant.id} className="hover:bg-gray-50/60 transition">
                      <td className="py-4 pr-4">
                        <div className="font-extrabold text-black text-sm">{applicant.name}</div>
                        <div className="text-gray-400 text-[11px]">{applicant.phone}</div>
                      </td>
                      <td className="py-4 pr-4 text-gray-700">{applicant.city}</td>
                      <td className="py-4 pr-4 font-mono font-bold text-black">
                        {applicant.license}
                      </td>
                      <td className="py-4 pr-4 text-gray-600">
                        {applicant.experience} • {applicant.transmission}
                      </td>
                      <td className="py-4 pr-4 font-bold text-black">₹{applicant.rate}/hr</td>
                      <td className="py-4 pr-4">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-[11px] font-bold">
                          ₹499 Due
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => approveDriverKYC(applicant.id)}
                            className="px-3.5 py-2 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition shadow-sm"
                          >
                            {t("approveBtn")} (₹499 Paid)
                          </button>
                          <button
                            type="button"
                            onClick={() => handleReject(applicant.id, applicant.name)}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-xs font-bold transition"
                          >
                            {t("rejectBtn")}
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

        {/* Live Active Trips Table */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
            <h3 className="text-base font-extrabold text-black">
              {t("activeTrips")}
            </h3>
            <span className="text-xs text-gray-500">Real-time trip dispatch monitor</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase tracking-wider">
                  <th className="pb-3 pr-4">Trip ID</th>
                  <th className="pb-3 pr-4">Rider</th>
                  <th className="pb-3 pr-4">Assigned Driver</th>
                  <th className="pb-3 pr-4">Pickup</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3 text-right">Fare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {activeTrips.map((trip) => (
                  <tr key={trip.id} className="hover:bg-gray-50/60 transition">
                    <td className="py-4 pr-4 font-mono font-bold text-gray-500">{trip.id}</td>
                    <td className="py-4 pr-4 font-bold text-black">{trip.customer}</td>
                    <td className="py-4 pr-4 text-black">{trip.driver}</td>
                    <td className="py-4 pr-4 text-gray-600 truncate max-w-[200px]">
                      {trip.pickup}
                    </td>
                    <td className="py-4 pr-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {trip.status}
                      </span>
                    </td>
                    <td className="py-4 text-right font-black text-black text-sm">
                      {trip.fare}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekly Activity Bar Chart (Screen 11) */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-extrabold text-black">
              {t("weeklyActivity")}
            </h3>
            <span className="text-xs text-gray-500">Platform Bookings Volume</span>
          </div>

          <div className="h-44 flex items-end justify-between gap-3 pt-6 border-b border-gray-200 px-2 sm:px-6">
            {weeklyBookings.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-[10px] font-bold text-gray-600">{d.count}</span>
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
