import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { formatBDT } from "@/lib/utils";
import { FiFilter, FiSearch } from "react-icons/fi";

async function getMenuData() {
  const categories = await prisma.menuCategory.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
    include: {
      items: { where: { available: true }, orderBy: { name: "asc" } },
    },
  });
  return categories;
}

export const metadata = {
  title: "Menu | Sun Dancer Cafe & Restaurant",
  description: "Explore our exquisite menu of fresh seafood and regional cuisine.",
};

export default async function MenuPage() {
  const categories = await getMenuData();

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 parallax" style={{
          backgroundImage: "url('/images/placeholder-hero.jpg')",
        }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="container-page relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">Our Menu</h1>
          <p className="text-xl opacity-90">Culinary masterpieces from the Bay of Bengal</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-sand-light">
        <div className="container-page">
          {categories.map((category, catIndex) => (
            <div key={category.id} className="mb-20 animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <div className="mb-10 pb-4 border-b-4 border-gradient-to-r from-sunset to-sunset-gold">
                <h2 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-ocean to-sunset">
                  {category.name}
                </h2>
                <p className="text-charcoal-soft mt-2">Premium selections from our kitchen</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <div key={item.id} className="card p-6 group hover:border-sunset border-2 border-transparent">
                    <div className="flex gap-4 h-full">
                      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-ocean group-hover:text-sunset transition-colors">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <span className="bg-gradient-to-r from-sunset to-sunset-gold text-white px-3 py-1 rounded-full text-xs font-bold">
                              ⭐ Popular
                            </span>
                          )}
                        </div>
                        <p className="text-charcoal-soft text-sm leading-relaxed flex-1 mb-3">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-gradient">{formatBDT(item.price)}</span>
                          <button className="bg-sunset text-white px-4 py-2 rounded-lg hover:bg-sunset-gold transition-colors text-sm font-semibold">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Section */}
      <section className="py-12 bg-gradient-to-r from-ocean via-ocean-light to-ocean">
        <div className="container-page text-center text-white">
          <p className="text-sm opacity-75 mb-2">SPONSORED</p>
          <h3 className="text-2xl font-bold mb-3">Try Our New Dessert Collection 🍰</h3>
          <p className="opacity-90 mb-4">Handcrafted delicacies to end your meal perfectly</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-page text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Ready to Order?</h3>
          <Link href="/reservation" className="btn-primary text-lg px-10 py-4 inline-block">
            Make a Reservation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
