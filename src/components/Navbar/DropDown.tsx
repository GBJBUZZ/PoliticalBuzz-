import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function DropDown({
  name,
  links,
  setShowMenu,
}: {
  name: string;
  links: { name: string; link: string }[];
  setShowMenu: (x: boolean) => void;
}) {
  const [hide, setHide] = useState(true);
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <button
      className="text-[var(--primary-txt)] relative z-40 group lg:hover:text-[var(--primary-clr)] text-left w-full lg:w-auto"
      onClick={() => setHide((x) => !x)}
    >
      <span className="p-4 lg:p-0 bg-[var(--primary-clr)] text-white lg:text-black lg:bg-white block lg:inline-block">
        {t(name)}
        <IoIosArrowDown size={20} className="inline" />
      </span>
      <span
        className={`shadow-custom dropdown md:absolute top-full left-0 min-w-full w-fit bg-white px-6 lg:py-4 overflow-hidden lg:overflow-auto rounded-lg z-50 block md:hidden group-hover:block space-y-2 text-left max-h-0 lg:max-h-fit ${
          hide ? "max-h-[40dvh] py-4" : "max-h-0"
        } transition-all duration-700`}
      >
        {links.map((link, index) => {
          return (
            <Link
              key={index + 100}
              href={link.link}
              className={`block hover:text-[var(--primary-clr)] text-nowrap font-[500] ${
                link.link === pathname
                  ? "text-[var(--primary-clr)]"
                  : "text-[#070707]"
              }`}
              onClick={() => {
                setHide(false);
                setShowMenu(false);
              }}
            >
              {t(link.name)}
            </Link>
          );
        })}
      </span>
    </button>
  );
}
