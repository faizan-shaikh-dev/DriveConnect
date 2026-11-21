"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState("customer");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (userRole === "customer") {
        router.push("/book");
      } else {
        router.push("/driver");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col justify-center py-12 px-6">
      <div className="max-w-md w-full mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-xl text-black">
            <span className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-black">
              D
            </span>
            DriveConnect
          </Link>
          <h2 className="text-2xl font-extrabold text-black mt-4">Welcome Back</h2>
          <p className="text-xs text-gray-500 mt-1">Log in to manage your bookings or driver shifts.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          {/* Role Tabs */}
          <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => setUserRole("customer")}
              className={`py-2 text-xs font-bold rounded-xl transition ${
                userRole === "customer" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
              }`}
            >
              Car Owner
            </button>
            <button
              type="button"
              onClick={() => setUserRole("driver")}
              className={`py-2 text-xs font-bold rounded-xl transition ${
                userRole === "driver" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
              }`}
            >
              Driver Partner
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                {userRole === "customer" ? "Phone or Email" : "Registered Driver Mobile"}
              </label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={userRole === "customer" ? "you@example.com" : "+1 (555) 000-0000"}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500 hover:text-black">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl text-sm transition active:scale-95 shadow-sm mt-2 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Signing in...
                </>
              ) : (
                `Sign in as ${userRole === "customer" ? "Car Owner" : "Driver"}`
              )}
            </button>
          </form>

          {/* Social Sign-in */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="text-center text-[11px] text-gray-400 uppercase tracking-wider mb-4">
              Or continue with
            </div>
            <button
              type="button"
              onClick={() => router.push(userRole === "customer" ? "/book" : "/driver")}
              className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 flex items-center justify-center gap-2 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google Account
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            Don't have an account yet?{" "}
            <Link href="/signup" className="text-black font-bold hover:underline">
              Create an account / Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
