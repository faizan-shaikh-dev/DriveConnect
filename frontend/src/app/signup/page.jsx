"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

export default function SignupPage() {
  const { t } = useLanguage();
  const { registerNewDriver } = useApp();

  const [formData, setFormData] = useState({
    name: "",
    city: "Mumbai",
    phone: "",
    experience: "5 years",
    transmission: "Automatic & Manual",
    car: "Sedan / Hatchback",
    license: "",
    rate: "400",
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicantInfo, setApplicantInfo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const application = {
      name: formData.name,
      city: formData.city,
      phone: formData.phone,
      experience: formData.experience,
      transmission: formData.transmission,
      car: formData.car,
      license: formData.license,
      rate: Number(formData.rate) || 400,
    };

    const newApp = registerNewDriver(application);
    setApplicantInfo(newApp);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 flex flex-col justify-center">
      <div className="max-w-xl w-full mx-auto">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-2xl tracking-tight">
            <span className="w-9 h-9 bg-black text-white rounded-xl flex items-center justify-center text-base font-black">
              D
            </span>
            DriveConnect
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black mt-4">
            {t("driverRegTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {t("driverRegSub")}
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black">
              ✓
            </div>

            <h2 className="text-xl font-black mt-5">{t("appSubmittedTitle")}</h2>
            <p className="text-xs text-gray-600 mt-2">
              {t("applicationIdLabel")} <strong className="text-black">{applicantInfo?.id}</strong>
            </p>

            {/* Verification Flow Roadmap */}
            <div className="mt-6 bg-gray-50 rounded-2xl p-5 text-left border border-gray-100 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-black">{t("kycStep1Title")}</h4>
                  <p className="text-gray-500 mt-0.5">
                    {t("kycStep1Desc")} ({formData.license || "Submitted"}).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-black flex items-center justify-center font-bold text-[11px] shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-black">{t("kycStep2Title")}</h4>
                  <p className="text-gray-500 mt-0.5">
                    {t("kycStep2Desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-black flex items-center justify-center font-bold text-[11px] shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-black">{t("kycStep3Title")}</h4>
                  <p className="text-gray-500 mt-0.5">
                    {t("kycStep3Desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/admin"
                className="flex-1 py-3 px-4 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition"
              >
                {t("goToAdminApprove")}
              </Link>
              <Link
                href="/login"
                className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-black rounded-xl text-xs font-bold transition"
              >
                {t("goToLogin")}
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            {/* Platform Fee Notice Callout */}
            <div className="mb-6 p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <span className="w-7 h-7 rounded-xl bg-black text-white flex items-center justify-center font-black text-xs shrink-0">
                ₹
              </span>
              <div className="text-xs">
                <span className="font-bold text-black block">{t("platformFeeCallout")}</span>
                <span className="text-gray-500 leading-relaxed block mt-0.5">
                  {t("platformFeeCalloutDesc")}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t("yourName")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t("whatsappPhone")} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  />
                </div>
              </div>

              {/* City & License */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t("operatingCity")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Pune, Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t("drivingLicenseNo")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. MH-0220200084"
                    value={formData.license}
                    onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  />
                </div>
              </div>

              {/* Experience & Transmission */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t("drivingExp")}
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  >
                    <option value="3 years">3+ years</option>
                    <option value="5 years">5+ years</option>
                    <option value="7 years">7+ years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t("transmissionExp")}
                  </label>
                  <select
                    value={formData.transmission}
                    onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  >
                    <option value="Automatic & Manual">Automatic & Manual</option>
                    <option value="Automatic & EV">Automatic & EV</option>
                    <option value="Manual Only">Manual Only</option>
                    <option value="SUV & Luxury Chauffeur">SUV & Luxury Chauffeur</option>
                  </select>
                </div>
              </div>

              {/* Rate */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  {t("desiredHourlyRate")}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="250"
                    max="1500"
                    value={formData.rate}
                    onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  />
                </div>
                <p className="text-[11px] text-gray-400 mt-1">{t("rateRecommendation")}</p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition shadow-sm mt-3"
              >
                {t("submitKYCBtn")}
              </button>
            </form>
          </div>
        )}

        <p className="text-center text-xs text-gray-500 mt-6">
          <Link href="/login" className="font-bold text-black hover:underline">
            {t("alreadyRegistered")}
          </Link>
        </p>
      </div>
    </div>
  );
}
