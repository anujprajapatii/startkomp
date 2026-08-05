export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter((c): c is string => typeof c === "string" && c.length > 0).join(" ");
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
  });
}

export function getTodayLabel(dateStr: string): string {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const date = new Date(dateStr);
  const todayStr = today.toDateString();
  const yesterdayStr = yesterday.toDateString();
  const dateStrFormatted = date.toDateString();

  if (dateStrFormatted === todayStr) {
    return `Today — ${formatDate(dateStr)}`;
  } else if (dateStrFormatted === yesterdayStr) {
    return `Yesterday — ${formatDate(dateStr)}`;
  } else {
    return formatDate(dateStr);
  }
}
