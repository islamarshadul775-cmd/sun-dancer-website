import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Experience | Sun Dancer Cafe & Restaurant",
  description: "Discover the unique experience at Sun Dancer.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-80 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean to-ocean-light" />
        <div className="container-page relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">The Experience</h1>
          <p className="text-xl opacity-90">Unforgettable moments by the sea</p>
        </div>
      </section>

      {/* Experience Content */}
      <section className="py-20 bg-sand-light">
        <div className="container-page">
          <div className="space-y-20">
            {/* Ambient */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ocean to-sunset">
                  Sunset Ambiance
                </h2>
                <p className="text-lg text-charcoal-soft leading-relaxed mb-4">
                  Watch the sun dip below the horizon as golden hour paints the sky. Our prime location on Marine Drive offers unobstructed views of nature's most spectacular show.
                </p>
                <p className="text-lg text-charcoal-soft leading-relaxed">
                  Every evening is a masterpiece, with warm lighting and ambient music creating the perfect atmosphere for romance, celebration, or simply enjoying great food.
                </p>
              </div>
              <div className="card overflow-hidden h-96">
                <img
                  src="/images/placeholder-sunset.jpg"
                  alt="Sunset View"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Cuisine */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in-up">
              <div className="card overflow-hidden h-96 order-last md:order-first">
                <img
                  src="/images/placeholder-seafood-1.jpg"
                  alt="Cuisine"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sunset to-ocean">
                  Culinary Excellence
                </h2>
                <p className="text-lg text-charcoal-soft leading-relaxed mb-4">
                  Our chefs craft each dish with precision and passion, using the freshest ingredients from the Bay of Bengal and local markets.
                </p>
                <p className="text-lg text-charcoal-soft leading-relaxed">
                  From traditional Bangla preparations to innovative Asian fusion, every plate tells a story of coastal culinary heritage.
                </p>
              </div>
            </div>

            {/* Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ocean to-sunset">
                  Exceptional Service
                </h2>
                <p className="text-lg text-charcoal-soft leading-relaxed mb-4">
                  Our dedicated team anticipates your every need, delivering impeccable service with a warm smile.
                </p>
                <p className="text-lg text-charcoal-soft leading-relaxed">
                  Whether it's your first visit or your hundredth, we ensure every moment at Sun Dancer is special and memorable.
                </p>
              </div>
              <div className="card overflow-hidden h-96">
                <img
                  src="/images/placeholder-interior.jpg"
                  alt="Service"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-ocean">Why Choose Sun Dancer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌊", title: "Ocean Views", desc: "Panoramic vistas of Marine Drive" },
              { icon: "👨‍🍳", title: "Expert Chefs", desc: "Decades of culinary experience" },
              { icon: "⭐", title: "Premium Quality", desc: "Only the finest ingredients" },
              { icon: "🎵", title: "Ambiance", desc: "Perfect atmosphere for any occasion" },
              { icon: "🚗", title: "Easy Access", desc: "Convenient location with parking" },
              { icon: "💰", title: "Value for Money", desc: "Unbeatable prices for premium experience" },
            ].map((item, index) => (
              <div key={index} className="card p-8 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-ocean mb-2">{item.title}</h3>
                <p className="text-charcoal-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean via-ocean-light to-ocean text-white">
        <div className="container-page text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Start Your Journey Today</h3>
          <Link href="/reservation" className="btn-primary text-lg px-10 py-4 inline-block">
            Reserve Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
