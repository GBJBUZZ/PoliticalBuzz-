import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Header({ title }: { title: string }) {
  const t = useTranslations();

  return (
    <div className="py-20 md:py-60 px-8 relative">
      {" "}
      <Image
        src={"/assets/banner1.jpg"}
        alt="background"
        width={1080}
        height={1000}
        className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.4] z-[-1]"
      />
      <h1 className=" text-center text-white">{t(title)}</h1>
    </div>
  );
}
