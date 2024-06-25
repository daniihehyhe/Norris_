import createMiddleware from "next-intl/middleware";
import { localePrefix, defaultLocale, locales, pathnames } from "./src/config";

export default createMiddleware({
    defaultLocale,
    locales,
    localePrefix,
    pathnames,
});

export const config = {
    matcher: [
        // Enable a redirect to a matching locale at the root
        "/",

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        "/(en|ru|kg|kz)/:path*",

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        "/((?!api|_vercel|.*\\..*).*)",
    ],
};
