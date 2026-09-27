const productionSiteUrl = "https://african-sacred-sciences.com";

function resolveSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL?.trim();

  const value = configuredUrl || productionSiteUrl;
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(`SITE_URL must be an absolute HTTPS origin; received ${JSON.stringify(value)}.`);
  }

  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("SITE_URL must be an HTTPS origin without a path, query, fragment, or credentials.");
  }

  if (
    process.env.NODE_ENV === "production" &&
    (url.hostname === "localhost" ||
      url.hostname.endsWith(".localhost") ||
      url.hostname.endsWith(".example") ||
      url.hostname.endsWith(".test") ||
      url.hostname.endsWith(".invalid") ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "[::1]")
  ) {
    throw new Error("SITE_URL must use the final public domain; placeholder and local domains are not allowed in production.");
  }

  return url;
}

export const siteUrl = resolveSiteUrl();

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}
