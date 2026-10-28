// Shared field styles for the hero booking card and the contact form
export const field = "grid gap-1.5";
export const label = "text-sm font-semibold";
export const input =
  "w-full rounded-[10px] border border-line bg-white px-3.5 py-[13px] text-base/[1.4] text-ink transition focus:border-blue focus:shadow-[0_0_0_4px_var(--color-blue-tint)] focus:outline-none";
export const honeypot = "absolute -left-[9999px]";

// The message under the submit button: quiet at first, highlighted once sent
export function noteClass(sent) {
  if (sent) {
    return "rounded-[10px] bg-blue-tint px-3.5 py-3 text-sm text-navy";
  }
  return "text-[13px] text-soft";
}
