"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "support",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">We're Here to Help</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mt-2 tracking-tight">
            Contact DriveConnect
          </h1>
          <p className="text-base text-gray-500 mt-3">
            Have questions about booking a driver, corporate accounts, or driving for us? Our team is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Support Channels Left */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-bold text-sm text-black">24/7 Emergency & Dispatch</h3>
              <p className="text-xs text-gray-500 mt-1">For active trips or immediate roadside coordination.</p>
              <div className="mt-3 text-sm font-bold text-black">+1 (800) 555-DRIVE</div>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-bold text-sm text-black">WhatsApp & Live Chat</h3>
              <p className="text-xs text-gray-500 mt-1">Fast replies in under 3 minutes for quick queries.</p>
              <div className="mt-3 text-sm font-bold text-emerald-600">Chat on WhatsApp →</div>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-2xl mb-2">🏢</div>
              <h3 className="font-bold text-sm text-black">Corporate Partnerships</h3>
              <p className="text-xs text-gray-500 mt-1">Dedicated corporate driver fleets for executives and VIP guests.</p>
              <div className="mt-3 text-sm font-bold text-black">corporate@driveconnect.com</div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-2 bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-black">Message Received!</h3>
                <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold text-black">{formData.name}</span>. Our support team will get back to your email within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", category: "support", message: "" });
                  }}
                  className="mt-6 px-6 py-2.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-semibold transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-black">Send Us a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
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
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                    >
                      <option value="support">Customer & Ride Support</option>
                      <option value="driver">Driver Partner Onboarding</option>
                      <option value="corporate">Corporate Fleet Account</option>
                      <option value="lost">Lost & Found Item</option>
                      <option value="feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    How can we help? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query or trip..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl text-sm transition active:scale-95 shadow-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
