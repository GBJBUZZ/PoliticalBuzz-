import { useTranslations } from "next-intl";
import React from "react";

export default function Biography() {
  const t = useTranslations("biography");

  return (
    <>
      <section className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <img
          src="https://picsum.photos/1200/800?random=30"
          alt="Vallabh Jagtap Biography background"
          className="absolute top-0 left-0 w-full h-full z-[-1] object-cover brightness-[0.3]"
        />

        <div className="px-8 md:px-20 py-10 md:py-20 space-y-4 place-content-center text-center md:text-left">
          <h2 className="text-[var(--primary-clr)]">{t("title")}</h2>
          <h1 className="text-white">{t("name")}</h1>
        </div>
        <div className="">
          <img
            src="https://picsum.photos/600/800?random=31"
            alt="Vallabh Jagtap Profile Image"
            className="max-w-full md:max-w-[400px] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <div className="block md:hidden">
        <img
          src="https://picsum.photos/600/800?random=31"
          alt="Vallabh Jagtap Profile Image"
          className="max-w-full md:max-w-[400px] mx-auto rounded-lg shadow-lg"
        />
      </div>
    </>
  );
}