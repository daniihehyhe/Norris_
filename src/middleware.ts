import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const nextIntlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ["en", "ru", "kg", "kz"],

    // Used when no locale matches
    defaultLocale: "ru",
});

export default function intlMiddleware(req: NextRequest) {
    return nextIntlMiddleware(req);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(en|ru|kg|kz)/:path*"],
};
