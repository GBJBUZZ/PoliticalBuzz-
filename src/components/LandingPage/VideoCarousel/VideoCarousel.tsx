"use client";
import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function VideoCarousel() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5, origin: "center" },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10, origin: "center" },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: { perView: 1, origin: "center" },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const arr = [
    <iframe
      key={2001}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2002}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2003}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2004}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2005}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2006}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2007}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2008}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2009}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
  ];

  
  return (
    <div className="px-8 xl:px-40 py-20 relative bg-black mb-8 pattern3">
      <h2 className="text-white text-center">{t("quote1")}</h2>
      <br />
      <div className="navigation-wrapper relative">
        <div ref={ref} className="keen-slider">
          {arr.map((item, index) => {
            return (
              <div
                key={index + 100}
                className={`keen-slider__slide number-slide6 aspect-video overflow-hidden ${
                  currentSlide === index ? "" : ""
                } `}
              >
                <div
                  className={`w-full h-full rounded-xl transition-all duration-300 overflow-hidden ${
                    index === (currentSlide - 1 < 0 ? 8 : currentSlide - 1)
                      ? "rotate-left"
                      : ""
                  } ${index === (currentSlide + 1) % 9 ? "rotate-right" : ""}`}
                >
                  {item}
                </div>
              </div>
            );
          })}
          {loaded && instanceRef.current && (
            <>
              <FaChevronLeft
                size={40}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="absolute top-0 bottom-0 left-0 h-fit my-auto cursor-pointer text-white"
              />

              <FaChevronRight
                size={40}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="absolute top-0 bottom-0 right-0 h-fit my-auto cursor-pointer text-white"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
