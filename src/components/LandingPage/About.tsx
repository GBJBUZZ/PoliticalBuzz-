import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function About() {
  const t = useTranslations("main.about");
  return (
    <section className="px-8 md:px-40 py-20 space-y-8 text-justify">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <div data-aos="fade-in">
          <div className="pt-6 md:pb-20 md:px-8 relative">
            <Image
              src={"/assets/LandingPage/narendra-profile.png"}
              alt="Narendra Profile"
              width={500}
              height={500}
              className="rounded-t-xl rounded-b-0 md:rounded-b-xl border-8 border-[var(--primary-clr)]"
            />
            <div className="p-4 bg-[var(--primary-clr)] w-fit md:max-w-[60%] md:absolute bottom-0 left-0  rounded-t-0 md:rounded-t-xl rounded-b-xl">
              <ImQuotesLeft size={28} className="text-black" />
              <div className="pl-8">
                <p className="font-[600] text-white italic">{t("mission")}</p>
                <p className="font-[700] montserrat text-right text-black">
                  {t("name")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8"  data-aos="fade-left">
          <h2>{t("title")}</h2>
          <div className="space-y-4">
            <p>{t("para1")}</p>
            <p>
              <span className="font-[600] text-black">{t("sub-title")}</span>
              <br />
              {t("para2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
