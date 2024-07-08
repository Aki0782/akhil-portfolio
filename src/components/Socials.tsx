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
    url: "https://github.com/Aki0782"
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/Aki07/"
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/humourjunkie/"
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/Akiakina0/"
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
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
