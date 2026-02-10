"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order" },
  { href: "/sweets", label: "Sweets" },
  {
    href: "/catering", label: "Catering", subLinks: [
      { href: "/catering-menu", label: "Catering Menu" },
    ]
  },
];

export default function Header() {
  const { totalPrice, totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-[100] w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between">

          {/* Left - Pickup Address (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 flex-1">
            <span className="font-oswald text-2xl font-normal text-foreground">Pickup From</span>
            <span className="font-oswald text-2xl font-semibold text-title">2-1990 152 Street</span>
          </div>

          {/* Center - Navigation with Logo (Desktop) */}
          <nav className="flex items-center justify-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-inter text-base font-medium text-foreground hover:text-title transition-colors">Home</Link>
              <Link href="/sweets" className="font-inter text-base font-medium text-foreground hover:text-title transition-colors">Sweets</Link>
            </div>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Kesari Restaurant"
                width={115}
                height={90}
                className="w-[100px] h-[78px] md:w-[115px] md:h-[90px]"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/order" className="font-inter text-base font-medium text-foreground hover:text-title transition-colors">Order</Link>
              <div className="relative group">
                <Link href="/catering" className="font-inter text-base font-medium text-foreground hover:text-title transition-colors flex items-center gap-1">
                  Catering
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-lg py-2 min-w-[180px]">
                    <Link href="/catering-menu" className="block px-4 py-2 font-inter text-sm text-black hover:bg-[#FF9900]/10 hover:text-[#FF9900] transition-colors">
                      Catering Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Right - Icons & Mobile Toggle */}
          <div className="flex items-center justify-end gap-3 md:gap-4 flex-1">
            {/* Search Icon */}
            <button className="p-2 text-foreground hover:text-title transition-colors" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>

            {/* Price/Cart Tag (Modern) */}
            <Link href="/cart" className="hidden sm:flex items-center bg-[#FF9900] text-white px-4 py-1.5 rounded-full gap-2 shadow-sm cursor-pointer hover:bg-[#e68a00] transition-all relative">
              <span className="font-inter text-sm font-semibold">
                CAD ${totalPrice.toFixed(2)}
              </span>
              <div className="w-[1px] h-4 bg-white/30"></div>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden p-2 text-foreground z-[110] relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4"}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[105] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl transition-all" onClick={() => setIsMenuOpen(false)}></div>

        {/* Menu Content */}
        <nav className="relative h-full flex flex-col justify-center items-center px-10 gap-6">
          {NAV_LINKS.map((link, index) => (
            <div key={link.href} className="flex flex-col items-center">
              <Link
                href={link.href}
                className={`font-oswald text-[27px] font-medium text-foreground hover:text-title transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.subLinks && link.subLinks.map((sub, subIndex) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={`font-oswald text-[27px] font-medium text-foreground hover:text-title mt-6 transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${(index * 100) + 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Mobile Pickup Address */}
          <div className={`mt-10 flex flex-col items-center gap-2 text-center transition-all duration-500 delay-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="font-inter text-sm text-gray-400 uppercase tracking-widest">Visit Us</span>
            <span className="font-oswald text-xl text-foreground">2-1990 152 Street, Surrey</span>
          </div>

          {/* Mobile Socials or CTA */}
          <div className={`mt-4 w-full max-w-[280px] transition-all duration-500 delay-700 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <Link
              href="/order"
              className="flex items-center justify-center w-full bg-[#FF9900] text-white py-4 rounded-2xl font-oswald text-xl uppercase tracking-wider shadow-lg shadow-orange-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Online
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
