"use client";

import { usePathname, useRouter } from "@/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "next-intl";

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
        className="text-[var(--primary-txt)] hover:text-[var(--primary-clr)] relative z-50 group text-left hidden xl:block"
      >
        {t("lang")}
        <IoIosArrowDown size={20} className="inline" />
        <span className="shadow-custom dropdown md:absolute top-full left-0 min-w-full w-fit bg-white p-4 rounded-lg z-50 block md:hidden group-hover:block space-y-2 text-left">
          <span
            key={2003 + 100}
            className="text-[var(--primary-txt)] hover:text-[var(--primary-clr)] block cursor-pointer"
            onClick={() => changeLang("en")}
          >
            {t("nav.english")}
          </span>
          <span
            key={2003 + 110}
            className="text-[var(--primary-txt)] hover:text-[var(--primary-clr)] block cursor-pointer"
            onClick={() => changeLang("mr")}
          >
            {t("nav.marathi")}
          </span>
        </span>
      </button>
      <form className="p-4 block xl:hidden">
        <div className="flex gap-2 items-center">
          <p className="text-sm">{t("nav.english")}</p>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              id="switch"
              type="checkbox"
              checked={t("lang") === "मराठी"}
              onChange={() => {
                if (t("lang") === "English") {
                  changeLang("mr");
                } else {
                  changeLang("en");
                }
              }}
              className="peer sr-only"
            />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-slate-300 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[var(--primary-clr)] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
          <p className="text-sm">{t("nav.marathi")}</p>
        </div>
      </form>
    </>
  );
}