export function buildReservationWhatsAppLink(
  whatsappNumber: string,
  details: { guests?: number; date?: string; time?: string }
) {
  const { guests, date, time } = details;
  const message =
    guests && date && time
      ? `Hello Sun Dancer Cafe, I would like to reserve a table for ${guests} guests on ${date} at ${time}.`
      : "Hello Sun Dancer Cafe, I would like to reserve a table.";

  const digitsOnly = whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

export function formatBDT(amount: number | string) {
  const n = typeof amount === "string" ? Number(amount) : amount;
  return `৳${n.toLocaleString("en-BD")}`;
}

export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
