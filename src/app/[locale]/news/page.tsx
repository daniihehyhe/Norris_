import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: { locale: string };
};

const NewsPage = ({ params: { locale } }: Props) => {
        unstable_setRequestLocale(locale);
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">News</h1>
                <p className="text-lg">
                    This is the news page. Stay updated with the latest news
                    here.
                </p>
            </div>
        </div>
    );
};

export default NewsPage;
