"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TextCard from "./TextCard";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export default function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    rubberband: false,
    vertical: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [horizontalSliderRef, instanceRef2] = useKeenSlider<HTMLDivElement>({
    loop: false,
    rubberband: false,
    created() {
      setLoaded(true);
    },
  });

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
          Empowering the Youth: Narendra Bhounderkar&apos;s Vision for the Next
          Generation
        </h1>
        <br />
        <Link
          href={"/biography"}
          className="px-6 py-4 rounded-xl bg-[var(--primary-clr)] text-xl font-[700] text-white relative group block w-fit"
        >
          Learn More
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
