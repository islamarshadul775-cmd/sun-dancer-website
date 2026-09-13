import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FiPercent, FiClock } from "react-icons/fi";

async function getOffers() {
  return await prisma.offer.findMany({
    where: { active: true },
  });
}

export const metadata = {
  title: "Offers | Sun Dancer Cafe & Restaurant",
  description: "Discover amazing offers and deals at Sun Dancer.",
};

export default async function OffersPage() {
  const offers = await getOffers();

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-80 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-sunset to-sunset-gold" />
        <div className="container-page relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Special Offers</h1>
          <p className="text-xl opacity-90">Limited time deals you can't miss</p>
        </div>
      </section>

      {/* Offers */}
      <section className="py-20 bg-sand-light">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {offers.map((offer, index) => (
              <div key={offer.id} className="card overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative overflow-hidden h-56">
                  <img
                    src={offer.imageUrl}
                    alt={offer.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-sunset to-sunset-gold text-white px-6 py-3 rounded-full text-xl font-bold flex items-center gap-2 shadow-lg">
                    <FiPercent size={24} /> Sale
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-display font-bold mb-3 text-ocean">{offer.title}</h3>
                  <p className="text-charcoal-soft text-lg leading-relaxed mb-6">{offer.description}</p>
                  <div className="bg-gradient-to-r from-sunset/10 to-sunset-gold/10 border-2 border-sunset rounded-xl p-6 mb-6">
                    <p className="text-charcoal-soft text-sm mb-2">Special Price:</p>
                    <p className="text-3xl font-bold text-sunset">{offer.discount}</p>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/reservation" className="btn-primary flex-1 text-center">
                      Book Now
                    </Link>
                    <button className="btn-secondary flex-1">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <section className="py-12 bg-gradient-to-r from-ocean via-ocean-light to-ocean text-white">
        <div className="container-page text-center">
          <p className="text-sm opacity-75 mb-2">EXCLUSIVE MEMBERS</p>
          <h3 className="text-2xl font-bold mb-3">Join Our Loyalty Program</h3>
          <p className="opacity-90 mb-4">Get 15% off on every visit + exclusive member-only deals</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-page text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Don't Miss Out</h3>
          <p className="text-lg text-charcoal-soft mb-8 max-w-2xl mx-auto">
            Offers valid for a limited time. Make your reservation today to secure your spot.
          </p>
          <Link href="/reservation" className="btn-primary text-lg px-10 py-4 inline-block">
            Reserve Your Table
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
