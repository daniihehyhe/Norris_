import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "next-intl/navigation";
import Pathname from "./Pathname";

const PostsPage = () => {
    const t = useTranslations();

    return (
        <div className="text-center">
                <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <h1 className="text-3xl font-bold mb-4">{t("articles")}</h1>
                <p className="text-lg">{t("contactModal_emailLabel")}</p>
                <Link href="/articles">
                    <a className="text-blue-500 hover:underline">
                        {t("system")}
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default PostsPage;
