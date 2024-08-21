import React, { ChangeEvent } from "react";
import SortType from "@/enums/SortType";

interface Props<T> {
  title: string;
  htmlFor: string;
  options: T[];
  selected: T;
  onChange: (value: T) => void;
}

const DropDown = <T extends string>({
  title,
  htmlFor,
  options,
  selected,
  onChange,
}: Props<T>) => {
  const renderOptions = options.map((option: T, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div className={"flex flex-1 flex-col"}>
      <label htmlFor={htmlFor} className="block mb-2 text-sm">
        {title}
      </label>
      <select
        value={selected ?? SortType.ANY}
        id={htmlFor}
        className="h-10 text-sm rounded-xl shadow-sm block w-full p-2.5"
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          onChange(event.target.value as T)
        }
      >
        {renderOptions}
      </select>
    </div>
  );
};

export default DropDown;
