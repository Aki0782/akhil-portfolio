"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: easeInOut }
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
