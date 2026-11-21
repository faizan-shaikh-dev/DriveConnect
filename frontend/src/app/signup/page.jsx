"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "New York / Metro",
    licenseNumber: "",
    yearsExperience: "5",
    transmissions: ["Automatic"],
    cleanRecord: false,
  });

  const toggleTransmission = (t) => {
    if (formData.transmissions.includes(t)) {
      setFormData({
        ...formData,
        transmissions: formData.transmissions.filter((x) => x !== t),
      });
    } else {
      setFormData({
        ...formData,
        transmissions: [...formData.transmissions, t],
      });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="text-xs font-semibold text-gray-500 hover:text-black uppercase tracking-wider">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-extrabold text-black mt-2">Become a DriveConnect Partner</h1>
          <p className="text-sm text-gray-500 mt-1">
            Drive high-end personal vehicles. Earn up to $35/hr with zero fuel or car maintenance costs.
          </p>
        </div>

        {/* Stepper */}
        {!submitted && (
          <div className="flex items-center justify-between mb-8 px-4">
            {[
              { s: 1, label: "Personal" },
              { s: 2, label: "License & Exp" },
              { s: 3, label: "Skills & Vetting" },
            ].map((item) => (
              <div key={item.s} className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= item.s ? "bg-black text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {item.s}
                </span>
                <span className={`text-xs font-medium ${step >= item.s ? "text-black" : "text-gray-400"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-8 animate-scale-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Application Submitted</span>
              <h2 className="text-2xl font-extrabold text-black mt-1">Welcome, {formData.name}!</h2>
              <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
                Your application ID is <span className="font-mono font-bold text-black">#APP-7821</span>. Our onboarding coordinator will review your driving license and contact you within 24 hours to schedule your practical road evaluation.
              </p>

              <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-left border border-gray-100 text-xs text-gray-600 space-y-2 max-w-md mx-auto">
                <div className="font-bold text-black text-sm mb-2">Next Steps for Onboarding:</div>
                <div>1. DMV & Background screening check (In Progress)</div>
                <div>2. Quick 20-minute vehicle handling assessment</div>
                <div>3. Uniform & Driver ID collection</div>
                <div>4. Start receiving high-paying ride requests!</div>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <Link
                  href="/driver"
                  className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-semibold transition"
                >
                  Preview Driver Portal
                </Link>
                <Link
                  href="/"
                  className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 transition"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-6">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-bold text-base text-black">Step 1: Personal Details</h3>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Operating City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option>New York / Metro</option>
                      <option>Los Angeles / Orange County</option>
                      <option>Chicago</option>
                      <option>San Francisco / Bay Area</option>
                      <option>Dallas / Fort Worth</option>
                      <option>Miami / South Florida</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition"
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-bold text-base text-black">Step 2: Driving Credentials</h3>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Driver's License Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      placeholder="e.g. D12345678"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Years of Driving Experience
                    </label>
                    <select
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="3">3 - 4 Years</option>
                      <option value="5">5 - 7 Years (Recommended)</option>
                      <option value="8">8 - 10 Years</option>
                      <option value="10">10+ Years (Master Chauffeur)</option>
                    </select>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="clean"
                      required
                      checked={formData.cleanRecord}
                      onChange={(e) => setFormData({ ...formData, cleanRecord: e.target.checked })}
                      className="mt-0.5 accent-black rounded"
                    />
                    <label htmlFor="clean" className="text-xs text-gray-600 leading-normal cursor-pointer">
                      I certify that I hold a valid, non-suspended driver's license and have had zero DUI/DWI convictions or major moving violations in the past 3 years.
                    </label>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition"
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-bold text-base text-black">Step 3: Vehicle Capabilities</h3>
                  <p className="text-xs text-gray-500">
                    Select all vehicle transmission types you are certified and comfortable driving:
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Automatic Transmission",
                      "Manual Transmission (Stick shift)",
                      "Luxury Sedans (Mercedes / BMW)",
                      "Full-size SUVs & 4x4",
                      "Electric Vehicles (Tesla, EV)",
                      "Commercial Vans"
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => toggleTransmission(item)}
                        className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition ${
                          formData.transmissions.includes(item)
                            ? "border-black bg-black text-white"
                            : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
                    🛡️ <strong>Background Check Consent:</strong> By submitting, you authorize DriveConnect to conduct standard DMV and criminal record verifications.
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
