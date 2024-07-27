import React from "react";
import { ScrollArea } from "../ui/scroll-area";

const education = {
  icon: "/assets/cap.svg",
  title: "My education",
  description: "Here is a brief overview of my educational background.",
  items: [
    {
      institution: "Royal Business College, New Zealand",
      degree: "Information Technology",
      duration: "2015 - 2016"
    },
    {
      institution: "Mahathma Gandhi Univeristy, India",
      degree: "Master of Science - CS",
      duration: "2013 - 2015"
    },
    {
      institution: "Mahathma Gandhi Univeristy, India",
      degree: "Bachelor of Science - Physics",
      duration: "2009 - 2012"
    }
  ]
};
const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {education.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {education.items.map((item, i) => {
            return (
              <li
                className="bg-[#232329] h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                key={i}
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px]">
                  {" "}
                  {item.degree}
                </h3>
                <div className="flex items-center gap-3">
                  {/* dot */}
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60 leading-snug">
                    {item.institution}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Education;
