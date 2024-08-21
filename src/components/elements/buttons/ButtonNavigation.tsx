"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  goTo: string;
}

const ButtonNavigation: React.FC<Props> = ({ title, goTo }) => {
  const pathname = usePathname();

  return (
    <Link
      href={goTo}
      className={`mx-4 text-xl ${pathname === goTo ? "text-primary" : "text-black"} hover:text-primary`}
    >
      {title}
    </Link>
  );
};

export default ButtonNavigation;
