import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const stats = {
      totalReservations: await prisma.reservation.count(),
      pendingReservations: await prisma.reservation.count({
        where: { status: "pending" },
      }),
      confirmedReservations: await prisma.reservation.count({
        where: { status: "confirmed" },
      }),
      menuItems: await prisma.menuItem.count(),
      galleryImages: await prisma.galleryImage.count(),
      offers: await prisma.offer.count({ where: { active: true } }),
    };

    console.log("✅ Stats fetched");
    return NextResponse.json(stats);
  } catch (error) {
    console.error("❌ Stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
