import React from "react";

import { motion, animate } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"]
  }
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;

  return totalSteps - index - 1;
};
const Stair = () => {
  return (
    <>
      {/* render 6 motion div. each representing a step of the stairs
        Each div will have the same animation defined by the StairAnimation.
        The delay for each div is caluclated sinamically based on its reversed index,  creating a staggering effect with decreasing delay for each subsequest step.
    */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="w-full h-full bg-white relative"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: reverseIndex(index) * 0.1,
            duration: 0.2,
            ease: "easeInOut"
          }}
          variants={stairAnimation}
        />
      ))}
    </>
  );
};

export default Stair;
