"use client";
import React from "react";
import CountUp from "react-countup";
const stats = [
  {
    title: "Years of experience",
    value: 8
  },
  {
    title: "Projects completed",
    value: 16
  },
  {
    title: "Code commits",
    value: 900
  }
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, i) => {
            return (
              <div className="flex flex-1 gap-4 items-center justify-center xl:justify-start" key={i}>
                <CountUp
                  end={item.value}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${item.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
