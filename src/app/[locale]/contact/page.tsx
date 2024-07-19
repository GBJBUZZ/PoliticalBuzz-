import Header from "@/components/Header/Header";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

export default function page() {
  const t = useTranslations("contact us");

  return (
    <main>
      {" "}
      <Header title="contact us.title" />
      <section className="px-8 md:px-20 py-20 space-y-16">
        <div className="p-0 md:p-4 shadow-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--primary-clr)] space-y-16 rounded-lg py-8 px-8">
            <div>
              <h2 className="text-white ">{t("msg")}</h2>
              <p className="text-white">{t("line")}</p>
            </div>
            <div className="space-y-8 text-white">
              <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center text-center md:text-left flex-wrap gap-1">
                <FiPhoneCall size={24} className="inline" />{" "}
                <Link href={"mailto:mlabhondekaroffice@gmail.com"}>
                  {t("phone")}
                </Link>
              </div>
              <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center text-center md:text-left flex-wrap gap-1">
                <FaRegEnvelope size={24} className="inline" />{" "}
                <Link href={"mailto:mlabhondekaroffice@gmail.com"}>
                  mlabhondekaroffice@gmail.com
                </Link>
              </div>{" "}
              <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center text-center md:text-left  gap-1">
                <MdOutlineLocationOn size={24} className="inline" />
                <p>{t("address")}</p>
              </div>
            </div>

            <div className="p-2 w-fit mx-auto md:mx-0 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
              <Link href="#" className="py-2 px-4">
                <FaFacebookF className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaXTwitter className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaLinkedinIn className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaYoutube className="" />
              </Link>
            </div>
          </div>

          <div className="p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
              <label htmlFor="">
                <span>{t("form.first name")}</span>
                <input
                  type="text"
                  className="block border-b-2 border-[#8D8D8D] w-full p-2"
                />
              </label>
              <label htmlFor="">
                <span>{t("form.last name")}</span>
                <input
                  type="text"
                  className="block border-b-2 border-[#8D8D8D] w-full p-2"
                />
              </label>
              <label htmlFor="">
                <span>{t("form.email")}</span>
                <input
                  type="email"
                  className="block border-b-2 border-[#8D8D8D] w-full p-2"
                />
              </label>
              <label htmlFor="">
                <span>{t("form.phone")}</span>
                <input
                  type="email"
                  className="block border-b-2 border-[#8D8D8D] w-full p-2"
                />
              </label>
              <label htmlFor="" className="md:col-span-2">
                <span>{t("form.message")}</span>
                <input
                  type="email"
                  className="block border-b-2 border-[#8D8D8D] w-full p-2"
                />
              </label>
            </form>{" "}
            <button className="btn mt-16 ml-auto px-6 py-3 bg-[var(--primary-clr)] block w-fit text-[#fff] rounded-xl">
              <span>{t("form.send message")}</span>
            </button>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4493.401744730357!2d79.64836124001734!3d21.17832509636252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720611499046!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] rounded-xl"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
