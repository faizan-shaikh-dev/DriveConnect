"use client";

import { useState } from "react";
import Link from "next/link";

export default function HowItWorksPage() {
  const [activeRole, setActiveRole] = useState("owner");

  const ownerSteps = [
    {
      num: "01",
      title: "Set Your Pickup & Vehicle Details",
      desc: "Tell us where and when you need a driver, whether it’s for a 2-hour errand, an evening party, or a multi-day highway trip. Pick your transmission type (Manual, Automatic, or Luxury EV).",
      tag: "Takes < 1 minute"
    },
    {
      num: "02",
      title: "Get Matched with a Verified Driver",
      desc: "Our dispatch algorithm or your manual selection connects you with a top-rated, certified local chauffeur. You can view their full background, trip history, and customer ratings before they arrive.",
      tag: "Live GPS Tracking"
    },
    {
      num: "03",
      title: "Hand Over the Keys at Your Doorstep",
      desc: "Your uniformed driver arrives at your exact location on time. Show them any quirks of your vehicle (clutch feel, parking sensors, navigation), then sit back in the passenger or rear seat.",
      tag: "Zero Parking Stress"
    },
    {
      num: "04",
      title: "Travel Safely & Pay Seamlessly",
      desc: "Enjoy the ride! Work on your laptop, enjoy drinks at a party, or chat with family. When finished, your driver safely parks your car at home. Payment is automated with zero surge tricks.",
      tag: "Transparent Billing"
    }
  ];

  const driverSteps = [
    {
      num: "01",
      title: "Apply Online in 5 Minutes",
      desc: "Submit your government driving license, personal identification, and driving history records. Tell us what vehicles you are comfortable operating (Sedans, SUVs, Manuals, Luxury).",
      tag: "No upfront fees"
    },
    {
      num: "02",
      title: "Pass Screening & Road Evaluation",
      desc: "Attend our in-person road test and vehicle handling evaluation. We verify background, defensive driving knowledge, and customer hospitality standards.",
      tag: "Professional Badge"
    },
    {
      num: "03",
      title: "Go Online Whenever You Want",
      desc: "Use the Driver Portal to toggle your status to Online. Receive local ride requests directly on your mobile device. Accept trips that fit your schedule.",
      tag: "Flexible Hours"
    },
    {
      num: "04",
      title: "Get Paid Weekly with Guaranteed Rates",
      desc: "Drive premium personal vehicles without the wear-and-tear or fuel costs of owning a taxi. Enjoy weekly direct deposits plus 100% of your tips.",
      tag: "High Earning Potential"
    }
  ];

  const safetyChecks = [
    { icon: "🪪", title: "Government ID & DMV Verification", desc: "Valid commercial or standard driver's license with clean motor vehicle records." },
    { icon: "⚖️", title: "Comprehensive Background Check", desc: "Full criminal record checks and identity validation via accredited background services." },
    { icon: "🏎️", title: "Practical Road Driving Exam", desc: "Rigorous road test evaluating clutch control, smooth acceleration, tight parking, and braking." },
    { icon: "🛡️", title: "Safety Insurance & Support", desc: "Every ride is monitored with 24/7 incident response and customer support hotlines." },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Step-by-Step Experience</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mt-2 tracking-tight">
            How DriveConnect Works
          </h1>
          <p className="text-base text-gray-500 mt-3">
            Whether you want someone to drive your car or you are a professional chauffeur looking for high-paying gigs, here is how simple our platform is.
          </p>

          {/* Role Switcher Tab */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-full border border-gray-200 mt-8">
            <button
              onClick={() => setActiveRole("owner")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeRole === "owner" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              For Car Owners
            </button>
            <button
              onClick={() => setActiveRole("driver")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeRole === "driver" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              For Professional Drivers
            </button>
          </div>
        </div>

        {/* STEPS TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {(activeRole === "owner" ? ownerSteps : driverSteps).map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200/90 rounded-3xl p-7 relative flex flex-col justify-between hover:border-black transition duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-black/90 font-mono">{step.num}</span>
                  <span className="text-[11px] font-semibold bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black mb-3 leading-snug">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-semibold text-black">
                <span>Step {idx + 1} of 4</span>
                <span className="text-gray-300">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* SAFETY & VETTING PROTOCOL */}
        <div className="my-20 bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Peace of Mind</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black mt-1">Our 4-Point Driver Vetting Protocol</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Only 1 in 8 driver applicants meet our standards. Here is how we guarantee your car is always in safe hands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyChecks.map((sc, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="text-2xl mb-3">{sc.icon}</div>
                <h4 className="font-bold text-sm text-black mb-1">{sc.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{sc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center py-10">
          <h3 className="text-2xl font-bold text-black">
            {activeRole === "owner" ? "Ready to relax on your next drive?" : "Ready to earn by driving premium cars?"}
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
            {activeRole === "owner"
              ? "Book in under 2 minutes. Transparent rates, no hidden fees."
              : "Keep 100% of your tips. Fast weekly payouts and flexible shifts."}
          </p>
          <div className="mt-6">
            <Link
              href={activeRole === "owner" ? "/book" : "/signup"}
              className="inline-flex px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-full text-sm transition shadow-sm active:scale-95"
            >
              {activeRole === "owner" ? "Book a Driver Now" : "Apply as a Driver"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
