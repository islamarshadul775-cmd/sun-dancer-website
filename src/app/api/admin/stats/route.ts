import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const stats = {
      totalReservations: await prisma.reservation.count(),
      pendingReservations: await prisma.reservation.count({
        where: { status: "pending" },
      }),
      menuItems: await prisma.menuItem.count(),
      galleryImages: await prisma.galleryImage.count(),
    };
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
