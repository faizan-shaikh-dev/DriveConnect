"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_CONFIG } from "@/utils/whatsapp";

export default function DriversPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedDriver, setSelectedDriver] = useState(null);

  const drivers = [
    {
      id: "marcus",
      name: "Marcus Vance",
      phone: "919876543211",
      role: "Executive Chauffeur",
      rating: 4.96,
      trips: 940,
      experience: "6 yrs",
      rate: "$22/hr",
      category: "luxury",
      transmissions: ["Automatic", "Luxury EV", "Manual"],
      languages: ["English", "Spanish"],
      bio: "Former high-end corporate chauffeur with defensive driving certification. Specialized in Mercedes S-Class, BMW 7 Series, Tesla, and premium SUVs.",
      reviews: [
        { author: "Evelyn K.", text: "Marcus drove us for a wedding dinner downtown. Immensely courteous and smooth driving.", rating: 5 },
        { author: "Robert T.", text: "Best driver in the city. Always 10 mins early.", rating: 5 }
      ]
    },
    {
      id: "david",
      name: "David Chen",
      phone: "919876543212",
      role: "Highway & Outstation Specialist",
      rating: 4.93,
      trips: 780,
      experience: "8 yrs",
      rate: "$19/hr",
      category: "highway",
      transmissions: ["Manual", "Automatic", "4x4 SUV"],
      languages: ["English", "Mandarin"],
      bio: "Specializes in long-distance highway travel, mountain passes, and adverse weather conditions. Experienced with stick shifts and large family SUVs.",
      reviews: [
        { author: "Sarah M.", text: "Took my family on a 6-hour mountain trip safely while we slept in the back. Incredible peace of mind.", rating: 5 }
      ]
    },
    {
      id: "elena",
      name: "Elena Rostova",
      phone: "919876543213",
      role: "City Commute & Event Chauffeur",
      rating: 4.98,
      trips: 1120,
      experience: "5 yrs",
      rate: "$20/hr",
      category: "city",
      transmissions: ["Automatic", "EV"],
      languages: ["English"],
      bio: "Knows every shortcut across the city. Polite, discrete, and comfortable handling tight downtown parking garages.",
      reviews: [
        { author: "Michael B.", text: "Elena is our go-to driver for Friday night dinners. Flawless service every single time.", rating: 5 }
      ]
    },
    {
      id: "samuel",
      name: "Samuel O'Connor",
      phone: "919876543214",
      role: "Manual & Vintage Vehicle Pro",
      rating: 4.91,
      trips: 560,
      experience: "10 yrs",
      rate: "$21/hr",
      category: "manual",
      transmissions: ["Manual (Stick)", "Automatic"],
      languages: ["English"],
      bio: "Mechanic background with deep love for manual transmissions and classic cars. Treats every transmission and clutch with utmost gentleness.",
      reviews: [
        { author: "James H.", text: "I was nervous letting someone drive my manual Porsche, but Samuel treated it like his own.", rating: 5 }
      ]
    },
    {
      id: "priya",
      name: "Priya Sharma",
      phone: "919876543215",
      role: "Family & Senior Care Driver",
      rating: 4.99,
      trips: 890,
      experience: "7 yrs",
      rate: "$18/hr",
      category: "city",
      transmissions: ["Automatic", "EV"],
      languages: ["English", "Hindi"],
      bio: "Warm, exceptionally patient, and safety-focused. Frequently booked by families for hospital visits, school runs, and senior citizen appointments.",
      reviews: [
        { author: "Anita P.", text: "Helped my elderly mother into the car with care and drove with total smoothness. Highly recommended.", rating: 5 }
      ]
    },
    {
      id: "alex",
      name: "Alex Rivera",
      phone: "919876543216",
      role: "On-Demand City Driver",
      rating: 4.89,
      trips: 640,
      experience: "4 yrs",
      rate: "$18/hr",
      category: "city",
      transmissions: ["Automatic", "Manual"],
      languages: ["English"],
      bio: "Reliable and prompt city driver for daily office commutes, airport runs, and nightlife events.",
      reviews: [
        { author: "Derek S.", text: "On time, great driving, zero complaints.", rating: 5 }
      ]
    }
  ];

  const filtered = drivers.filter((d) => {
    const matchesFilter = filter === "all" || d.category === filter;
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.role.toLowerCase().includes(search.toLowerCase()) ||
      d.transmissions.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">
            Direct WhatsApp Driver Connection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black mt-2">Verified Professional Drivers</h1>
          <p className="text-sm text-gray-500 mt-2">
            Browse certified personal chauffeurs. Connect directly with any driver on WhatsApp to check availability, discuss vehicle specs, or coordinate pickup.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search driver by name, EV, manual..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {[
              { id: "all", label: "All Drivers" },
              { id: "luxury", label: "Executive & Luxury" },
              { id: "highway", label: "Highway / Outstation" },
              { id: "city", label: "City & Commute" },
              { id: "manual", label: "Manual Specialists" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  filter === f.id
                    ? "bg-black text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* DRIVERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((driver) => {
            const driverWhatsAppUrl = WHATSAPP_CONFIG.createWhatsAppLink(
              driver.phone,
              WHATSAPP_CONFIG.generateDriverInquiryMessage(driver.name, driver.role)
            );

            return (
              <div
                key={driver.id}
                className="bg-white rounded-3xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 group"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-base shadow-sm">
                        {driver.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-base text-black group-hover:text-gray-700 transition">
                            {driver.name}
                          </h3>
                          <span className="w-4 h-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px]" title="Background Verified">
                            ✓
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{driver.role}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-extrabold text-base text-black">{driver.rate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-xs text-gray-600 flex-wrap">
                    <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-900 font-bold px-2 py-0.5 rounded-full">
                      ★ {driver.rating}
                    </span>
                    <span>{driver.trips} trips</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-[#25D366] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                      WhatsApp Active
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 mt-4 line-clamp-2 leading-relaxed">
                    {driver.bio}
                  </p>

                  {/* Transmissions */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {driver.transmissions.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-[11px] font-medium text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-gray-100 space-y-2">
                  <a
                    href={driverWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-sm active:scale-95"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    Chat on WhatsApp
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDriver(driver)}
                      className="w-1/2 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold transition"
                    >
                      View Profile
                    </button>
                    <Link
                      href="/book"
                      className="w-1/2 text-center py-2 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-semibold transition"
                    >
                      Book Driver
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DRIVER PROFILE MODAL */}
        {selectedDriver && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 border border-gray-200 shadow-2xl animate-scale-in relative">
              <button
                onClick={() => setSelectedDriver(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-black p-1 rounded-full hover:bg-gray-100 transition"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl">
                  {selectedDriver.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-black">{selectedDriver.name}</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                      Verified Chauffeur
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{selectedDriver.role}</p>
                  <div className="text-xs font-bold text-black mt-1">★ {selectedDriver.rating} ({selectedDriver.trips} completed trips)</div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">About Driver</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{selectedDriver.bio}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[11px] text-gray-400 font-medium">Standard Rate</div>
                    <div className="text-base font-bold text-black mt-0.5">{selectedDriver.rate}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-[11px] text-gray-400 font-medium">Direct WhatsApp</div>
                    <div className="text-base font-bold text-emerald-600 mt-0.5">Online Now</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Recent Client Reviews</h4>
                  <div className="space-y-2">
                    {selectedDriver.reviews.map((r, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded-xl text-xs border border-gray-100">
                        <div className="flex justify-between font-semibold text-black mb-1">
                          <span>{r.author}</span>
                          <span className="text-emerald-600">{"★".repeat(r.rating)}</span>
                        </div>
                        <p className="text-gray-600">{r.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
                <a
                  href={WHATSAPP_CONFIG.createWhatsAppLink(
                    selectedDriver.phone,
                    WHATSAPP_CONFIG.generateDriverInquiryMessage(selectedDriver.name, selectedDriver.role)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  Direct WhatsApp Chat with {selectedDriver.name.split(" ")[0]}
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedDriver(null)}
                    className="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition"
                  >
                    Close
                  </button>
                  <Link
                    href="/book"
                    className="w-1/2 text-center py-2.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-semibold transition shadow-sm"
                  >
                    Book Trip Form
                  </Link>
                </div>
              </div>
            </div>
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
