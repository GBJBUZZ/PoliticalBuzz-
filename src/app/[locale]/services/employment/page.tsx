import Header from "@/components/Header/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Page() {
  const t = useTranslations("services.employment");
  return (
    <main className="space-y-8">
      {" "}
      <Header title={"services.employment.title"} />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 md:px-20 py-20 text-justify">
        <div className="lg:col-span-2 space-y-4">
          <p>{t("para1")}</p>
          <p>{t("para2")}</p>
          <p>{t("para3")}</p>
          <p>{t("para4")}</p>
          <p>{t("para5")}</p>
        </div>
        <div className="space-y-2">
          <Image
            src={"/assets/Employment/employment1.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/Employment/employment2.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
        </div>
      </section>
    </main>
  );
}
