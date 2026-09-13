import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const restaurant = await prisma.restaurant.findFirst({
      include: { openingHours: true },
    });
    return NextResponse.json(restaurant, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("❌ Restaurant error:", error);
    return NextResponse.json(
      { error: "Failed to fetch restaurant info" },
      { status: 500 }
    );
  }
}
