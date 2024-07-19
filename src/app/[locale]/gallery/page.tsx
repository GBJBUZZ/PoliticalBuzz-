"use client";

import Header from "@/components/Header/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Gallery() {
  const [hidden, setHidden] = useState(true);
  const [image, setImage] = useState<string | null>(null);

  const t = useTranslations("gallery");

  return (
    <main className="space-y-12">
      {" "}
      <Header title="Gallery" />
      <section className="px-8 md:px-20 py-20 space-y-8 pattern1 bg-[#f3f3f0]">
        <div className="text-center w-fit mx-auto">
          <p className="rufina text-xs px-8">{t("sub-title")}</p>
          <h2 className="w-fit m-auto">{t("title")}</h2>{" "}
          <span className="flex w-full mt-2 gap-4 items-center">
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <FaStar size={20} className="text-[var(--primary-clr)]" />
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
          </span>
        </div>

        <div className="space-y-2 rounded-2xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row gap-2">
            <Image
              src={"/assets/gallery/img3.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img3.png");
              }}
            />
            <Image
              src={"/assets/gallery/img1.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img1.png");
              }}
            />
            <Image
              src={"/assets/gallery/img4.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img4.png");
              }}
            />
            <Image
              src={"/assets/gallery/img2.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img2.png");
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Image
              src={"/assets/gallery/img5.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 object-cover max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img5.png");
              }}
            />
            <Image
              src={"/assets/gallery/img6.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 object-cover  max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img6.png");
              }}
            />
            <Image
              src={"/assets/gallery/img7.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 object-cover  max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img7.png");
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            {" "}
            <Image
              src={"/assets/gallery/img8.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 object-cover max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img8.png");
              }}
            />
            <Image
              src={"/assets/gallery/img9.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 object-cover  max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img9.png");
              }}
            />
            <Image
              src={"/assets/gallery/img10.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 object-cover  max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img10.png");
              }}
            />
            <Image
              src={"/assets/gallery/img11.png"}
              alt="Gallery"
              width={500}
              height={500}
              className="flex-1 object-cover  max-h-[300px]"
              onClick={() => {
                setHidden(false);
                setImage("/assets/gallery/img11.png");
              }}
            />
          </div>

          {!hidden && (
            <div className="fixed md:absolute top-0 left-0 w-full h-full bg-[#f3702180] px-8 md:px-20 py-20 flex items-center justify-center z-50 md:z-auto">
              <button
                className="absolute m-4 top-0 right-0"
                onClick={() => {
                  setHidden(true);
                  setImage(null);
                }}
              >
                <IoCloseCircleOutline size={40} className="text-white" />
              </button>
              {image && (
                <Image
                  src={image}
                  alt="Gallery"
                  width={1000}
                  height={1000}
                  className="max-h-[90%] mx-auto border-4 border-white"
                />
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
