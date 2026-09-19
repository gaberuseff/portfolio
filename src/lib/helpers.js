/**
 * Generates a clean URL-friendly slug from a string.
 * @param {string} text - The input string (e.g. project title)
 * @returns {string} The slugified string
 */
export function generateSlug(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const generatedSlug = generateSlug;

/**
 * Formats a numeric amount with the specified currency code.
 * @param {number|string} amount - The numeric amount
 * @param {string} currency - The 3-letter currency code (e.g. "USD", "EGP", "SAR", "AED")
 * @param {string} locale - The locale for number formatting (default: "en-US")
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = "USD", locale = "en-US") {
  if (
    amount === null ||
    amount === undefined ||
    amount === "" ||
    isNaN(Number(amount))
  ) {
    return "";
  }
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(amount));
  } catch {
    return `${Number(amount).toFixed(2)} ${currency}`;
  }
}

export const formateCurruncy = formatCurrency;

/**
 * Formats a date string, timestamp, or Date object into a readable date.
 * @param {string|Date|number} date - The date input
 * @param {Intl.DateTimeFormatOptions} options - Formatting options
 * @param {string} locale - Locale for date formatting (default: "en-US")
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}, locale = "en-US") {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";

  const defaultOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(d);
}

export const formateDate = formatDate;
