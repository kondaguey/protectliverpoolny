/**
 * All dates that have movement updates or corrections.
 * Format: "Month D, YYYY" — must match the changelog page exactly.
 * The VerificationBanner reads this to show a "NEW TODAY" indicator.
 */
export const updateDates = [
  "May 8, 2026",
  "April 22, 2026",
  "April 2, 2026",
  "April 1, 2026",
  "March 31, 2026",
  "March 30, 2026",
  "March 28, 2026",
  "March 25, 2026",
  "March 24, 2026",
];

export const correctionDates = [
  "May 8, 2026",
  "April 22, 2026",
  "April 2, 2026",
  "April 1, 2026",
  "March 25, 2026",
  "March 24, 2026",
];

/**
 * Returns today's date as "Month D, YYYY" matching the changelog format.
 */
export function getTodayFormatted(): string {
  const d = new Date();
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function hasUpdateToday(): boolean {
  const today = getTodayFormatted();
  return updateDates.includes(today) || correctionDates.includes(today);
}
