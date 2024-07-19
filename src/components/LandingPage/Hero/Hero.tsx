"use client";

import Link from "next/link";
import React from "react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("main.hero");

  return (
    <section className="min-h-[90dvh] grid grid-cols-2 px-8 md:px-20 py-10 gap-8 relative">
      <Image
        src={"/assets/LandingPage/hero-bg.png"}
        alt="hero background"
        height={1000}
        width={1000}
        className="absolute top-0 left-0 w-full h-full object-cover object-top grayscale brightness-50 z-[-1]"
      />
      <div className="py-20">
        <h1 className="text-white text-[2.5rem]">
          {t("quote")}
        </h1>
        <br />
        <br />
        <br />
        <Link
          href={"/biography"}
          className="px-6 py-4 rounded-xl bg-[var(--primary-clr)] text-xl font-[700] text-white relative group block w-fit"
        >
          {t("learn more")}
          <span className="absolute top-0 bottom-0 right-0 h-fit my-auto translate-x-1/2 group-hover:translate-x-2/3 transition-all duration-200">
            <FaArrowRight className="inline" size={30} />
          </span>
        </Link>
      </div>
      <div>
        <Image
          src={"/assets/LandingPage/hero.png"}
          alt="hero"
          height={1000}
          width={1000}
          className="max-h-[800px] w-full object-contain"
        />
      </div>
    </section>
  );
}
