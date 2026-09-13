import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container-page py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">☀️ Sun Dancer</Link>
          <Link href="/" className="hover:text-sunset transition-colors">Back to Home</Link>
        </div>
      </nav>
      <main className="container-page py-20 max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-charcoal-soft">
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">1. Information We Collect</h2>
            <p>We collect information you provide when making reservations, including name, email, phone, and dining preferences.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">2. How We Use Your Information</h2>
            <p>We use your information to confirm reservations, send updates, and improve our service.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">3. Data Protection</h2>
            <p>Your data is encrypted and secured. We do not share your information with third parties without consent.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">4. Contact Us</h2>
            <p>For privacy concerns, contact us at info@sundancer.com</p>
          </section>
        </div>
      </main>
    </>
  );
}
