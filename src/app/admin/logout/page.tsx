import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLogout() {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  await fetch("/api/admin/logout", { method: "POST" });
  redirect("/admin/login");
}
