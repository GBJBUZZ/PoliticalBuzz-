"use client";

import Link from "next/link";
import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import GoogleTranslate from "../Translate/GoogleTranslate";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Vision",
      link: "/vision",
    },
    {
      name: "Development Services",
      link: "/services",
    },
    {
      name: "Media Coverage",
      link: "/media-coverage",
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);

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
          className={`flex flex-col md:flex-row md:items-center gap-6 fixed md:static bg-white top-0 right-0 w-3/4 md:w-auto h-full md:h-auto py-20 md:py-0 px-8 md:px-0 items-start transition-all duration-200 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`hover:text-[var(--primary-clr)] ${
                link.link === "/" ? "text-[var(--primary-clr)]" : "text-[#070707]"
              }`}
            >
              {link.name}
            </Link>
          ))}

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
