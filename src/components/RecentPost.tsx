"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function RecentPost() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/0379d58e-737d-4f70-a307-55a72a86d2ac.js";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [hidden]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#f37021] bg-opacity-50 backdrop-blur z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <button
        className="absolute top-0 right-0 m-2 z-50"
        onClick={() => setHidden(true)}
      >
        <IoClose size={40} className="text-black" />
      </button>
      <div className="max-h-[90%] max-w-1/2 h-fit w-fit p-4 absolute top-0 left-0 right-0 bottom-0 m-auto">
        <h3 className="text-white text-center">Recent Posts</h3>
        <div id="curator-feed-default-feed-layout" className="mx-auto w-80 md:w-96">
          <a
            href="https://curator.io"
            target="_blank"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </div>
      </div>
    </div>
  );
}
