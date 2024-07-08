import React from "react";
import { ScrollArea } from "../ui/scroll-area";
const experience = {
  icon: "/assets/badge.svg",
  title: "My experience",
  description:
    "I have experience in front-end and back-end development, and I am always looking to learn new technologies and improve my skills.",
  items: [
    {
      company: "MBO Partners Inc.",
      postition: "Lead Product Engineer",
      duration: "Sept 2021 - Mar 2024"
    },
    {
      company: "MBO Partners Inc.",
      postition: "Lead Product Engineer",
      duration: "Sept 2021 - Mar 2024"
    },
    {
      company: "MBO Partners Inc.",
      postition: "Lead Product Engineer",
      duration: "Sept 2021 - Mar 2024"
    },
    {
      company: "MBO Partners Inc.",
      postition: "Lead Product Engineer",
      duration: "Sept 2021 - Mar 2024"
    },
    {
      company: "MBO Partners Inc.",
      postition: "Lead Product Engineer",
      duration: "Sept 2021 - Mar 2024"
    }
  ]
};
const Experience = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experience.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.items.map((item, i) => {
            return (
              <li
                className="bg-[#232329] h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                key={i}
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px]">
                  {" "}
                  {item.postition}
                </h3>
                <div className="flex items-center gap-3">
                  {/* dot */}
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
