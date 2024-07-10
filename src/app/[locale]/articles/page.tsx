'use client'
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ArticlesPage: React.FC = () => {
  const t = useTranslations("articles");

  interface MenuItem {
    label: string;
    link: string;
  }

  const menuItemsWindowHeader: MenuItem[] = [
    { label: t("powerSystems"), link: "/articles/powerSystems" },
    { label: t("multimedialist"), link: "/articles/multimedia" },
    { label: t("homeAutomation"), link: "/articles/homeAutomation" },
    { label: t("climateControl"), link: "/articles/climateControl" },
    { label: t("smartLighting"), link: "/articles/smartLighting" },
    { label: t("smartHomeProject"), link: "/articles/smartHomeProject" },

  ];

  return (
    <>
      <nav className="pt-20 flex flex-col gap-5 items-center">
        {menuItemsWindowHeader.map((item, index) => (
          <div
            key={index}
            className="relative px-6 py-3 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50 group-hover:opacity-75 transition-opacity duration-300 ease-in-out"></div>
            <div className="absolute inset-0 w-full h-full bg-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
            <Link
              rel="noopener noreferrer"
              href={item.link}
              className="relative z-10 text-xl font-bold text-white dark:text-gray-200 group-hover:text-yellow-300 transition-colors duration-300"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
      <style jsx>{`
        .bg-pattern {
          background-image: url('https://www.transparenttextures.com/patterns/dark-fish-skin.png');
        }
      `}</style>
    </>
  );
};

export default ArticlesPage;
