import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { LocalePrefix, Pathnames, } from "next-intl/routing";

export const locales = ["ru", "en", "kg", "kz"] as const;

export const localePrefix = (
    process.env.NEXT_PUBLIC_LOCALE_PREFIX === "never"
        ? "never"
        : {
              mode: "as-needed",
          } 
) satisfies LocalePrefix<typeof locales>;

export const pathnames = {
    "/": "/",
    "/services": "/services",
    "/about": "/about",
    "/portfolio": "/portfolio",
    "/articles": "/articles",
    "/news": "/news",
    "/contacts": "/contacts",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames,
    });