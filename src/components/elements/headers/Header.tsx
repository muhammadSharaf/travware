import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return <h1 className={"mt-48 font-bold text-2xl"}>{title}</h1>;
};

export default Header;
