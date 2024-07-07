"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    href: "/"
  },
  {
    name: "services",
    href: "/services"
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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex - flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/">
              <h1 className=" text-4xl font-semibold">
                Akhil<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, i) => {
            return (
              <SheetClose asChild key={i}>
                <Link
                  href={link.href}
                  className={`${pathname === link.href && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all `}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
