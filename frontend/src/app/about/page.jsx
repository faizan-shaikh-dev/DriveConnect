import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Your Car Is Sacred",
      desc: "We treat your vehicle with maximum care and respect. From seat adjustments to delicate manual clutches, our drivers operate with white-glove attentiveness.",
      icon: "🚗"
    },
    {
      title: "Uncompromising Safety",
      desc: "Every chauffeur goes through comprehensive background checks, DMV record verifications, and practical road testing before ever touching a steering wheel.",
      icon: "🛡️"
    },
    {
      title: "Fair Pay for Drivers",
      desc: "Unlike ride-hailing apps that deduct 35% commission plus car depreciation, our drivers keep the majority of fares and 100% of their tips.",
      icon: "🤝"
    },
    {
      title: "Zero Hidden Fees",
      desc: "What you see is what you pay. No surge algorithms during rainstorms or Friday nights. Flat, predictable, and fair pricing.",
      icon: "✨"
    }
  ];

  const milestones = [
    { year: "2023", title: "Founded", desc: "Started with 20 drivers in one city to solve late-night party driving." },
    { year: "2024", title: "50,000 Trips", desc: "Expanded to corporate commuters and highway road trips." },
    { year: "2025", title: "12 Metropolitan Areas", desc: "Onboarded over 1,800 background-checked drivers." },
    { year: "2026", title: "Nationwide Vision", desc: "Becoming the most trusted personal chauffeur platform." },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Our Mission</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mt-2 tracking-tight">
            The Safest Way to Ride in Your Own Vehicle
          </h1>
          <p className="text-base text-gray-500 mt-3 leading-relaxed">
            DriveConnect was founded on a simple insight: you already own the most comfortable car for you. All you need is an elite, trustworthy chauffeur to drive it.
          </p>
        </div>

        {/* STORY SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-black">Why We Built DriveConnect</h2>
            <p>
              Millions of drivers waste hours in bumper-to-bumper traffic, stressing over parking spots, or having to forgo wine at dinner because someone has to drive home.
            </p>
            <p>
              Meanwhile, commercial rideshares require riding in worn-out cars with strangers, paying 3x surge prices, and leaving your own expensive car parked in the driveway.
            </p>
            <p>
              DriveConnect bridges this gap. We provide background-vetted, professional drivers who meet you at your home and drive your personal car wherever you need to go. You enjoy familiar comfort, customized air conditioning, and your own music playlist.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 space-y-6">
            <div className="border-l-4 border-black pl-4">
              <h3 className="text-2xl font-black text-black">50,000+</h3>
              <p className="text-xs text-gray-500 mt-1">Rides safely navigated across 12 cities</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="text-2xl font-black text-black">100%</h3>
              <p className="text-xs text-gray-500 mt-1">Drivers undergo criminal and DMV verification</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="text-2xl font-black text-black">4.96 ★</h3>
              <p className="text-xs text-gray-500 mt-1">Average customer satisfaction score</p>
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="my-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-7 bg-gray-50 rounded-2xl border border-gray-200/80">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-base text-black mb-2">{v.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="my-20 bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-black text-center mb-10">Our Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-xs font-black text-emerald-600 font-mono">{m.year}</span>
                <h4 className="font-bold text-sm text-black mt-1 mb-2">{m.title}</h4>
                <p className="text-xs text-gray-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-black">Experience DriveConnect Today</h3>
          <p className="text-sm text-gray-500 mt-1">Join thousands of vehicle owners who travel stress-free.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white rounded-full text-xs font-bold transition shadow-sm"
            >
              Book a Chauffeur
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3.5 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-full text-xs font-bold transition"
            >
              Drive With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
