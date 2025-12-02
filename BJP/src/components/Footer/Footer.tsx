"use client";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { useTranslations } from "use-intl";

export default function Footer() {
  const t1 = useTranslations("nav");
  const t2 = useTranslations("footer");
  const t3 = useTranslations();
  
  // --- START: Madhuritai Mandakar Name Logic (same as navbar) ---
  const nameTranslations = {
    english: "Madhuratai",
    marathi: "मधुराताई", 
  };
  const surnameTranslations = {
    english: "Madankar",
    marathi: "मदनकर", 
  };

  const currentLang = t3("lang");
  const displayName = currentLang === "English" ? nameTranslations.english : nameTranslations.marathi;
  const displaySurname = currentLang === "English" ? surnameTranslations.english : surnameTranslations.marathi;
  // --- END: Madhuritai Mandakar Name Logic ---

  return (
    <section 
        // 1. Image path used: footer4.jpg
        className="relative mt-20 bg-cover bg-center bg-no-repeat bg-[url('/assets/madhuritai/footer4.jpg')]" 
    >
      {/* 2. Overlay opacity set to 60% */}
      <div className="px-8 xl:px-40 py-10 md:py-20 bg-white bg-opacity-60">
        
        {/* Social Icons Section (Remains unchanged in layout) */}
        <div className="bg-white rounded-xl w-fit mx-auto shadow-custom overflow-hidden absolute top-0 left-0 right-0 translate-y-[-50%]">
          <div className="py-4 bg-[var(--primary-clr)] text-center ">
            <h2 className="text-white">{t2("socials")}</h2>
          </div>
          <div className="px-8 md:px-40 py-10 flex items-center justify-center gap-4 md:gap-8">
            <Link
              href={"https://www.facebook.com/madhura.madankar.50/"}
              target="_blank"
              className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
            >
              <TfiFacebook className="text-black text-2xl md:text-6xl" />
            </Link>{" "}
            <Link
              href={"https://x.com/MadhuraMadankar?s=20"}
              target="_blank"
              className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
            >
              <RiTwitterXLine className="text-black text-2xl md:text-6xl" />
            </Link>
            <Link
              href={"https://www.instagram.com/madhura_madankar/"}
              target="_blank"
              className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
            >
              <FaInstagram className="text-black text-2xl md:text-6xl" />
            </Link>
            <Link
              href={"https://www.youtube.com/@MadhuraMadankar"}
              target="_blank"
              className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
            >
              <FaYoutube className="text-black text-2xl md:text-6xl" />
            </Link>
          </div>
        </div>
        
        {/* Footer Content - Refined Layout */}
        {/* Adjusted py-20 to pt-32 pb-20 to account for the social bar translate */}
        <footer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-20 text-black"> 
          
          {/* Column 1: Logo and Introduction */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/bjplotuslogo.svg" 
                alt="BJP Logo"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
              <h1 className="text-xl font-[700] uppercase leading-tight text-black"> 
                {displayName} 
                <br />
                <span className="text-black">
                  {displaySurname}
                </span>
              </h1>
            </Link>
            <p className="pt-4 text-base leading-relaxed">{t2("text")}</p>
          </div>

          {/* Column 2: Explore Links */}
          <div className="xl:pl-8 mt-4 md:mt-0">
            <h5 className="text-2xl mb-6 font-[600] montserrat border-b border-black/10 pb-2">
              {t2("explore")}
            </h5>
            <div className="space-y-3 text-base">
              <Link href="/biography" className="block hover:underline">
                {t1("biography")}
              </Link>
              <Link href="/political-journey" className="block hover:underline">
                {t1("political journey")}
              </Link>
              <Link href="/#services" className="block hover:underline">
                {t1("public services")}
              </Link>
              <Link href="/gallery" className="block hover:underline">
                {t1("gallery")}
              </Link>
            </div>
          </div>

          {/* Column 3: Services Links */}
          <div className="mt-4 md:mt-0">
            <h5 className="text-2xl mb-6 font-[600] montserrat border-b border-black/10 pb-2">
              {t2("services")}
            </h5>
            <div className="space-y-3 text-base">
              <Link href="/services/sports" className="block hover:underline">
                {t1("sports")}
              </Link>
              <Link href="/services/agriculture" className="block hover:underline">
                {t1("agriculture")}
              </Link>
              <Link href="/services/employment" className="block hover:underline">
                {t1("employment")}
              </Link>
              <Link href="/services/education" className="block hover:underline">
                {t1("education")}
              </Link>
              <Link href="/services/healthcare" className="block hover:underline">
                {t1("healthcare")}
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="mt-4 md:mt-0">
            <h5 className="text-2xl mb-6 font-[600] montserrat border-b border-black/10 pb-2">
              {t2("contact us")}
            </h5>
            <div className="space-y-5 text-base">
              {/* Location */}
              <div>
                <div className="flex items-start gap-2 mb-1">
                  <MdOutlineLocationOn size={24} className="flex-shrink-0 inline text-black mt-[2px]" />
                  <p className="text-lg font-[600] leading-snug">{t2("location")}</p>
                </div>
                {/* Text shifted less, and size unified */}
                <p className="pl-8 text-sm">{t2("address")}</p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-start gap-2 mb-1">
                  <FaRegEnvelope size={20} className="flex-shrink-0 inline text-black mt-[2px]" />
                  <p className="text-lg font-[600] leading-snug">{t2("mail us")}</p>
                </div>
                <Link
                  href={"mailto:madhurataimadankar@gmail.com"}
                  className="pl-8 text-sm hover:underline"
                >
                  madhurataimadankar@gmail.com
                </Link>
              </div>
              
              {/* Internal Social Links */}
              <div className="flex items-center gap-2 pt-2">
                <Link
                  href={"https://www.facebook.com/madhura.madankar.50/"}
                  target="_blank"
                  className="bg-[#F4F4F4] p-2 rounded-lg hover:bg-black/10 transition"
                >
                  <TfiFacebook size={20} />
                </Link>
                <Link
                  href={"https://x.com/MadhuraMadankar?s=20"}
                  target="_blank"
                  className="bg-[#F4F4F4] p-2 rounded-lg hover:bg-black/10 transition"
                >
                  <RiTwitterXLine size={20} />
                </Link>
                <Link
                  href={"https://www.instagram.com/madhura_madankar/"}
                  target="_blank"
                  className="bg-[#F4F4F4] p-2 rounded-lg hover:bg-black/10 transition"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  href={
                    "https://www.youtube.com/@MadhuraMadankar"
                  }
                  target="_blank"
                  className="bg-[#F4F4F4] p-2 rounded-lg hover:bg-black/10 transition"
                >
                  <FaYoutube size={20} />
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Copyright Section */}
        <div className="flex justify-center text-base pt-6 border-t border-black/10 text-black">
          <p>
             &copy; {new Date().getFullYear()} {displayName} {displaySurname}. All rights reserved. | Developed by {" "}
            <a
              href="https://www.gbjbuzz.com/"
              className="underline font-medium"
              target="_blank"
            >
              GBJ BUZZ PRIVATE LIMITED
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}