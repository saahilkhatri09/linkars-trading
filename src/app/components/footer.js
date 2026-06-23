import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}

        <div>

          <h3 className="text-xl font-bold mb-4">
            Linkars Trading Company
          </h3>

          <p className="text-gray-400 leading-7">
            Trusted supplier of industrial electrical,
            safety systems, cable management solutions,
            industrial connectors, cable glands and
            automation products since 1996.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/#categories" className="hover:text-white transition">
                Products
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact Info */}

        <div>

          <h3 className="text-xl font-bold mb-4">
            Contact Information
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>
              📞 +91 9850844558
            </p>

            <p>
              ☎ Tel: 24460764
            </p>

            <p className="break-all">
              📧 linkars2007@rediffmail.com
            </p>

            <p>
              📍 Vishnu Bhavan, Office No. 203,
              Second Floor, 471 Budhwar Peth,
              Pune - 411002, Maharashtra, India
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 text-center text-sm text-gray-500">

          © 2026 Linkars Trading Company. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}