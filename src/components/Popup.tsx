"use client";

import React, { useEffect, useState } from "react";

export default function Popup() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(false);
      console.log("Popup");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${hidden ? "hidden" : "block"}fixed top-0 left-0 right-0 bottom-0 bg-[#f37021] bg-opacity-50 backdrop-blur z-50`}
    >
      Popup
    </div>
  );
}
