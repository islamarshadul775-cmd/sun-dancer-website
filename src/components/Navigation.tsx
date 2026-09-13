"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <div className="container-page py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-gradient-animated">
          ☀️ Sun Dancer
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-white hover:text-sunset transition-colors">
            Home
          </Link>
          <Link href="/menu" className="text-white hover:text-sunset transition-colors">
            Menu
          </Link>
          <Link href="/gallery" className="text-white hover:text-sunset transition-colors">
            Gallery
          </Link>
          <Link href="/experience" className="text-white hover:text-sunset transition-colors">
            Experience
          </Link>
          <Link href="/offers" className="text-white hover:text-sunset transition-colors">
            Offers
          </Link>
          <Link href="/contact" className="text-white hover:text-sunset transition-colors">
            Contact
          </Link>
          <Link href="/reservation" className="btn-primary">
            Reserve
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ocean-deep text-white p-6 space-y-4">
          <Link href="/" className="block hover:text-sunset">
            Home
          </Link>
          <Link href="/menu" className="block hover:text-sunset">
            Menu
          </Link>
          <Link href="/gallery" className="block hover:text-sunset">
            Gallery
          </Link>
          <Link href="/experience" className="block hover:text-sunset">
            Experience
          </Link>
          <Link href="/offers" className="block hover:text-sunset">
            Offers
          </Link>
          <Link href="/contact" className="block hover:text-sunset">
            Contact
          </Link>
          <Link href="/reservation" className="btn-primary block text-center">
            Reserve Now
          </Link>
        </div>
      )}
    </nav>
  );
}
