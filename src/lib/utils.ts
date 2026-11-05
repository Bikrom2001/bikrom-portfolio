type ClassValue = string | number | false | null | undefined;

/** Join conditional class names. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Strip protocol and trailing slash for display: https://www.wust.edu/ → wust.edu */
export function prettyUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
