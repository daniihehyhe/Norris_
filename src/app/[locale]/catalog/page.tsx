// app/catalog/page.jsx
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: { locale: string };
};
export default function CatalogPage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Catalog</h1>
            <p>This is the catalog page.</p>
        </div>
    );
}
