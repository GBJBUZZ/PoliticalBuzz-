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
    <section className="min-h-[90dvh] hero-pattern-bg grid grid-cols-1 lg:grid-cols-2 px-8 md:px-20 py-10 place-items-center gap-8 relative bg-[var(--primary-clr)]">
      <div className="space-y-8">
        <div
          ref={sliderRef}
          className="keen-slider text-slider max-h-[100dvh] lg:max-h-[50dvh]"
        >
          <TextCard
            heading1="The Future Of 'Bhandara-Pouni'"
            heading2="Development at any Cost"
            text="In a world of constant change, our professional discretion security services ensure your peace of mind. We prioritize excellence, providing nothing less than the best protection tailored to your unique needs. Trust in our unwavering commitment to safety and confidentiality."
          />
          <TextCard
            heading1="Constituency"
            heading2="Roads and Transportation"
            text="Bhondekar has prioritised the construction and maintenance of roads to improve connectivity between rural and urban areas. This includes the development of new roadways and the repair of existing ones to ensure safe and efficient transportation."
          />
          <TextCard
            heading1="Vision"
            heading2="Sustainable Development"
            text="Enhance agricultural productivity through modern farming techniques, better irrigation facilities, and support for organic farming."
          />
        </div>
        <Link
          href="/contact"
          className="btn px-6 py-3 bg-[#fff] block w-fit text-[var(--primary-clr)] rounded-xl"
        >
          <span>Read More</span>
        </Link>
        <div className="flex gap-2 w-1/2 md:w-1/5 items-center">
          <p className="text-white font-[600]">{currentSlide + 1}</p>
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={`border-2 border-white rounded-full min-w-[20px] transition-all duration-200 ${
                currentSlide + 1 === _ && "flex-1"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className=" w-full space-y-4">
        <div ref={horizontalSliderRef} className="keen-slider image-slider">
          <div className="keen-slider__slide aspect-video rounded-xl overflow-clip">
            <Image
              src={"/assets/LandingPage/hero1.png"}
              width={1000}
              height={1000}
              alt="hero1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="keen-slider__slide aspect-video rounded-xl overflow-clip">
            <Image
              src={"/assets/LandingPage/hero2.png"}
              width={500}
              height={500}
              alt="hero1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="keen-slider__slide aspect-video rounded-xl overflow-clip">
            <Image
              src={"/assets/LandingPage/hero3.png"}
              width={500}
              height={500}
              alt="hero1"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 lg:pl-40 z-20 relative">
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={(e: any) =>
                  e.stopPropagation() ||
                  instanceRef.current?.prev() ||
                  instanceRef2.current?.prev()
                }
                disabled={currentSlide === 0}
              >
                <FaArrowLeft
                  className={`text-white ${currentSlide === 0 && "opacity-60"}`}
                />
              </button>
              <button
                onClick={(e: any) =>
                  e.stopPropagation() ||
                  instanceRef.current?.next() ||
                  instanceRef2.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              >
                <FaArrowRight
                  className={`text-white ${
                    currentSlide ===
                      instanceRef.current.track.details.slides.length - 1 &&
                    "opacity-60"
                  }`}
                />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 left-1/5 h-full z-10 md:translate-x-[10%]">
        <Image
          src={"/assets/LandingPage/narendra-standee.png"}
          width={1000}
          height={1000}
          alt="hero1"
          className="object-contain h-full "
        />
      </div>
    </section>
  );
}
