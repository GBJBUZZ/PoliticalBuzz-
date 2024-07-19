import { useTranslations } from "next-intl";
import React from "react";

export default function Header({ title }: { title: string }) {

  const t = useTranslations();

  return (
    <div className="py-20 px-8 bg-[var(--primary-clr)] relative">
      <h1 className="text-3xl text-center text-white">{t(title)}</h1>
      <div className="absolute bottom-[-10%] right-[20%] h-20 aspect-square rounded-full bg-white bg-opacity-20"></div>
      <div className="absolute bottom-0 left-0 h-40 translate-x-[-30%] translate-y-[30%] aspect-square rounded-full bg-white bg-opacity-20 "></div>
      <div className="absolute bottom-0 left-0 h-20 translate-x-[70%] translate-y-[-70%] aspect-square rounded-full bg-white bg-opacity-20 "></div>
    </div>
  );
}
