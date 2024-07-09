"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Stair from "./Stair";

const StairEffect = () => {
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      alert("Welcome to my website. This is still a work in progress.");
    }, 3000);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stair />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairEffect;
