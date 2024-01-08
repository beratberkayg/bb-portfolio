import React from "react";
import Title from "./Title";
import Links from "./Links";

const Header = () => {
  return (
    <div className="px-3  w-fit h-full">
      <Title />
      <Links />
    </div>
  );
};

export default Header;
