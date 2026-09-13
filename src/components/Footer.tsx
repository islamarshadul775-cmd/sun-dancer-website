"use client";

import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-ocean-deep to-ocean via-ocean-deep text-white">
      {/* Newsletter Section */}
      <div className="bg-sunset/20 py-12 border-y border-sunset/30">
        <div className="container-page text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Stay Updated</h3>
          <p className="text-sunset-gold mb-6">Get special offers and updates from Sun Dancer</p>
          <form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sunset"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl font-display font-bold mb-4">Sun Dancer</h4>
            <p className="text-sand-light opacity-90">
              Premium coastal dining experience on Marine Drive, Cox's Bazar with fresh seafood and stunning sunset views.
            </p>
            <div className="flex gap-4 mt-4">
              <FiFacebook className="cursor-pointer hover:text-sunset-gold transition-colors" size={20} />
              <FiInstagram className="cursor-pointer hover:text-sunset-gold transition-colors" size={20} />
              <FiTwitter className="cursor-pointer hover:text-sunset-gold transition-colors" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-sunset-gold transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-sunset-gold transition-colors">Menu</Link></li>
              <li><Link href="/gallery" className="hover:text-sunset-gold transition-colors">Gallery</Link></li>
              <li><Link href="/reservation" className="hover:text-sunset-gold transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-sunset-gold transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-sunset-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-sunset-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-sunset-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FiPhone size={16} className="text-sunset-gold" />
                <a href="tel:+880173737373" className="hover:text-sunset-gold transition-colors">
                  +880 173 737373
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail size={16} className="text-sunset-gold" />
                <a href="mailto:info@sundancer.com" className="hover:text-sunset-gold transition-colors">
                  info@sundancer.com
                </a>
              </div>
              <p className="text-sm opacity-75 mt-4">Marine Drive Road<br />Cox's Bazar, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ocean-light/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-75">
              &copy; 2024 Sun Dancer Cafe & Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-sunset-gold transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-sunset-gold transition-colors">Terms</Link>
              <Link href="/sitemap" className="hover:text-sunset-gold transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ad Banner */}
      <div className="fixed bottom-4 right-4 z-40 bg-sunset rounded-lg shadow-2xl p-4 max-w-xs animate-pulse-glow hidden md:block">
        <button className="absolute top-2 right-2 text-white" onClick={(e) => e.currentTarget.parentElement?.remove()}>
          ✕
        </button>
        <h4 className="font-bold text-white mb-2">🎉 Special Offer!</h4>
        <p className="text-white text-sm mb-3">Get 20% off on seafood platters!</p>
        <Link href="/offers" className="block text-center bg-white text-sunset font-bold py-2 rounded-lg hover:bg-sand-light transition-colors">
          View Offers
        </Link>
      </div>
    </footer>
  );
}
