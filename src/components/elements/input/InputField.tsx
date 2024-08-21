import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
}

const InputField: React.FC<Props> = (props) => {
  const { title, htmlFor, ...rest } = props;

  return (
    <div className={"flex flex-1 flex-col"}>
      <label htmlFor={htmlFor} className="block mb-2 text-sm">
        {title}
      </label>
      <input
        {...rest}
        className={"h-10 text-sm rounded-xl shadow-sm block w-full p-2.5"}
      />
    </div>
  );
};

export default InputField;
