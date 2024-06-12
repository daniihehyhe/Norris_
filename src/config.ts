import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "ru", "kg", "kz"] as const;

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/pathnames": {
        en: "/service",
        ru: "/service",
        kg: "/service",
        kz: "/service",
    },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
