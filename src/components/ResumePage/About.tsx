import React from "react";
const about = {
  title: "About Me",
  description:
    "I am a self taught software developer with a passion for building web applications. I have experience in front-end and back-end development, and I am always looking to learn new technologies and improve my skills.",
  info: [
    {
      title: "Name",
      description: "Akhil Aravindakshan"
    },
    {
      title: "Location",
      description: "Canada"
    },
    {
      title: "Email",
      description: "akhilaravind456@gmail.com"
    },
    {
      title: "Phone",
      description: "+1 (782) 778-9931"
    },
    {
      title: "For Hire",
      description: "Full time Available"
    },
    {
      title: "Languages",
      description: "English, Hindi, Malayalam, Tamil"
    }
  ]
};
const About = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
        {about.info.map((item, i) => {
          return (
            <li
              className="flex items-start justify-start xl:justify-start gap-4"
              key={i}
            >
              <span className="text-white/60">{item.title}</span>
              <span className="text-lg">{item.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
