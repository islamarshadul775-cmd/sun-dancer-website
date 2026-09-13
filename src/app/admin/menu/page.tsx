import Link from "next/link";

export default function AdminMenu() {
  return (
    <>
      <header className="bg-gradient-to-r from-ocean-deep to-ocean text-white p-6 shadow-lg">
        <div className="container-page flex items-center gap-4">
          <Link href="/admin" className="hover:text-sunset-gold transition-colors">
            ← Back
          </Link>
          <h1 className="text-3xl font-display font-bold">Menu Management</h1>
        </div>
      </header>

      <main className="container-page py-12">
        <div className="card p-8 text-center">
          <p className="text-2xl mb-4">📋</p>
          <h2 className="text-2xl font-bold mb-4 text-ocean">Menu Management</h2>
          <p className="text-charcoal-soft mb-6">Full menu management interface coming soon. Current data is managed via database.</p>
          <p className="text-sm text-charcoal-soft mb-8">Use Prisma Studio to manage menu items:</p>
          <code className="bg-sand p-4 rounded block text-left mb-8 text-sm">npx prisma studio</code>
          <Link href="/admin" className="btn-primary inline-block">
            Back to Dashboard
          </Link>
        </div>
      </main>
    </>
  );
}
