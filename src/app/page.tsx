import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getOpenStatus } from "@/lib/opening-hours";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FiPhone, FiMail, FiMapPin, FiClock, FiStar, FiAward } from "react-icons/fi";

async function getRestaurantInfo() {
  return await prisma.restaurant.findFirst({
    include: { openingHours: true },
  });
}

async function getFeaturedItems() {
  return await prisma.menuItem.findMany({
    where: { popular: true, available: true },
    take: 6,
  });
}

async function getOffers() {
  return await prisma.offer.findMany({
    where: { active: true },
    take: 3,
  });
}

export const metadata = {
  title: "Sun Dancer Cafe & Restaurant | Premium Coastal Dining",
  description:
    "Experience luxury coastal dining at Sun Dancer with fresh seafood, stunning sunsets, and world-class service on Marine Drive, Cox's Bazar.",
};

export default async function Home() {
  const restaurant = await getRestaurantInfo();
  const featuredItems = await getFeaturedItems();
  const offers = await getOffers();

  const { isOpenNow, label } = restaurant
    ? getOpenStatus(
        restaurant.openingHours.map((h) => ({
          weekday: h.weekday,
          isOpen: h.isOpen,
          openTime: h.openTime,
          closeTime: h.closeTime,
        }))
      )
    : { isOpenNow: false, label: "Loading..." };

  return (
    <>
      <Navigation />

      {/* Hero Section with Parallax */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 parallax" style={{
          backgroundImage: "url('/images/placeholder-hero.jpg')",
          backgroundAttachment: "fixed",
        }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        
        <div className="container-page relative z-10 text-center text-white animate-fade-in-up">
          <div className="mb-6 inline-block">
            <span className="text-6xl animate-float">☀️</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sunset-gold via-sunset to-sunset-gold">
            Sun Dancer
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-sunset-gold font-light">
            Where Ocean Meets Elegance
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Premium coastal dining experience with fresh seafood, regional delicacies, and breathtaking sunset views on Marine Drive, Cox's Bazar
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/reservation" className="btn-primary text-lg px-10 py-4">
              Reserve Your Table
            </Link>
            <Link href="/menu" className="btn-secondary text-lg px-10 py-4">
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-sunset-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Info Bar */}
      {restaurant && (
        <section className="bg-gradient-to-r from-ocean to-ocean-light text-white py-8 shadow-xl sticky top-20 z-40">
          <div className="container-page">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: "0s" }}>
                <div className="bg-sunset/20 p-3 rounded-lg">
                  <FiClock className="text-sunset-gold text-xl" />
                </div>
                <div>
                  <p className="text-xs opacity-75">Status</p>
                  <p className="font-bold text-sunset-gold">{label}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <div className="bg-sunset/20 p-3 rounded-lg">
                  <FiPhone className="text-sunset-gold text-xl" />
                </div>
                <div>
                  <p className="text-xs opacity-75">Call</p>
                  <a href={`tel:${restaurant.phone}`} className="font-bold hover:text-sunset-gold">
                    {restaurant.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                <div className="bg-sunset/20 p-3 rounded-lg">
                  <FiMail className="text-sunset-gold text-xl" />
                </div>
                <div>
                  <p className="text-xs opacity-75">Email</p>
                  <a href={`mailto:${restaurant.email}`} className="font-bold hover:text-sunset-gold">
                    info@sundancer.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                <div className="bg-sunset/20 p-3 rounded-lg">
                  <FiMapPin className="text-sunset-gold text-xl" />
                </div>
                <div>
                  <p className="text-xs opacity-75">Location</p>
                  <p className="font-bold">Marine Drive</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      <section className="py-20 bg-sand-light">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center animate-fade-in-up" style={{ animationDelay: "0s" }}>
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-ocean">Fresh Seafood</h3>
              <p className="text-charcoal-soft">Daily catch from Bay of Bengal, prepared with regional spice blends</p>
            </div>
            <div className="card p-8 text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl mb-4">🌅</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-ocean">Sunset Views</h3>
              <p className="text-charcoal-soft">Breathtaking panoramic views of Marine Drive at golden hour</p>
            </div>
            <div className="card p-8 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-ocean">Expert Chefs</h3>
              <p className="text-charcoal-soft">Master chefs with decades of coastal dining experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-ocean via-sunset to-ocean">Signature Dishes</h2>
            <p className="text-xl text-charcoal-soft max-w-2xl mx-auto">
              Handpicked masterpieces crafted by our culinary team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={item.id} className="card overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-sunset to-sunset-gold text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                      <FiStar size={16} /> Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-ocean">{item.name}</h3>
                  <p className="text-charcoal-soft mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-sunset">৳{item.price}</span>
                    <span className="flex items-center gap-1 text-yellow-500">
                      <FiAward size={16} /> Premium
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary text-lg px-10 py-4">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      {offers.length > 0 && (
        <section className="py-20 bg-gradient-to-r from-ocean-deep via-ocean to-ocean-light text-white">
          <div className="container-page">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold mb-4">🎉 Special Offers</h2>
              <p className="text-xl opacity-90">Limited time deals you can't miss</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <div key={offer.id} className="glass-effect p-8 animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="relative mb-6 overflow-hidden rounded-xl h-48">
                    <img
                      src={offer.imageUrl}
                      alt={offer.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{offer.title}</h3>
                  <p className="opacity-90 mb-4">{offer.description}</p>
                  <div className="bg-sunset rounded-lg p-4 mb-4">
                    <p className="font-bold text-lg">{offer.discount}</p>
                  </div>
                  <Link href="/offers" className="block text-center bg-white text-ocean font-bold py-3 rounded-lg hover:bg-sand transition-colors">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-sand">
        <div className="container-page">
          <h2 className="text-5xl font-display font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-ocean via-sunset to-ocean">
            What Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-8 animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-charcoal-soft mb-4 italic">
                  "Sun Dancer exceeded all expectations. The seafood was incredibly fresh and the sunset view was magical. Highly recommended!"
                </p>
                <p className="font-bold text-ocean">Guest {i}</p>
                <p className="text-charcoal-soft text-sm">Verified Guest</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 parallax" style={{
          backgroundImage: "url('/images/placeholder-interior.jpg')",
          backgroundAttachment: "fixed",
        }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/70" />
        <div className="container-page relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Ready to Experience Magic?</h2>
          <p className="text-xl mb-10 opacity-90">Book your unforgettable evening at Sun Dancer today</p>
          <Link href="/reservation" className="btn-primary text-lg px-10 py-4 inline-block">
            Reserve Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
