"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Events", path: "/events" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-vmgef-bg/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-vmgef-orange flex items-center justify-center transition-transform duration-500 group-hover:scale-105 rounded-lg">
            <span className="text-white font-serif font-bold text-sm tracking-wider">VM</span>
          </div>
          <span className="font-serif font-semibold text-xl tracking-wide text-vmgef-ink">
            VMGEF
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-vmgef-orange ${
                pathname === link.path ? "text-vmgef-orange" : "text-vmgef-ink-light"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="bg-vmgef-ink text-white px-6 py-3 text-sm tracking-widest uppercase font-medium hover:bg-vmgef-orange transition-colors duration-300 rounded-full"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-vmgef-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-vmgef-bg shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif tracking-wide text-vmgef-ink hover:text-vmgef-orange"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-vmgef-orange text-white text-center px-6 py-4 text-sm tracking-widest uppercase font-medium rounded-full"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
