import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

async function getGalleryImages() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return images;
}

export const metadata = {
  title: "Gallery | Sun Dancer Cafe & Restaurant",
  description: "Explore the beauty of Sun Dancer through our stunning gallery.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();
  const categories = ["All", ...new Set(images.map((i) => i.category))];

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-80 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean to-ocean-light" />
        <div className="container-page relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90">Visual journey through Sun Dancer</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-sand-light">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.imageUrl}
                    alt={image.caption || "Gallery image"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="font-semibold">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-12 bg-white border-y-2 border-sand-dark">
        <div className="container-page text-center">
          <p className="text-sm text-charcoal-soft mb-2">📷 FEATURED</p>
          <h3 className="text-2xl font-bold text-ocean mb-2">Book Your Photoshoot at Sun Dancer</h3>
          <p className="text-charcoal-soft">Capture your special moments at our stunning location</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean via-ocean-light to-ocean text-white">
        <div className="container-page text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Experience the View</h3>
          <Link href="/reservation" className="btn-primary text-lg px-10 py-4 inline-block">
            Reserve a Table
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
