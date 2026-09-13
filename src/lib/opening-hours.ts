export type OpeningHourRow = {
  weekday: number;
  isOpen: boolean;
  openTime: string | null;
  closeTime: string | null;
};

function nowInTimezone(timezone: string): Date {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short",
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";

  return new Date(
    Number(get("year")),
    Number(get("month")) - 1,
    Number(get("day")),
    Number(get("hour")),
    Number(get("minute")),
    Number(get("second"))
  );
}

function weekdayInTimezone(timezone: string): number {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
  }).format(new Date());
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return map[weekday] ?? 0;
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function getOpenStatus(
  hours: OpeningHourRow[],
  timezone: string = "Asia/Dhaka"
): { isOpenNow: boolean; today: OpeningHourRow | null; label: string } {
  const weekday = weekdayInTimezone(timezone);
  const today = hours.find((h) => h.weekday === weekday) ?? null;

  if (!today || !today.isOpen || !today.openTime || !today.closeTime) {
    return { isOpenNow: false, today, label: "Closed today" };
  }

  const now = nowInTimezone(timezone);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const open = toMinutes(today.openTime);
  const close = toMinutes(today.closeTime);

  const isOpenNow =
    close > open
      ? nowMinutes >= open && nowMinutes < close
      : nowMinutes >= open || nowMinutes < close;

  return {
    isOpenNow,
    today,
    label: isOpenNow ? "Open now" : "Closed now",
  };
}
