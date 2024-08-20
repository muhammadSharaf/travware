import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  goTo: string;
}

const ButtonNavigation: React.FC<Props> = ({ title, goTo }) => {
  return (
    <Link href={goTo} className={"mx-4 text-xl"}>
      {title}
    </Link>
  );
};

export default ButtonNavigation;
