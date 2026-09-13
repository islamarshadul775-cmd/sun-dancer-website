import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

async function getRestaurant() {
  return await prisma.restaurant.findFirst({
    include: { openingHours: true },
  });
}

export const metadata = {
  title: "Settings | Admin",
};

export default async function AdminSettings() {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  const restaurant = await getRestaurant();

  return (
    <div className="min-h-screen bg-sand-light">
      {/* Header */}
      <header className="bg-gradient-to-r from-ocean-deep to-ocean text-white p-6 shadow-lg">
        <div className="container-page flex items-center gap-4">
          <Link href="/admin" className="hover:text-sunset-gold transition-colors">
            <FiArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-display font-bold">Settings</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container-page py-12 max-w-2xl mx-auto">
        {restaurant && (
          <div className="card p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Restaurant Name</label>
              <input
                type="text"
                defaultValue={restaurant.name}
                disabled
                className="w-full px-4 py-2 border-2 border-sand-dark rounded-lg bg-sand-light opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                defaultValue={restaurant.description}
                disabled
                className="w-full px-4 py-2 border-2 border-sand-dark rounded-lg bg-sand-light opacity-50 h-24 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue={restaurant.phone}
                  disabled
                  className="w-full px-4 py-2 border-2 border-sand-dark rounded-lg bg-sand-light opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  defaultValue={restaurant.email}
                  disabled
                  className="w-full px-4 py-2 border-2 border-sand-dark rounded-lg bg-sand-light opacity-50"
                />
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-700">
                <strong>Note:</strong> To edit settings, please contact the development team.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
