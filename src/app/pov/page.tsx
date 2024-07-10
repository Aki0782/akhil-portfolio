"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Led the development and implementation of innovative React Micro Frontend Frameworks, significantly enhancing scalability and development efficiency.",
    href: ""
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Developed high-performance mobile applications using React Native, improving user experience and integrating advanced features such as seamless API management and state-of-the-art design systems.",
    href: ""
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Designed and implemented robust backend solutions using Node.js, Express JS, and MongoDB, ensuring efficient API management and seamless integration with frontend applications.",
    href: ""
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimized web applications for SEO, improving search engine rankings and visibility through efficient coding practices, metadata management, and performance enhancements.",
    href: ""
  }
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, i) => {
            return (
              <div
                key={i}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {item.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={item.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{item.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
