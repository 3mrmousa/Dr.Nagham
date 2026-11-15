export function toArabicDigits(value: string | number): string {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(value).replace(/\d/g, (digit) => arabicDigits[Number(digit)]);
}
