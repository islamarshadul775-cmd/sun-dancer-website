import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

async function getRestaurantInfo() {
  return await prisma.restaurant.findFirst({
    include: { openingHours: true },
  });
}

export const metadata = {
  title: "Contact | Sun Dancer Cafe & Restaurant",
  description: "Get in touch with Sun Dancer and make your reservation.",
};

export default async function ContactPage() {
  const restaurant = await getRestaurantInfo();

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-80 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean to-ocean-light" />
        <div className="container-page relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-sand-light">
        <div className="container-page">
          {restaurant && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-display font-bold mb-10 text-ocean">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="card p-6 flex items-start gap-4">
                    <FiPhone className="text-3xl text-sunset flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-ocean mb-1">Phone</h3>
                      <a href={`tel:${restaurant.phone}`} className="text-sunset hover:text-sunset-gold font-semibold">
                        {restaurant.phone}
                      </a>
                      <p className="text-charcoal-soft text-sm mt-1">Mon-Sun: 12:00 PM - 11:30 PM</p>
                    </div>
                  </div>

                  <div className="card p-6 flex items-start gap-4">
                    <FiMail className="text-3xl text-sunset flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-ocean mb-1">Email</h3>
                      <a href={`mailto:${restaurant.email}`} className="text-sunset hover:text-sunset-gold font-semibold">
                        {restaurant.email}
                      </a>
                      <p className="text-charcoal-soft text-sm mt-1">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="card p-6 flex items-start gap-4">
                    <FiMapPin className="text-3xl text-sunset flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-ocean mb-1">Location</h3>
                      <p className="font-semibold">{restaurant.address}</p>
                      <p className="text-charcoal-soft text-sm mt-1">Cox's Bazar, Bangladesh</p>
                    </div>
                  </div>

                  <div className="card p-6 flex items-start gap-4">
                    <FiClock className="text-3xl text-sunset flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-ocean mb-1">Hours</h3>
                      <p className="font-semibold">Mon-Thu: 12:00 PM - 10:30 PM</p>
                      <p className="font-semibold">Fri-Sun: 12:00 PM - 12:30 AM</p>
                    </div>
                  </div>

                  <div className="card p-6 bg-gradient-to-r from-sunset/20 to-sunset-gold/20">
                    <h3 className="font-bold text-lg text-ocean mb-3">Connect on WhatsApp</h3>
                    <a
                      href={`https://wa.me/${restaurant.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      💬 Chat Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-display font-bold mb-10 text-ocean">Find Us</h2>
                <div className="card overflow-hidden shadow-2xl h-96 md:h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${restaurant.latitude},${restaurant.longitude}`}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-white border-y border-sand-dark">
        <div className="container-page text-center">
          <h3 className="text-2xl font-display font-bold mb-8 text-ocean">Follow Our Journey</h3>
          <div className="flex justify-center gap-6 text-4xl">
            {restaurant?.facebook && (
              <a href={restaurant.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-sunset transition-colors">
                f
              </a>
            )}
            {restaurant?.instagram && (
              <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-sunset transition-colors">
                📷
              </a>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean via-ocean-light to-ocean text-white">
        <div className="container-page text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Ready to Dine?</h3>
          <Link href="/reservation" className="btn-primary text-lg px-10 py-4 inline-block">
            Make a Reservation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
