import Link from "next/link";
import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

type SocialsProps = {
  containerStyles: string;
  iconStyles: string;
};
const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Aki0782",
    name: "github"
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/Aki07/",
    name: "linkedin"
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/humourjunkie/",
    name: "instagram"
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/Akiakina0/",
    name: "facebook"
  }
];
const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          className={iconStyles}
          key={index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
