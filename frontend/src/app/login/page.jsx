"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { showNotification } = useApp();

  const [role, setRole] = useState("driver"); // "driver" | "admin" | "rider"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (role === "admin") {
        showNotification("Welcome Admin! Redirecting to Operations Dashboard...", "success");
        router.push("/admin");
      } else if (role === "driver") {
        showNotification("Welcome Arjun! Redirecting to Driver Dashboard...", "success");
        router.push("/driver");
      } else {
        showNotification("Welcome back! Explore verified drivers...", "success");
        router.push("/drivers");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center py-12 px-4 sm:px-6">
      <div className="max-w-md w-full mx-auto">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-2xl tracking-tight">
            <span className="w-9 h-9 bg-black text-white rounded-xl flex items-center justify-center text-base font-black">
              D
            </span>
            DriveConnect
          </Link>
          <h1 className="text-2xl font-black mt-4">
            {t("loginTitle")}
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            {t("loginSubtitle")}
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          {/* Role Switcher Pill */}
          <div className="grid grid-cols-3 p-1 bg-gray-100 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => setRole("driver")}
              className={`py-2 text-xs font-bold rounded-xl transition ${
                role === "driver"
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {t("driverRole")}
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`py-2 text-xs font-bold rounded-xl transition ${
                role === "admin"
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {t("adminRole")}
            </button>
            <button
              type="button"
              onClick={() => setRole("rider")}
              className={`py-2 text-xs font-bold rounded-xl transition ${
                role === "rider"
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {t("riderRole")}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t("emailAddress")}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  role === "admin"
                    ? "admin@driveconnect.in"
                    : role === "driver"
                    ? "arjun.driver@driveconnect.in"
                    : "rider@example.com"
                }
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  {t("password")}
                </label>
                <span className="text-xs text-gray-400 hover:text-black cursor-pointer">
                  {t("forgotPassword")}
                </span>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition shadow-sm mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  {t("loggingIn")}
                </>
              ) : (
                `${t("loginBtn")} (${role.toUpperCase()})`
              )}
            </button>
          </form>

          {/* Quick Demo Helper */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-[11px] text-gray-500">
              {t("demoCredentials", { role: role.toUpperCase() })}
            </p>
          </div>
        </div>

        {/* Signup Link */}
        <p className="text-center text-xs text-gray-500 mt-6">
          <Link href="/signup" className="font-bold text-black hover:underline">
            {t("newDriverRegister")}
          </Link>
        </p>
      </div>
    </div>
  );
}
