import { format } from "date-fns"
import { useMemo } from "react"

/**
 * Format a date using date-fns patterns.
 */
export function formatDate(
  date: Date | number | string,
  pattern: string = "yyyy/MM/dd"
): string {
  return format(new Date(date), pattern)
}

/**
 * React hook that returns a formatted date string.
 * Re-computes only when date or pattern changes.
 */
export function useFormattedDate(
  date: Date | number | string,
  pattern: string = "yyyy/MM/dd"
): string {
  return useMemo(() => formatDate(date, pattern), [date, pattern])
}
