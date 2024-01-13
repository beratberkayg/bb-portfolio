"use client";
import { useEffect, useState } from "react";
import Background from "./Background";

const PreLoader = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [textOpacity, setTextOpacity] = useState(1); // Add textOpacity state

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
      setTextOpacity(0); // Set textOpacity to 0 after the timeout
    }, 2500);
    const texttimer = setTimeout(() => {
      setTextOpacity(0); // Set textOpacity to 0 after the timeout
    }, 2000);
    return () => clearTimeout(texttimer, timer);
  }, [pageLoading]);

  return (
    <div
      className={`absolute left-0 top-0 w-full h-full flex justify-center items-center bg-black text-white  ${
        pageLoading ? "opacity-100 z-10" : "opacity-0 -z-50 "
      }`}
    >
      <Background />
      <div
        className={`text-[25px] md:text-[35px] text-center font-normal transition-opacity duration-500  ease-in-out opacity-${textOpacity}`}
      >
        Berat Berkay <span className="font-extralight">Portfolyo</span>
      </div>
    </div>
  );
};

export default PreLoader;
