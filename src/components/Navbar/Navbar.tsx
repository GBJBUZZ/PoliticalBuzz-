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
import { IoIosArrowDown } from "react-icons/io";
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
        <Link href={"/"}>
          {t2("lang") === "English" ? (
            <Image
              src={"/logo-english.svg"}
              alt="instagram"
              width={500}
              height={500}
              className="max-w-[200px] md:max-w-[300px]"
            />
          ) : (
            <Image
              src={"/logo-marathi.svg"}
              alt="instagram"
              width={500}
              height={500}
              className="max-w-[150px] md:max-w-[200px]"
            />
          )}
        </Link>
        <div className="flex lg:hidden items-center gap-2 text-black">
          <Link
            href={"https://linktr.ee/mla_narendra_bhondekar"}
            target="_blank"
            className=" p-2 border-2 border-[var(--primary-clr)] rounded-xl hover:bg-[var(--primary-clr)] hover:text-white"
          >
            {t3("socials")}
          </Link>
          <button
            className="lg:hidden z-10"
            onClick={() => {
              setShowMenu((x) => !x);
            }}
          >
            {showMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        <div
          className={`fixed flex justify-end lg:static bg-white top-0 left-0 right-0 bottom-0  transition-all duration-200 ${
            showMenu ? "translate-x-0 bg-opacity-40 backdrop-blur" : "translate-x-full bg-opacity-0 backdrop-blur-none"
          } lg:translate-x-0`}
        >
          <div
            className={`bg-white shadow-xl lg:shadow-none flex flex-col lg:flex-row lg:items-center lg:gap-6 w-fit lg:w-auto h-full lg:h-auto py-20 lg:py-0 lg:px-8 lg:px-0 items-start transition-all duration-200 overflow-y-scroll lg:overflow-y-visible divide-y-2 lg:divide-y-0 divide-white ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } lg:translate-x-0`}
          >
            {links.map((link, index) =>
              link.more.length > 0 ? (
                <>
                  <DropDown
                    name={link.name}
                    links={link.more}
                    setShowMenu={setShowMenu}
                  />
                </>
              ) : (
                <Link
                  key={index}
                  href={link.link}
                  className={`lg:hover:text-[var(--primary-clr)] p-4 lg:p-0 bg-[var(--primary-clr)] w-full lg:w-fit lg:bg-white text-white ${
                    link.link === pathname
                      ? "lg:text-[var(--primary-clr)]"
                      : "lg:text-black"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t(link.name)}
                </Link>
              )
            )}

            {/* <GoogleTranslate prefLangCookie={prefLangCookie} /> */}
            <div className="p-4 lg:hidden flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
              <Link
                href={"https://www.facebook.com/BhandaraShivSena/"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <TfiFacebook size={20} />
              </Link>
              <Link
                href={"https://x.com/NBhondekar61"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <RiTwitterXLine size={20} />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/@narendrabhondekar-jr5iv/featured"
                }
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/@narendrabhondekar-jr5iv/featured"
                }
                target="_blank"
                className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
            <LangSwitcher />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
          <Link
            href={"https://www.facebook.com/BhandaraShivSena/"}
            target="_blank"
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <TfiFacebook size={20} />
          </Link>
          <Link
            href={"https://x.com/NBhondekar61"}
            target="_blank"
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <RiTwitterXLine size={20} />
          </Link>
          <Link
            href={"https://www.instagram.com/narendra_bhondekar/"}
            target="_blank"
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href={"https://www.youtube.com/@narendrabhondekar-jr5iv/featured"}
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
