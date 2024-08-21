import React from "react";
import ButtonNavigation from "@/components/elements/buttons/ButtonNavigation";

interface Props {
  children?: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <nav
      className={"h-12 flex flex-row w-full items-center justify-between mb-12"}
    >
      <div className={"flex-1"}>{children}</div>
      <div>
        <ButtonNavigation title={"Products"} goTo={"/products"} />
        <ButtonNavigation title={"Cart"} goTo={"/cart"} />
      </div>
    </nav>
  );
};

export default NavBar;
