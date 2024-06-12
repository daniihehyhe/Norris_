import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: { locale: string };
};


const ArticlesPage = ({ params: { locale } }: Props) => {
    unstable_setRequestLocale(locale);
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Articles</h1>
                <p className="text-lg">
                    This is the articles page. Read our latest articles and
                    insights here.
                </p>
            </div>
        </div>
    );
};

export default ArticlesPage;
