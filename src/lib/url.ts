// Prefix an internal path with the site's base ("/website"), so links work on
// GitHub Pages and keep working if the base changes. url("/#team") -> "/website/#team"
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path: string) => `${base}${path.startsWith("/") ? path : `/${path}`}`;
