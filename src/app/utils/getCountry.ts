export function getCountry(location: string | null | undefined): string | null {
  if (!location) return null;
  const parts = location.split(",").map((part) => part.trim());
  return parts.length > 1 ? parts[parts.length - 1] : location;
}
