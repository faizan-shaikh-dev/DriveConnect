"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("hourly");
  const [formData, setFormData] = useState({
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
      rating: "4.9+",
      experience: "Top 10% Drivers",
      priceDiff: "$0",
      desc: "System assigns the nearest available 5-star driver immediately.",
    },
    {
      id: "marcus",
      name: "Marcus Vance",
      rating: "4.96",
      trips: 940,
      experience: "6 yrs exp",
      priceDiff: "+$5/hr",
      specialty: "Luxury Sedans & SUVs",
      desc: "Former executive chauffeur. Punctual, courteous, English & Spanish.",
    },
    {
      id: "david",
      name: "David Chen",
      rating: "4.92",
      trips: 720,
      experience: "5 yrs exp",
      priceDiff: "+$3/hr",
      specialty: "Manual & Highway Specialist",
      desc: "Expert mountain and long-distance highway driver.",
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
          <h1 className="text-3xl font-extrabold text-black mt-2">Book a Personal Driver</h1>
          <p className="text-sm text-gray-500 mt-1">
            Hire a certified chauffeur to drive your car anywhere you need.
          </p>
        </div>

        {/* STEPPER PROGRESS BAR */}
        {!confirmed && (
          <div className="mb-10 max-w-xl mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-black -translate-y-1/2 z-0 transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />

              {[
                { s: 1, label: "Trip Details" },
                { s: 2, label: "Choose Driver" },
                { s: 3, label: "Review & Pay" },
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

        {/* CONFIRMATION SCREEN */}
        {confirmed ? (
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 text-center shadow-lg animate-scale-in max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              ✓
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Booking Confirmed!</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-2">Your Driver is Scheduled</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
              Booking ID <span className="font-mono font-bold text-black">#DC-98421</span>. We’ve sent full details & live GPS tracker to your mobile.
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-2xl text-left border border-gray-100 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Service:</span>
                <span className="font-semibold text-black capitalize">{serviceType} Driver</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pickup Address:</span>
                <span className="font-semibold text-black">{formData.pickup || "742 Evergreen Terrace"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Scheduled For:</span>
                <span className="font-semibold text-black">
                  {formData.date || "Today"} at {formData.time || "Immediate"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Vehicle:</span>
                <span className="font-semibold text-black">
                  {formData.carModel || "Standard Sedan"} ({formData.transmission})
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3 text-base">
                <span className="font-bold text-black">Total Fare:</span>
                <span className="font-extrabold text-black">${totals.total}.00</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition"
              >
                Return to Home
              </Link>
              <button
                onClick={() => {
                  setConfirmed(false);
                  setStep(1);
                }}
                className="px-6 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition"
              >
                Book Another Driver
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10 animate-fade-in">
            {/* STEP 1: TRIP DETAILS */}
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
                      placeholder="e.g. 104 Main St, Downtown"
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
                        placeholder="e.g. Lake Tahoe / Coastal Bay"
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
                        placeholder="e.g. Honda Accord, BMW X5, Tesla Model 3"
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
                    Select an auto-assigned verified driver or reserve an executive specialist.
                  </p>
                </div>

                <div className="space-y-3">
                  {mockDrivers.map((driver) => (
                    <div
                      key={driver.id}
                      onClick={() => setFormData({ ...formData, selectedDriver: driver.id })}
                      className={`p-5 rounded-2xl border cursor-pointer transition ${
                        formData.selectedDriver === driver.id
                          ? "border-black bg-gray-50/90 ring-2 ring-black"
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
                    Review Fare Estimate →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: REVIEW & PAY */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-black">Booking Summary & Price Breakdown</h3>
                  <p className="text-xs text-gray-500 mt-1">Review your trip details before confirming.</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-semibold text-black capitalize">{serviceType} Service</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup Location:</span>
                    <span className="font-semibold text-black">{formData.pickup || "Downtown pickup"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scheduled Date & Time:</span>
                    <span className="font-semibold text-black">{formData.date || "Today"} @ {formData.time || "Asap"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assigned Driver:</span>
                    <span className="font-semibold text-black capitalize">{formData.selectedDriver}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Type:</span>
                    <span className="font-semibold text-black capitalize">{formData.transmission}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-3 space-y-2">
                    <div className="flex justify-between text-gray-600 text-xs">
                      <span>Base Driver Rate:</span>
                      <span>${totals.base}.00</span>
                    </div>
                    {totals.driverExtra > 0 && (
                      <div className="flex justify-between text-gray-600 text-xs">
                        <span>Executive Driver Premium:</span>
                        <span>${totals.driverExtra}.00</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-600 text-xs">
                      <span>Safety, Insurance & Service Fee:</span>
                      <span>${totals.safetyFee}.00</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-bold text-black">
                      <span>Total Estimated Fare:</span>
                      <span className="text-xl">${totals.total}.00</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-3">
                  <span className="text-lg">🛡️</span>
                  <div>
                    <span className="font-bold">DriveConnect Guarantee:</span> Free cancellation up to 60 minutes before scheduled pickup. No hidden extra fuel fees.
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition active:scale-95 shadow-md"
                  >
                    Confirm & Reserve Driver ($ {totals.total}.00)
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
