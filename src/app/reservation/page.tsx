"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { buildReservationWhatsAppLink } from "@/lib/utils";
import { FiCalendar, FiUsers, FiClock, FiUser, FiPhone, FiMail } from "react-icons/fi";

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        const whatsappLink = buildReservationWhatsAppLink("8801737373", {
          guests: Number(formData.guests),
          date: formData.date,
          time: formData.time,
        });
        setTimeout(() => {
          window.open(whatsappLink, "_blank");
        }, 1500);
      }
    } catch (error) {
      console.error("Reservation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-80 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean to-ocean-light" />
        <div className="container-page relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Reserve Your Table</h1>
          <p className="text-xl opacity-90">Experience dining perfection at Sun Dancer</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-sand-light">
        <div className="container-page max-w-3xl mx-auto">
          <div className="card p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 animate-fade-in-up">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-4xl font-display font-bold text-sunset mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-charcoal-soft mb-2">
                  Your reservation has been received.
                </p>
                <p className="text-lg text-charcoal-soft mb-8">
                  Redirecting to WhatsApp for confirmation...
                </p>
                <Link href="/" className="btn-primary inline-block">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-ocean">
                    <FiUser size={24} /> Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border-2 border-sand-dark rounded-xl focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border-2 border-sand-dark rounded-xl focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border-2 border-sand-dark rounded-xl focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
                    />
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="pt-6 border-t-2 border-sand">
                  <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-ocean">
                    <FiCalendar size={24} /> Reservation Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-charcoal">Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border-2 border-sand-dark rounded-xl focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-charcoal flex items-center gap-1">
                        <FiClock size={16} /> Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 border-2 border-sand-dark rounded-xl focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-charcoal flex items-center gap-1">
                        <FiUsers size={16} /> Guests *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border-2 border-sand-dark rounded-xl focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="pt-6 border-t-2 border-sand">
                  <h3 className="text-lg font-semibold mb-3 text-ocean">Special Requests (Optional)</h3>
                  <textarea
                    name="notes"
                    placeholder="Any special requests, dietary requirements, or celebration notes?"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 border-sand-dark rounded-xl focus:outline-none focus:border-sunset focus:ring-2 focus:ring-sunset/20 transition-all h-24 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t-2 border-sand">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-lg py-4 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Complete Reservation via WhatsApp"}
                  </button>
                  <p className="text-center text-charcoal-soft text-sm mt-4">
                    We'll send you a confirmation link via WhatsApp
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-r from-ocean via-ocean-light to-ocean text-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🕐</div>
              <h4 className="font-bold mb-2">Operating Hours</h4>
              <p className="opacity-90">12:00 PM - 11:30 PM<br />Friday-Saturday until 12:30 AM</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📞</div>
              <h4 className="font-bold mb-2">Quick Contact</h4>
              <p className="opacity-90">+880 173 737373<br />info@sundancer.com</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📍</div>
              <h4 className="font-bold mb-2">Location</h4>
              <p className="opacity-90">Marine Drive Road<br />Cox's Bazar, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
