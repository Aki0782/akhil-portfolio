"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = [
  {
    name: "home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Work",
    href: "/work"
  },
  {
    name: "Resume",
    href: "/resume"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            href={link.href}
            className={`${pathname === link.href && "text-accent border-b-2 border-accent"} capitalize  font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
