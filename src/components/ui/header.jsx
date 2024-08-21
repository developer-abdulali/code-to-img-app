import React from "react";
import LOGO from "../../assets/logo.svg";
import { Button } from "./button";

const Header = () => {
  return (
    <div className="p-3 px-5 shadow-sm flex items-center justify-between">
      <img src={LOGO} alt="logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
