import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import PageInProgress from "@/components/PageInProgress";
import LinkPage from "@/components/LinkPage";

type Props = {
    params: { locale: string };
};

const NewsPage = ({ params: { locale } }: Props) => {
        unstable_setRequestLocale(locale);
    return (
       <>
       <PageInProgress/>
       <LinkPage/>
       </>
    );
};

export default NewsPage;
