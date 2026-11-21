import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div>
            <h3 className="font-bold text-black text-base">DriveConnect</h3>
            <p className="text-sm text-gray-500 mt-2">
              Professional drivers, on demand.
            </p>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="font-semibold text-xs text-black uppercase tracking-wider mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/drivers" className="hover:text-black transition">Find drivers</Link></li>
              <li><Link href="/book" className="hover:text-black transition">Book a ride</Link></li>
              <li><Link href="/pricing" className="hover:text-black transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="font-semibold text-xs text-black uppercase tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-black transition">About</Link></li>
              <li><Link href="/how-it-works" className="hover:text-black transition">How it works</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
            </ul>
          </div>

          {/* Portals Col */}
          <div>
            <h4 className="font-semibold text-xs text-black uppercase tracking-wider mb-3">
              Portals
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/driver" className="hover:text-black transition">Driver dashboard</Link></li>
              <li><Link href="/admin" className="hover:text-black transition">Admin dashboard</Link></li>
              <li><Link href="/signup" className="hover:text-black transition">Become a driver</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © 2026 DriveConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}