import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
  style?: string;
}

const ButtonMain: React.FC<Props> = ({ title, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 font-bold bg-primary hover:bg-primaryDark text-white rounded-md ${style}`}
    >
      {title}
    </button>
  );
};

export default ButtonMain;
