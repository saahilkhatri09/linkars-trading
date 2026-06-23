"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <header className="sticky top-0 z-50 bg-white border-b shadow-sm">

  <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

    <Link href="/" className="flex items-center gap-3">

      <Image
        src="/logo/linkars-logo.png"
        alt="Linkars Trading Company"
        width={70}
        height={50}
        className="w-auto h-10 md:h-16"
      />

      <div>
        <h1 className="font-bold text-xs md:text-lg leading-tight">
          Linkars Trading Company
        </h1>

        <p className="text-xs md:text-sm text-gray-500">
          Since 1996
        </p>
      </div>

    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-8 font-medium">

      <Link href="/" className="hover:text-sky-600">
        Home
      </Link>

      <Link href="/about" className="hover:text-sky-600">
        About Us
      </Link>

      <Link href="/#categories" className="hover:text-sky-600">
        Products
      </Link>

      <Link href="/contact" className="hover:text-sky-600">
        Contact Us
      </Link>

    </nav>

    {/* Desktop Call Button */}
    <a
      href="tel:+919850844558"
      className="hidden md:block bg-sky-600 text-white px-5 py-2 rounded-xl hover:bg-sky-700 transition"
    >
      Call Now
    </a>

    {/* Mobile Hamburger */}
    <button
  type="button"
  className="md:hidden text-3xl p-2 z-50 relative"
  onClick={() => {
    console.log("MENU CLICKED");
    setMenuOpen(!menuOpen);
  }}
>
  ☰
</button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white border-t shadow-lg">

      <nav className="flex flex-col p-4">

        <Link
          href="/"
          className="py-3 border-b"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          href="/about"
          className="py-3 border-b"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

        <Link
          href="/#categories"
          className="py-3 border-b"
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>

        <Link
          href="/contact"
          className="py-3 border-b"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>

        <a
          href="tel:+919850844558"
          className="mt-4 bg-sky-600 text-white text-center py-3 rounded-xl"
        >
          Call Now
        </a>

      </nav>

    </div>
  )}

</header>

);
}
