import React from "react";
import { useTranslations } from "next-intl";



const PostsPage = () => {
    const t = useTranslations("header");

    return (
        <div className="text-center">
                <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <h1 className="text-3xl font-bold mb-4">{t("articles")}</h1>
                <p className="text-lg">{t("chooseLanguage")}</p>
      
            </div>
        </div>
    );
};

export default PostsPage;
