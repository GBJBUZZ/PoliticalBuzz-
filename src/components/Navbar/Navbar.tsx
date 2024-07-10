"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import GoogleTranslate from "../Translate/GoogleTranslate";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      link: "/",
      more: [],
    },
    {
      name: "About",
      link: "/about",
      more: [
        {
          name: "Biography",
          link: "/biography",
        },
        {
          name: "Political Journey",
          link: "/political-journey",
        },
      ],
    },
    {
      name: "Public Services",
      link: "/vision",
      more: [
        {
          name: "Sports",
          link: "/services/sports",
        },
        {
          name: "Agriculture",
          link: "/services/agriculture",
        },
        {
          name: "Employment",
          link: "/services/employment",
        },
        {
          name: "Education",
          link: "/services/education",
        },
        {
          name: "Healthcare",
          link: "/services/healthcare",
        },
      ],
    },
    {
      name: "Media Coverage",
      link: "/media-coverage",
      more: [
        {
          name: "News",
          link: "/media-and-coverage",
        },
        {
          name: "Gallery",
          link: "/gallery",
        },
      ],
    },
    {
      name: "Contact",
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
    <header className="sticky top-0 z-50">
      <nav className="flex items-center justify-between bg-white py-2 px-4 md:px-16 shadow-lg">
        <Image
          src={"/logo.svg"}
          alt="instagram"
          width={500}
          height={500}
          className="max-w-[150px] md:max-w-[200px]"
        />
        <button
          className="md:hidden z-10"
          onClick={() => {
            setShowMenu((x) => !x);
          }}
        >
          {showMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
        <div
          className={`flex flex-col md:flex-row md:items-center gap-6 fixed md:static bg-white top-0 right-0 w-3/4 md:w-auto h-full md:h-auto py-20 md:py-0 px-8 md:px-0 items-start transition-all duration-200 overflow-y-scroll md:overflow-y-visible ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          {links.map((link, index) =>
            link.more.length > 0 ? (
              <button className="text-[var(--primary-txt)] relative z-50 group hover:text-[var(--primary-clr)] text-left">
                {link.name}
                <IoIosArrowDown size={20} className="inline" />
                <span className="shadow-custom dropdown md:absolute top-full left-0 min-w-full w-fit bg-white p-4 rounded-lg z-50 block md:hidden group-hover:block space-y-2 text-left">
                  {link.more.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link.link}
                        className={`block hover:text-[var(--primary-clr)] text-nowrap ${
                          link.link === pathname
                            ? "text-[var(--primary-clr)]"
                            : "text-[#070707]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </span>
              </button>
            ) : (
              <Link
                key={index}
                href={link.link}
                className={`hover:text-[var(--primary-clr)] ${
                  link.link === pathname
                    ? "text-[var(--primary-clr)]"
                    : "text-[#070707]"
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <GoogleTranslate prefLangCookie={prefLangCookie} />
          <div className="md:hidden flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
            <Link href={""} className="bg-[#F4F4F4] p-3 rounded-lg">
              <TfiFacebook size={20} />
            </Link>
            <Link href={""} className="bg-[#F4F4F4] p-3 rounded-lg">
              <RiTwitterXLine size={20} />
            </Link>
            <Link href={""} className="bg-[#F4F4F4] p-3 rounded-lg">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
          <Link href={""} className="bg-[#F4F4F4] p-3 rounded-lg">
            <TfiFacebook size={20} />
          </Link>
          <Link href={""} className="bg-[#F4F4F4] p-3 rounded-lg">
            <RiTwitterXLine size={20} />
          </Link>
          <Link href={""} className="bg-[#F4F4F4] p-3 rounded-lg">
            <FaInstagram size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
