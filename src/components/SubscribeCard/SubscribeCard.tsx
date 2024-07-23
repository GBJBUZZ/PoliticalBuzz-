"use client";

import React, { FormEvent, useState } from "react";
import { IoIosSend } from "react-icons/io";
import supabase from "@/supabase";
import { useTranslations } from "next-intl";

export default function SubscribeCard() {
  const t = useTranslations("main.hero");


  const [formdata, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Phone_Number: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("narendra_bhondekar_contact_form")
        .insert([formdata])
        .select();

      if (error) {
        throw error;
      }

      alert("You have successfully subscribed to our newsletter!");
    } catch (e) {
      alert("An error occurred while sending the message");
    }

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <div className="px-4 py-8 rounded-xl bg-white border-4 border-[var(--primary-clr)] min-w-[300px] md:min-w-[400px]">
      <p className="text-black font-[600]">{t("get more news")}</p>
      <h3 className="text-black">{t("subscribe")}</h3>
      <form action="" className="flex mt-2" onSubmit={handleSubmit}>
        <input
          type="email"
          name="subscribe-email"
          id="subscribe-email"
          className="shadow-custom px-4 py-2 rounded-l-xl outline-0"
          onChange={(e) => {
            setFormData({ ...formdata, Email: e.target.value });
          }}
          placeholder={t("input")}
        />
        <button className="shadow-custom p-2 rounded-r-xl bg-[var(--primary-clr)]">
          {loading ? (
            <div className="border-gray-300 p-2 bg-transparent animate-spin rounded-full border-4 border-t-white" />
          ) : (
            <IoIosSend size={28} className="text-white" />
          )}
        </button>
      </form>
    </div>
  );
}
