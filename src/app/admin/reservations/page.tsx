import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FiArrowLeft, FiCheck, FiX } from "react-icons/fi";
import Link from "next/link";

async function getReservations() {
  return await prisma.reservation.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export const metadata = {
  title: "Reservations | Admin",
};

export default async function AdminReservations() {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  const reservations = await getReservations();

  return (
    <div className="min-h-screen bg-sand-light">
      {/* Header */}
      <header className="bg-gradient-to-r from-ocean-deep to-ocean text-white p-6 shadow-lg">
        <div className="container-page flex items-center gap-4">
          <Link href="/admin" className="hover:text-sunset-gold transition-colors">
            <FiArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-display font-bold">Reservations</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container-page py-12">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-ocean text-white">
                <th className="px-6 py-3 text-left font-semibold">Name</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Phone</th>
                <th className="px-6 py-3 text-left font-semibold">Guests</th>
                <th className="px-6 py-3 text-left font-semibold">Date & Time</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res) => (
                <tr key={res.id} className="bg-white border-b border-sand-dark hover:bg-sand-light transition-colors">
                  <td className="px-6 py-4 font-semibold">{res.name}</td>
                  <td className="px-6 py-4 text-charcoal-soft">{res.email}</td>
                  <td className="px-6 py-4 text-charcoal-soft">{res.phone}</td>
                  <td className="px-6 py-4">{res.guests}</td>
                  <td className="px-6 py-4">{res.date} @ {res.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      res.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      res.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {res.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
