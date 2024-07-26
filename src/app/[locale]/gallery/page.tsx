"use client";

import Header from "@/components/Header/Header";
import { fetchImages } from "@/utils/fetchImages";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Gallery() {
  const [hidden, setHidden] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = async () => {
      setLoading(true);
      const data = await fetchImages();
      // remove the first image from the list
      data.shift();
      setImages(data);
      setLoading(false);
    };

    images();
  }, []);

  const t = useTranslations("gallery");

  return (
    <main className="space-y-12">
      {" "}
      <Header
        title="gallery.title"
        image1="/assets/Banner/banner3.jpg"
        image2=""
      />
      <section className="px-8 md:px-40 py-20 space-y-8 pattern1 bg-[#f3f3f0]">
        <div className="text-center w-fit mx-auto">
          <p className="montserrat text-xs px-8">{t("sub-title")}</p>
          <h2 className="w-fit m-auto">{t("title")}</h2>{" "}
          <span className="flex w-full mt-2 gap-4 items-center">
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <FaStar size={20} className="text-[var(--primary-clr)]" />
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
          </span>
        </div>

        {loading ? (
          <div className="w-16 aspect-square rounded-full mx-auto border-8 border-[#b7b7b5] border-t-[var(--primary-clr)] animate-spin" />
        ) : (
          <div className="space-y-2 rounded-2xl overflow-hidden relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden w-full"
              >
                <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center h-full  bg-gray-400 z-[-1]">
                  <div className="w-8 aspect-square rounded-full mx-auto border-4 border-[#b7b7b5] border-t-[var(--primary-clr)] animate-spin" />
                </div>
                <Image
                  src={image}
                  alt="gallery"
                  width={500}
                  height={500}
                  onClick={() => {
                    setHidden(false);
                    setImage(image);
                  }}
                  loading="lazy"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </section>
      {!hidden && (
        <div className="fixed top-[-10%] left-0 right-0 bottom-0 bg-[#f37021] bg-opacity-50 backdrop-blur z-50 p-8 md:p-40">
          <button
            onClick={() => setHidden(true)}
            className="absolute top-8 right-4 text-white"
          >
            <IoCloseCircleOutline size={40} />
          </button>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={image as string}
              alt="gallery"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
