import { useTranslations } from "next-intl";
import React from "react";

export default function More() {
  const t = useTranslations("biography");

  return (
    <section className="px-8 xl:px-40 py-20 space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2 md:order-1">
          <p className="font-[600] text-black">{t("section1.title")}</p>
          <p>{t("section1.para")}</p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 md:order-2 relative">
          <img
            src="https://picsum.photos/600/400?random=32"
            alt="Vallabh Jagtap Political Career"
            className="rounded-xl object-cover object-center h-full w-full"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1165/1165800.png"
            width={200}
            height={200}
            alt="Decoration Pattern"
            className="absolute top-full left-full -translate-y-1/2 -translate-x-1/2 w-20 opacity-50"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2">
          <p className="font-[600] text-black">{t("section2.title")}</p>
          <p>{t("section2.para")}</p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 relative">
          <img
            src="https://picsum.photos/600/400?random=33"
            alt="Vallabh Jagtap Public Service"
            className="rounded-xl object-cover object-center h-full w-full"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1165/1165800.png"
            width={200}
            height={200}
            alt="Decoration Pattern"
            className="absolute top-full left-0 -translate-y-1/2 -translate-x-1/2 z-[-1] w-20 opacity-50"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2 md:order-1">
          <p className="font-[600] text-black">{t("section3.title")}</p>
          <p>{t("section3.para")}</p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 md:order-2 relative">
          <img
            src="https://picsum.photos/600/400?random=34"
            alt="Vallabh Jagtap Legacy and Impact"
            className="rounded-xl object-cover object-center h-full w-full"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1165/1165800.png"
            width={200}
            height={200}
            alt="Decoration Pattern"
            className="absolute top-full left-full -translate-y-2/3 -translate-x-2/3 z-[-1] w-20 opacity-50"
          />
        </div>
      </div>
    </section>
  );
}