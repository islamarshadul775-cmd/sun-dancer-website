import Link from "next/link";

export default function Sitemap() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container-page py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">☀️ Sun Dancer</Link>
          <Link href="/" className="hover:text-sunset transition-colors">Back to Home</Link>
        </div>
      </nav>
      <main className="container-page py-20 max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Sitemap</h1>
        <div className="space-y-3">
          <div><Link href="/" className="text-sunset hover:underline">Home</Link></div>
          <div><Link href="/menu" className="text-sunset hover:underline">Menu</Link></div>
          <div><Link href="/gallery" className="text-sunset hover:underline">Gallery</Link></div>
          <div><Link href="/experience" className="text-sunset hover:underline">Experience</Link></div>
          <div><Link href="/offers" className="text-sunset hover:underline">Special Offers</Link></div>
          <div><Link href="/reservation" className="text-sunset hover:underline">Reservation</Link></div>
          <div><Link href="/contact" className="text-sunset hover:underline">Contact</Link></div>
          <div><Link href="/privacy" className="text-sunset hover:underline">Privacy Policy</Link></div>
          <div><Link href="/terms" className="text-sunset hover:underline">Terms of Service</Link></div>
        </div>
      </main>
    </>
  );
}
