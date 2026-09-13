import Link from "next/link";

export default function AdminOffers() {
  return (
    <>
      <header className="bg-gradient-to-r from-ocean-deep to-ocean text-white p-6 shadow-lg">
        <div className="container-page flex items-center gap-4">
          <Link href="/admin" className="hover:text-sunset-gold transition-colors">
            ← Back
          </Link>
          <h1 className="text-3xl font-display font-bold">Offers Management</h1>
        </div>
      </header>

      <main className="container-page py-12">
        <div className="card p-8 text-center">
          <p className="text-2xl mb-4">🏷️</p>
          <h2 className="text-2xl font-bold mb-4 text-ocean">Offers Management</h2>
          <p className="text-charcoal-soft mb-6">Offers management interface coming soon. Manage offers via database.</p>
          <Link href="/admin" className="btn-primary inline-block">
            Back to Dashboard
          </Link>
        </div>
      </main>
    </>
  );
}
