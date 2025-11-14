"use client";

import { Link, usePathname } from "@/navigation";
import React, { useEffect } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import GoogleTranslate from "../Translate/GoogleTranslate";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";
import DropDown from "./DropDown";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const t2 = useTranslations();
  const t3 = useTranslations("footer");
  // const {  } = useRouter();
  const links = [
    {
      name: "home",
      link: "/",
      more: [],
    },
    {
      name: "about",
      link: "/about",
      more: [
        {
          name: "biography",
          link: "/biography",
        },
        {
          name: "political journey",
          link: "/political-journey",
        },
        {
          name: "government schemes",
          link: "/government-schemes",
        },
        {
          name: "development works",
          link: "/development-works",
        },
      ],
    },
    {
      name: "public services",
      link: "/vision",
      more: [
        {
          name: "sports",
          link: "/services/sports",
        },
        {
          name: "agriculture",
          link: "/services/agriculture",
        },
        {
          name: "employment",
          link: "/services/employment",
        },
        {
          name: "education",
          link: "/services/education",
        },
        {
          name: "healthcare",
          link: "/services/healthcare",
        },
      ],
    },
    {
      name: "media coverage",
      link: "/media-coverage",
      more: [
        {
          name: "news",
          link: "/media-and-coverage",
        },
        {
          name: "gallery",
          link: "/gallery",
        },
        {
          name: "assets",
          link: "https://drive.google.com/drive/folders/1YjdgIuAdYp7Yvsm9N_vk5X18oHqmivVR",
        },
      ],
    },
    {
      name: "contact",
      link: "/contact",
      more: [],
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  const prefLangCookie = encodeURIComponent("/en/mr");

  return (
    <header className="sticky top-0 z-40">
      <nav className="flex items-center justify-between bg-white py-2 px-4 md:px-16 shadow-lg">
        <Link href={"/"} className="flex items-center gap-3">
          {/* BJP Logo - Perfect Circle */}
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--primary-clr)] flex items-center justify-center overflow-hidden border-2 border-[var(--primary-clr)]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJP_Flag.svg/2560px-BJP_Flag.svg.png"
                alt="BJP Logo"
                className="w-10 h-10 md:w-14 md:h-14 object-contain scale-110"
              />
            </div>
          </div>
          
          {/* Name and Surname - Bilingual */}
          <div className="flex flex-col">
            {t2("lang") === "English" ? (
              <>
                <span className="text-lg md:text-xl font-bold text-[var(--primary-clr)]">
                  Vallabh
                </span>
                <span className="text-sm md:text-base font-semibold text-gray-800">
                  Jagtap
                </span>
                <span className="text-xs text-gray-600">
                  Bharatiya Janata Party
                </span>
              </>
            ) : (
              <>
                <span className="text-lg md:text-xl font-bold text-[var(--primary-clr)]">
                  वल्लभ
                </span>
                <span className="text-sm md:text-base font-semibold text-gray-800">
                  जगताप
                </span>
                <span className="text-xs text-gray-600">
                  भारतीय जनता पार्टी
                </span>
              </>
            )}
          </div>
        </Link>
        
        <div className="flex xl:hidden items-center gap-2 text-black">
          <Link
            href={"https://linktr.ee/vallabhjagtap"}
            target="_blank"
            className=" p-2 border-2 border-[var(--primary-clr)] rounded-xl hover:bg-[var(--primary-clr)] hover:text-white"
          >
            {t3("socials")}
          </Link>
          <button
            className="xl:hidden z-10"
            onClick={() => {
              setShowMenu((x) => !x);
            }}
          >
            {showMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        <div
          className={`fixed flex justify-end xl:static bg-white top-0 left-0 right-0 bottom-0  transition-all duration-200 ${
            showMenu
              ? "translate-x-0 bg-opacity-40 backdrop-blur"
              : "translate-x-full bg-opacity-0 backdrop-blur-none"
          } xl:translate-x-0`}
        >
          <div
            className={`bg-white shadow-xl xl:shadow-none flex flex-col xl:flex-row xl:items-center xl:gap-6 w-fit xl:w-auto h-full xl:h-auto py-20 xl:py-0 xl:px-8 xl:px-0 items-start transition-all duration-200 overflow-y-scroll xl:overflow-y-visible divide-y-2 xl:divide-y-0 divide-white ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } xl:translate-x-0`}
          >
            {links.map((link, index) =>
              link.more.length > 0 ? (
                <DropDown
                  key={index}
                  name={link.name}
                  links={link.more}
                  setShowMenu={setShowMenu}
                />
              ) : (
                <Link
                  key={index}
                  href={link.link}
                  className={`flex items-center gap-2 xl:hover:text-[var(--primary-clr)] p-4 xl:p-0 bg-[var(--primary-clr)] w-full xl:w-fit xl:bg-white text-white ${
                    link.link === pathname
                      ? "xl:text-[var(--primary-clr)]"
                      : "xl:text-black"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t(link.name)}
                  <FaArrowRight className="inline" />
                </Link>
              )
            )}

            {/* <GoogleTranslate prefLangCookie={prefLangCookie} /> */}
            <div className="p-4 xl:hidden flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
              <Link
                href={"https://www.facebook.com/vallabhjagtap"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <TfiFacebook size={20} />
              </Link>
              <Link
                href={"https://x.com/vallabhjagtap"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <RiTwitterXLine size={20} />
              </Link>
              <Link
                href={"https://www.instagram.com/vallabhjagtap"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={"https://www.youtube.com/@vallabhjagtap"}
                target="_blank"
                className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
            <LangSwitcher />
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
          <Link
            href={"https://www.facebook.com/vallabhjagtap"}
            target="_blank"
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <TfiFacebook size={20} />
          </Link>
          <Link
            href={"https://x.com/vallabhjagtap"}
            target="_blank"
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <RiTwitterXLine size={20} />
          </Link>
          <Link
            href={"https://www.instagram.com/vallabhjagtap"}
            target="_blank"
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href={"https://www.youtube.com/@vallabhjagtap"}
            target="_blank"
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <FaYoutube size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}