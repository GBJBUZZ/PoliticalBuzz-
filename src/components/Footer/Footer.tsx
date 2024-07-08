import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="px-8 md:px-20 py-20 md:py-40 relative bg-[var(--primary-clr)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-4 my-20">
      <div>
        <Image
          src={"/logo.svg"}
          alt="instagram"
          width={500}
          height={500}
          className="max-w-[300px]"
        />
        <p className="mt-8">
          Narendra Bhondekar is a politician from Bhandara district,
          Maharashtra. He is current Member of Maharashtra Legislative Assembly
          from Bhandara Vidhan Sabha constituency.
        </p>
      </div>
      <div className="md:pl-8">
        <h5 className="text-2xl my-8 font-[600] rufina">Explore</h5>
        <div className="md:mt-12 space-y-2">
          <Link href="/about" className="block">
            Biography
          </Link>
          <Link href="/about" className="block">
            Political Journey
          </Link>
          <Link href="/about" className="block">
            Vision
          </Link>
          <Link href="/about" className="block">
            Constituency
          </Link>
          <Link href="/about" className="block">
            Development
          </Link>
          <Link href="/about" className="block">
            Photo Gallery
          </Link>
          <Link href="/about" className="block">
            Media
          </Link>
        </div>
      </div>
      <div className="">
        <h5 className="text-2xl my-8 font-[600] rufina">Services</h5>
        <div className="md:mt-12 space-y-2">
          <Link href="/about" className="block">
            Agriculture
          </Link>
          <Link href="/about" className="block">
            Education
          </Link>
          <Link href="/about" className="block">
            Employment
          </Link>
          <Link href="/about" className="block">
            Environment
          </Link>
          <Link href="/about" className="block">
            Development
          </Link>
        </div>
      </div>
      <div className="">
        <h5 className="text-2xl my-8 font-[600] rufina">Contact us</h5>
        <div className="md:mt-12 space-y-2">
          <div>
            <div className="flex items-center flex-wrap gap-1">
              <MdOutlineLocationOn size={24} className="inline" />
              <p className="text-lg font-[600]">Location</p>
            </div>
            <p className="ml-8">
              Sahkar Nagar, Bank Colony, Kisan Chowk, Bhandara, Maharashtra
              441904
            </p>
          </div>
          <div>
            <div className="flex items-center flex-wrap gap-1">
              <FaRegEnvelope size={24} className="inline" />
              <p className="text-lg font-[600]">Mail us</p>
            </div>
            <Link href={"mailto:mlabhondekaroffice@gmail.com"} className="ml-8">
              mlabhondekaroffice@gmail.com
            </Link>
          </div>
          <br />
          <div className="flex items-center gap-2 w-fit pr-2 border-r-2 border-[#f4f4f4] text-[var(--primary-txt)]">
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
      </div>
    </section>
  );
}
