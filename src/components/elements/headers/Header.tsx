import React from "react";

interface Props {
  title: string;
  style?: string;
}

const Header: React.FC<Props> = ({ title, style }) => {
  return <h1 className={`font-bold text-2xl ${style}`}>{title}</h1>;
};

export default Header;
