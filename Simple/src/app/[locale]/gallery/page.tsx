"use client";

import Header from "@/components/Header/Header";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Gallery() {
  const [hidden, setHidden] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Using Picsum photos for gallery images
  const galleryImages = [
    "https://picsum.photos/500/500?random=110",
    "https://picsum.photos/500/500?random=111",
    "https://picsum.photos/500/500?random=112",
    "https://picsum.photos/500/500?random=113",
    "https://picsum.photos/500/500?random=114",
    "https://picsum.photos/500/500?random=115",
    "https://picsum.photos/500/500?random=116",
    "https://picsum.photos/500/500?random=117",
    "https://picsum.photos/500/500?random=118",
    "https://picsum.photos/500/500?random=119",
    "https://picsum.photos/500/500?random=120",
    "https://picsum.photos/500/500?random=121"
  ];

  const t = useTranslations("gallery");

  return (
    <main className="space-y-12">
      <Header
        title="gallery.title"
        image1="https://picsum.photos/1200/600?random=109"
        image2=""
      />
      <section className="px-8 xl:px-40 py-20 space-y-8 pattern1 bg-[#f3f3f0]">
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

        <div className="space-y-2 rounded-2xl overflow-hidden relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden w-full group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Vallabh Jagtap Gallery Image ${index + 1}`}
                onClick={() => {
                  setHidden(false);
                  setSelectedImage(image);
                }}
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000a0] flex items-end">
                <Link
                  href={image}
                  target="_blank"
                  className="m-2 block w-fit mx-auto py-1 px-4 border-2 border-[var(--primary-clr)] rounded-full text-white text-sm font-[700] hover:bg-[var(--primary-clr)]"
                  download
                >
                  Download
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {!hidden && selectedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 backdrop-blur z-50 p-8 md:p-20 flex items-center justify-center">
          <button
            onClick={() => setHidden(true)}
            className="absolute top-8 right-8 text-white hover:text-[var(--primary-clr)] transition-colors duration-200"
          >
            <IoCloseCircleOutline size={40} />
          </button>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Vallabh Jagtap Gallery Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}