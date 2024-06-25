"use client";

import React from "react";
import MainInfo from "./components/MainInfo";
import SocialLinkContact from "./components/SocialLinkContact";
import LinkPage from "@/components/LinkPage";


const ContactsPage = () => {
    return (
       <>
       <MainInfo/>
       <SocialLinkContact/>
       <LinkPage/>
       </>
    );
};

export default ContactsPage;
