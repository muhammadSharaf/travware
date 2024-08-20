import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
}

const ButtonMain: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-full py-2 font-bold bg-[#fd7e14] hover:bg-[#e36c0a] text-white rounded-md"
      }
    >
      {title}
    </button>
  );
};

export default ButtonMain;
