import Link from "next/link";

export default function Terms() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container-page py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">☀️ Sun Dancer</Link>
          <Link href="/" className="hover:text-sunset transition-colors">Back to Home</Link>
        </div>
      </nav>
      <main className="container-page py-20 max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-charcoal-soft">
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">1. Reservation Policy</h2>
            <p>Reservations must be made 24 hours in advance. Cancellations must be made 12 hours before your reservation time.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">2. House Rules</h2>
            <p>Guests must respect our restaurant policies, including dress code and noise levels.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">3. Payment Terms</h2>
            <p>Payment is due upon completion of your meal. We accept cash and all major credit cards.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocean mb-3">4. Liability</h2>
            <p>Sun Dancer is not responsible for lost or stolen items. Please keep your belongings secure.</p>
          </section>
        </div>
      </main>
    </>
  );
}
