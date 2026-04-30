import { format, formatDistanceToNow } from "date-fns";

// ============================================
// Number Formatting
// ============================================

export function formatNumber(num: number, locale: string = "en-US"): string {
  return num.toLocaleString(locale);
}

export function formatPrice(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

// ============================================
// Date Formatting
// ============================================

export function formatDate(date: Date | number): string {
  return format(date, "MMMM d, yyyy");
}

export function formatDateTime(date: Date | number): string {
  return format(date, "MMMM d, yyyy 'at' HH:mm");
}

export function formatDateShort(date: Date | number): string {
  return format(date, "yyyy/MM/dd");
}

export function formatRelativeTime(date: Date | number): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

// ============================================
// Phone Number (E.164-ish, US-friendly default)
// ============================================

const US_PHONE_REGEX = /^(\+?1)?\d{10}$/;

export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().]/g, "");
  return US_PHONE_REGEX.test(cleaned);
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-().+]/g, "");
  const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);
  if (!match) return phone;
  return `(${match[1]}) ${match[2]}-${match[3]}`;
}

// ============================================
// Credit Card Number (Luhn check)
// ============================================

export function validateCreditCard(card: string): boolean {
  const cleaned = card.replace(/[\s-]/g, "");
  if (!/^\d{13,19}$/.test(cleaned)) return false;

  let sum = 0;
  let alt = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    if (alt) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    alt = !alt;
  }
  return sum % 10 === 0;
}

export function formatCreditCard(card: string): string {
  const cleaned = card.replace(/[\s-]/g, "");
  const groups = cleaned.match(/.{1,4}/g);
  if (!groups) return card;
  return groups.join(" ");
}
