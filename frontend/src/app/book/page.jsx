"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_CONFIG } from "@/utils/whatsapp";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("hourly");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    clientPhone: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    hours: "4",
    carModel: "",
    transmission: "automatic",
    driverNotes: "",
    selectedDriver: "auto-assign",
  });
  const [confirmed, setConfirmed] = useState(false);

  const mockDrivers = [
    {
      id: "auto-assign",
      name: "Fastest Match (Auto-assign)",
      phone: WHATSAPP_CONFIG.dispatchNumber,
      rating: "4.9+",
      experience: "Top 10% Drivers",
      priceDiff: "$0",
      desc: "Our 24/7 WhatsApp dispatch assigns the closest 5-star driver immediately.",
    },
    {
      id: "marcus",
      name: "Marcus Vance",
      phone: "919876543211",
      rating: "4.96",
      trips: 940,
      experience: "6 yrs exp",
      priceDiff: "+$5/hr",
      specialty: "Luxury Sedans & SUVs",
      desc: "Former executive chauffeur. Direct WhatsApp coordination, polite & punctual.",
    },
    {
      id: "david",
      name: "David Chen",
      phone: "919876543212",
      rating: "4.92",
      trips: 720,
      experience: "5 yrs exp",
      priceDiff: "+$3/hr",
      specialty: "Manual & Highway Specialist",
      desc: "Expert highway driver. Shares live GPS location on WhatsApp throughout the journey.",
    },
  ];

  const calculateTotal = () => {
    let base = 0;
    if (serviceType === "hourly") {
      base = parseInt(formData.hours || 4) * 18;
    } else if (serviceType === "outstation") {
      base = 149;
    } else {
      base = 119;
    }
    const driverExtra = formData.selectedDriver === "marcus" ? 20 : formData.selectedDriver === "david" ? 12 : 0;
    const safetyFee = 4;
    return {
      base,
      driverExtra,
      safetyFee,
      total: base + driverExtra + safetyFee,
    };
  };

  const totals = calculateTotal();

  const currentDriverObj = mockDrivers.find((d) => d.id === formData.selectedDriver) || mockDrivers[0];

  const generatedWhatsAppMessage = WHATSAPP_CONFIG.generateBookingMessage({
    serviceType,
    pickup: formData.pickup || "Downtown",
    destination: formData.destination,
    hours: formData.hours,
    date: formData.date || "Today",
    time: formData.time || "Immediate",
    carModel: formData.carModel || "My vehicle",
    transmission: formData.transmission,
    selectedDriver: currentDriverObj.name,
    clientName: formData.clientName || "Customer",
    notes: formData.driverNotes,
  });

  const whatsAppLink = WHATSAPP_CONFIG.createWhatsAppLink(
    currentDriverObj.phone || WHATSAPP_CONFIG.dispatchNumber,
    generatedWhatsAppMessage
  );

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50/60 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb & Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-xs font-semibold text-gray-500 hover:text-black uppercase tracking-wider">
            ← Back to Home
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-bold mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct WhatsApp Driver & Client Connection
          </div>
          <h1 className="text-3xl font-extrabold text-black mt-2">Book a Personal Driver</h1>
          <p className="text-sm text-gray-500 mt-1">
            Hire a verified chauffeur for your vehicle with instant WhatsApp coordination.
          </p>
        </div>

        {/* STEPPER PROGRESS BAR */}
        {!confirmed && (
          <div className="mb-10 max-w-xl mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-emerald-600 -translate-y-1/2 z-0 transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />

              {[
                { s: 1, label: "Trip Details" },
                { s: 2, label: "Choose Driver" },
                { s: 3, label: "WhatsApp & Pay" },
              ].map((item) => (
                <div key={item.s} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      step >= item.s
                        ? "bg-black text-white shadow-md ring-4 ring-white"
                        : "bg-gray-100 text-gray-400 border border-gray-300"
                    }`}
                  >
                    {item.s}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${step >= item.s ? "text-black" : "text-gray-400"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONFIRMATION SCREEN (WHATSAPP CENTRIC) */}
        {confirmed ? (
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 text-center shadow-lg animate-scale-in max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-emerald-100 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-5 text-3xl font-bold">
              💬
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Booking Ready</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-1">Connect with Driver on WhatsApp</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
              Your ride details have been packaged. Click below to start WhatsApp chat directly with <span className="font-bold text-black">{currentDriverObj.name}</span>!
            </p>

            {/* Direct WhatsApp Call to Action */}
            <div className="my-6 p-6 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-left">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping"></span>
                  <span className="text-xs font-bold uppercase text-emerald-900 tracking-wider">
                    WhatsApp Chat Ready
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-500">Booking #DC-98421</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                When you click the button, WhatsApp will open with your pickup address, vehicle details, and scheduled time pre-filled. You can share your live GPS location directly in chat!
              </p>
              
              <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition shadow-md active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  Open WhatsApp Chat Now
                </a>
                <button
                  onClick={handleCopyMessage}
                  className="px-4 py-3 bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 rounded-xl text-xs font-semibold transition"
                >
                  {copied ? "Copied! ✓" : "Copy Message"}
                </button>
              </div>
            </div>

            {/* Trip Details Card */}
            <div className="p-5 bg-gray-50 rounded-2xl text-left border border-gray-100 space-y-2.5 text-xs text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-500">Assigned Driver:</span>
                <span className="font-semibold text-black">{currentDriverObj.name} (★ {currentDriverObj.rating})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Service:</span>
                <span className="font-semibold text-black capitalize">{serviceType} Driver</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pickup Address:</span>
                <span className="font-semibold text-black">{formData.pickup || "Main Street"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Vehicle:</span>
                <span className="font-semibold text-black">
                  {formData.carModel || "Personal Car"} ({formData.transmission})
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 text-sm">
                <span className="font-bold text-black">Estimated Fare:</span>
                <span className="font-extrabold text-black">${totals.total}.00</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-2.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-medium transition"
              >
                Return to Home
              </Link>
              <button
                onClick={() => {
                  setConfirmed(false);
                  setStep(1);
                }}
                className="px-6 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-medium transition"
              >
                Book Another Trip
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10 animate-fade-in">
            {/* STEP 1: TRIP & CLIENT DETAILS */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Select Service Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "hourly", title: "Hourly", sub: "$18 / hr (Min 2h)" },
                      { id: "outstation", title: "Outstation", sub: "$149 / day" },
                      { id: "daily", title: "Full Day (8h)", sub: "$119 / day" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setServiceType(t.id)}
                        className={`p-4 rounded-2xl border text-left transition ${
                          serviceType === t.id
                            ? "border-black bg-black text-white shadow-md"
                            : "border-gray-200 hover:border-gray-300 bg-gray-50/50 text-gray-700"
                        }`}
                      >
                        <div className="font-bold text-sm">{t.title}</div>
                        <div className={`text-xs mt-1 ${serviceType === t.id ? "text-gray-300" : "text-gray-500"}`}>
                          {t.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client Contact Info */}
                <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80">
                  <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-3">
                    Client WhatsApp Contact Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        placeholder="e.g. Faizan Shaikh"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.clientPhone}
                        onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      placeholder="e.g. 104 Main St, Bandra, Mumbai"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      {serviceType === "hourly" ? "Estimated Duration (Hours)" : "Destination City"}
                    </label>
                    {serviceType === "hourly" ? (
                      <select
                        value={formData.hours}
                        onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                      >
                        <option value="2">2 Hours</option>
                        <option value="3">3 Hours</option>
                        <option value="4">4 Hours (Recommended)</option>
                        <option value="6">6 Hours</option>
                        <option value="8">8 Hours</option>
                        <option value="12">12 Hours</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Pune / Lonavala / Outstation"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Pickup Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Car Details */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-black mb-3">Vehicle Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Car Make & Model
                      </label>
                      <input
                        type="text"
                        value={formData.carModel}
                        onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                        placeholder="e.g. Hyundai Creta, Honda City, Fortuner"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Transmission Type
                      </label>
                      <select
                        value={formData.transmission}
                        onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                      >
                        <option value="automatic">Automatic Transmission</option>
                        <option value="manual">Manual Transmission (Stick shift)</option>
                        <option value="ev">Electric Vehicle (EV)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition active:scale-95 shadow-sm"
                  >
                    Continue to Driver Selection →
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: CHOOSE DRIVER */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-black">Available Drivers in Your Area</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Select an auto-assigned verified driver or connect directly with an executive specialist on WhatsApp.
                  </p>
                </div>

                <div className="space-y-3">
                  {mockDrivers.map((driver) => (
                    <div
                      key={driver.id}
                      onClick={() => setFormData({ ...formData, selectedDriver: driver.id })}
                      className={`p-5 rounded-2xl border cursor-pointer transition ${
                        formData.selectedDriver === driver.id
                          ? "border-emerald-600 bg-emerald-50/40 ring-2 ring-emerald-600"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                            {driver.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-sm text-black">{driver.name}</h4>
                              <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                                ★ {driver.rating}
                              </span>
                              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                                WhatsApp Ready
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">{driver.experience} • {driver.specialty || "All vehicles"}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-sm text-black">{driver.priceDiff}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-3 pt-3 border-t border-gray-100">{driver.desc}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Special Instructions for Driver (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.driverNotes}
                    onChange={(e) => setFormData({ ...formData, driverNotes: e.target.value })}
                    placeholder="e.g. Please ring gate bell, baby seat in back, delicate clutch"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition active:scale-95 shadow-sm"
                  >
                    Review & Connect on WhatsApp →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: REVIEW & WHATSAPP CONNECTION */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-black">Review & WhatsApp Connection</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Connect directly with your driver on WhatsApp for live GPS tracking and timing updates.
                  </p>
                </div>

                {/* WhatsApp Chat Preview Card */}
                <div className="p-5 bg-emerald-50/70 border border-emerald-300 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                      <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
                      Pre-filled WhatsApp Message Preview
                    </span>
                    <button
                      onClick={handleCopyMessage}
                      className="text-[11px] font-semibold text-emerald-800 hover:underline"
                    >
                      {copied ? "Copied! ✓" : "Copy text"}
                    </button>
                  </div>
                  <pre className="bg-white p-3.5 rounded-xl border border-emerald-100 text-[11px] font-mono text-gray-800 whitespace-pre-wrap leading-relaxed">
                    {generatedWhatsAppMessage}
                  </pre>
                  <p className="text-[11px] text-emerald-800 mt-2">
                    💡 Clicking the green button below will open WhatsApp on your phone or computer with this message ready to send!
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2.5 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Base Driver Fee:</span>
                    <span>${totals.base}.00</span>
                  </div>
                  {totals.driverExtra > 0 && (
                    <div className="flex justify-between">
                      <span>Executive Chauffeur Fee:</span>
                      <span>${totals.driverExtra}.00</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Safety, Insurance & Support:</span>
                    <span>${totals.safetyFee}.00</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2 text-sm font-bold text-black">
                    <span>Total Estimated Fare:</span>
                    <span className="text-xl font-black">${totals.total}.00</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-6 py-3.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition"
                  >
                    ← Back
                  </button>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setConfirmed(true)}
                    className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition shadow-md active:scale-95"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    Book & Connect via WhatsApp (${totals.total}.00)
                  </a>
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition"
                  >
                    Confirm on Web
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
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
