"use client";

import { Link } from "@/navigation";
import React from "react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import SubscribeCard from "@/components/SubscribeCard/SubscribeCard";

export default function Hero() {
  const t = useTranslations("main.hero");

  return (
    <section className="md:min-h-[90dvh] grid grid-cols-1 md:grid-cols-2 px-8 md:px-40 py-10 pb-40 md:pb-20 mb-16 md:mb-0 gap-8 relative">
      <Image
        data-aos="fade-in"
        src={"/assets/LandingPage/hero-bg.png"}
        alt="hero background"
        height={1000}
        width={1000}
        className="absolute top-0 left-0 w-full h-full object-cover object-top grayscale brightness-50 z-[-1]"
      />
      <div className="md:py-20 space-y-12">
        <h1
          className="text-white text-[1.5rem] md:text-[2.5rem]"
          data-aos="fade-right"
        >
          {t("quote")}
        </h1>
        <p
          className="text-white relative z-10"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {t("para")}
        </p>
        <br />
        <Link
          data-aos="fade-right"
          data-aos-delay="200"
          href={"/biography"}
          className="px-6 py-4 rounded-xl bg-[var(--primary-clr)] text-xl font-[700] text-white group block w-fit relative"
        >
          {t("learn more")}{" "}
          <span className="">
            <FaArrowRight className="inline" size={24} />
          </span>
          <Image
            src={"/assets/LandingPage/hero.png"}
            alt="hero"
            height={1000}
            width={1000}
            className="h-[350px] object-cover absolute top-0 bottom-0 my-auto right-[-70%] z-[-1] block md:hidden"
          />
        </Link>
      </div>
      <div data-aos="fade-up" className="hidden md:block">
        <Image
          src={"/assets/LandingPage/hero.png"}
          alt="hero"
          height={1000}
          width={1000}
          className="max-h-[800px] w-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-fit mx-auto md:mx-0 md:ml-40 translate-y-1/2 md:translate-y-[10%]">
        <SubscribeCard />
      </div>
    </section>
  );
}
