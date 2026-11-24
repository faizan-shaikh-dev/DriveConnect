"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header (PDF Screen 06) */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
            {t("contactTag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            {t("contactTitle")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            {t("contactSubtitle")}
          </p>
        </div>

        {/* Form Card (PDF Screen 06) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-base font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold text-black">{t("messageSent")}</h3>
              <p className="text-xs text-gray-500 mt-2 max-w-sm mx-auto">
                {t("messageSentDesc")}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="mt-6 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-xs font-medium transition"
              >
                {t("sendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("yourName")}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("emailAddress")}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("messagePlaceholder")}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-black transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-medium rounded-xl text-xs sm:text-sm transition active:scale-95"
              >
                {t("sendMessage")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
