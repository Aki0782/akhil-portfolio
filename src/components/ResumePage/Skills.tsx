import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaGit,
  FaJira
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiReactquery,
  SiRedux,
  SiAndroid,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiWebpack
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
const skills = {
  title: "My skills",
  description: "Here are some of the technologies I have experience with.",
  skillslist: [
    {
      title: "HTML5",
      icon: <FaHtml5 />
    },
    {
      title: "CSS3",
      icon: <FaCss3 />
    },
    {
      title: "JavaScript",
      icon: <FaJs />
    },
    {
      title: "Typescript",
      icon: <SiTypescript />
    },
    {
      title: "React",
      icon: <FaReact />
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />
    },
    {
      title: "jQuery",
      icon: <SiJquery />
    },
    {
      title: "React Query",
      icon: <SiReactquery />
    },
    {
      title: "Redux",
      icon: <SiRedux />
    },
    {
      title: "NodeJs",
      icon: <FaNodeJs />
    },
    {
      title: "Express JS",
      icon: <SiExpress />
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />
    },
    {
      title: "Figma",
      icon: <FaFigma />
    },
    {
      title: "Android",
      icon: <SiAndroid />
    },
    {
      title: "Webpack",
      icon: <SiWebpack />
    },
    {
      title: "AWS",
      icon: <FaAws />
    },
    {
      title: "Git",
      icon: <FaGit />
    },
    {
      title: "Jira",
      icon: <FaJira />
    },
    {
      title: "Zustand",
      icon: <GiBearFace />
    }
  ]
};
const Skills = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left ">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {skills.skillslist.map((skill, i) => {
            return (
              <li key={i}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <div className="text-6xl group-hover:text-accent transition-all duration-300">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    {/* <TooltipContent> */}
                    <p className="text-center">{skill.title}</p>
                    {/* </TooltipContent> */}
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
