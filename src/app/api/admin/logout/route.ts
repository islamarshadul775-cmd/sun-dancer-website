import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.set("sd_admin_session", "", { maxAge: 0 });
    console.log("✅ Admin logged out");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Logout error:", error);
    return NextResponse.json(
      { error: "Failed to logout" },
      { status: 500 }
    );
  }
}
