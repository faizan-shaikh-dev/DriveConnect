"use client";

import { useApp } from "@/context/AppContext";

export default function NotificationToast() {
  const { notification } = useApp();

  if (!notification) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 animate-slide-up max-w-sm w-full pointer-events-none">
      <div className="pointer-events-auto bg-black text-white p-4 rounded-2xl shadow-2xl border border-gray-800 flex items-start gap-3">
        <span className="text-emerald-400 text-lg mt-0.5">●</span>
        <div className="flex-1 text-xs leading-relaxed font-medium">
          {notification.msg}
        </div>
      </div>
    </div>
  );
}
