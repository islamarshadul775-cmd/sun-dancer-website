import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { FiLogOut, FiMenu, FiGallery, FiTag, FiShoppingCart, FiSettings } from "react-icons/fi";

async function getStats() {
  const stats = {
    totalReservations: await prisma.reservation.count(),
    pendingReservations: await prisma.reservation.count({
      where: { status: "pending" },
    }),
    menuItems: await prisma.menuItem.count(),
    galleryImages: await prisma.galleryImage.count(),
    offers: await prisma.offer.count({ where: { active: true } }),
  };
  return stats;
}

export const metadata = {
  title: "Admin Dashboard | Sun Dancer",
};

export default async function AdminDashboard() {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  const stats = await getStats();

  const menuItems = [
    { icon: FiMenu, label: "Menu", href: "/admin/menu", count: stats.menuItems },
    { icon: FiGallery, label: "Gallery", href: "/admin/gallery", count: stats.galleryImages },
    { icon: FiTag, label: "Offers", href: "/admin/offers", count: stats.offers },
    { icon: FiShoppingCart, label: "Reservations", href: "/admin/reservations", count: stats.pendingReservations },
    { icon: FiSettings, label: "Settings", href: "/admin/settings", count: 0 },
  ];

  return (
    <div className="min-h-screen bg-sand-light">
      {/* Header */}
      <header className="bg-gradient-to-r from-ocean-deep to-ocean text-white p-6 shadow-lg">
        <div className="container-page flex justify-between items-center">
          <h1 className="text-3xl font-display font-bold">☀️ Sun Dancer Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-75">Welcome, {session.email}</span>
            <Link href="/admin/logout" className="hover:text-sunset-gold transition-colors">
              <FiLogOut size={24} />
            </Link>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="container-page py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="card p-6 text-center">
            <div className="text-3xl mb-2">📋</div>
            <p className="text-charcoal-soft text-sm mb-2">Menu Items</p>
            <p className="text-3xl font-bold text-ocean">{stats.menuItems}</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-2">📸</div>
            <p className="text-charcoal-soft text-sm mb-2">Gallery Images</p>
            <p className="text-3xl font-bold text-ocean">{stats.galleryImages}</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-2">🏷️</div>
            <p className="text-charcoal-soft text-sm mb-2">Active Offers</p>
            <p className="text-3xl font-bold text-ocean">{stats.offers}</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-2">📅</div>
            <p className="text-charcoal-soft text-sm mb-2">Total Reservations</p>
            <p className="text-3xl font-bold text-ocean">{stats.totalReservations}</p>
          </div>
          <div className="card p-6 text-center animate-pulse-glow">
            <div className="text-3xl mb-2">⏳</div>
            <p className="text-charcoal-soft text-sm mb-2">Pending</p>
            <p className="text-3xl font-bold text-sunset">{stats.pendingReservations}</p>
          </div>
        </div>

        {/* Menu Grid */}
        <div>
          <h2 className="text-3xl font-display font-bold mb-8 text-ocean">Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all group"
                >
                  <div className="text-4xl mb-4 text-sunset group-hover:scale-110 transition-transform">
                    <Icon size={40} className="mx-auto" />
                  </div>
                  <h3 className="font-bold text-lg text-ocean mb-2">{item.label}</h3>
                  {item.count > 0 && <p className="text-charcoal-soft text-sm">{item.count} items</p>}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
