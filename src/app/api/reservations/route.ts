import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, guests, date, time, notes } = body;

    if (!name || !email || !phone || !guests || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        guests: Number(guests),
        date,
        time,
        notes: notes || null,
        status: "pending",
      },
    });

    // TODO: Send notification via email/WhatsApp/Telegram
    console.log("New reservation:", reservation);

    return NextResponse.json(
      { success: true, reservation },
      { status: 201 }
    );
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "Failed to create reservation" },
      { status: 500 }
    );
  }
}
