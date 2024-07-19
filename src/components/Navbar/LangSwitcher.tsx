"use client";

import { usePathname, useRouter } from "@/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "use-intl";

export default function LangSwitcher() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang: string) => {
    router.push(pathname, { locale: lang });
  };

  return (
    <>
      <button
        key={10002320}
        className="text-[var(--primary-txt)] hover:text-[var(--primary-clr)] relative z-50 group text-left hidden md:block"
      >
        {t("lang")}
        <IoIosArrowDown size={20} className="inline" />
        <span className="shadow-custom dropdown md:absolute top-full left-0 min-w-full w-fit bg-white p-4 rounded-lg z-50 block md:hidden group-hover:block space-y-2 text-left">
          <span
            key={2003 + 100}
            className="text-[var(--primary-txt)] hover:text-[var(--primary-clr)] block"
            onClick={() => changeLang("en")}
          >
            {t("nav.english")}
          </span>
          <span
            key={2003 + 110}
            className="text-[var(--primary-txt)] hover:text-[var(--primary-clr)] block"
            onClick={() => changeLang("mr")}
          >
            {t("nav.marathi")}
          </span>
        </span>
      </button>
      <form className="block md:hidden">
        <label htmlFor="" className="block">
          <input
            type="radio"
            name="lang"
            id=""
            onChange={() => {
              changeLang("en");
            }}
            checked={t("lang") === "English"}
          />{" "}
          <span>English</span>
        </label>
        <label htmlFor="" className="block">
          <input
            type="radio"
            name="lang"
            id=""
            onChange={() => {
              changeLang("mr");
            }}
            checked={t("lang") === "मराठी"}
          />{" "}
          <span>Marathi</span>
        </label>
      </form>
    </>
  );
}
