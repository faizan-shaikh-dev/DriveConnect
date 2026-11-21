"use client";

import { useState } from "react";
import Link from "next/link";

export default function DriversPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedDriver, setSelectedDriver] = useState(null);

  const drivers = [
    {
      id: "marcus",
      name: "Marcus Vance",
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
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">100% Background-Checked</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black mt-2">Verified Professional Drivers</h1>
          <p className="text-sm text-gray-500 mt-2">
            Browse certified personal chauffeurs available in your city. Each driver has passed strict background checks and road driving tests.
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
          {filtered.map((driver) => (
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

                <div className="flex items-center gap-3 mt-4 text-xs text-gray-600">
                  <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-900 font-bold px-2.5 py-1 rounded-full">
                    ★ {driver.rating}
                  </span>
                  <span>{driver.trips} trips</span>
                  <span>•</span>
                  <span>{driver.experience} experience</span>
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
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedDriver(driver)}
                  className="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold transition"
                >
                  View Profile
                </button>
                <Link
                  href="/book"
                  className="w-1/2 text-center py-2.5 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-semibold transition shadow-sm"
                >
                  Book Driver
                </Link>
              </div>
            </div>
          ))}
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
                    <div className="text-[11px] text-gray-400 font-medium">Experience</div>
                    <div className="text-base font-bold text-black mt-0.5">{selectedDriver.experience}</div>
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

              <div className="mt-6 pt-4 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setSelectedDriver(null)}
                  className="w-1/2 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition"
                >
                  Close
                </button>
                <Link
                  href="/book"
                  className="w-1/2 text-center py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-xs font-semibold transition shadow-sm"
                >
                  Book with {selectedDriver.name.split(" ")[0]}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
