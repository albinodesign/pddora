/**
 * Sicherheitsnetz für CMS-Updates:
 * Manche CMS-Write-Backs schreiben Arrays fälschlich als Index-Objekte
 * ({ "0": ..., "3": ... }). Diese Funktion wandelt solche Objekte
 * rekursiv wieder in Arrays um, damit der Build nicht bricht.
 */
export function normalizeContent<T>(value: unknown): T {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeContent(item)) as T;
  }
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length > 0 && entries.every(([key]) => /^\d+$/.test(key))) {
      return entries
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([, item]) => normalizeContent(item)) as T;
    }
    return Object.fromEntries(
      entries.map(([key, item]) => [key, normalizeContent(item)])
    ) as T;
  }
  return value as T;
}
