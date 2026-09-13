import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.menuCategory.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      include: {
        items: { where: { available: true }, orderBy: { name: "asc" } },
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Menu error:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu" },
      { status: 500 }
    );
  }
}
