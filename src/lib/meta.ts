/**
 * The site's design-language rule for metadata: short facts are separated by a
 * middle dot ("Brisbane · AU", "React · TypeScript · Capacitor"), never commas.
 * Store metadata as lists and join it here so nothing can drift.
 */
export const meta = (parts: ReadonlyArray<string | number>): string => parts.join(' · ');
