import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Members() {
  return (
    <section className="px-8 md:px-20 py-20 space-y-8 pattern1 bg-[#f3f3f0]">
      <div className="text-center">
        <p className="rufina text-xs text-[var(--primary-clr)] uppercase">
          Team Members
        </p>
        <h2 className="w-fit m-auto">Meet Our Officers</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="rufina text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
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
        </div>
        <div className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="rufina text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
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
        </div>
        <div className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="rufina text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
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
        </div>
        <div className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="rufina text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
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
        </div>
      </div>
    </section>
  );
}
