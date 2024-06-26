import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: { locale: string };
};
const GalleryPage = ({ params: { locale } }: Props) => {
      unstable_setRequestLocale(locale);
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Gallery</h1>
                <p className="text-lg">
                    This is the gallery page. Explore our collection of images
                    and photos here.
                </p>
            </div>
        </div>
    );
};

export default GalleryPage;
