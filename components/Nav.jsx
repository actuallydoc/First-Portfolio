import React from "react";
import NavItem from "./NavItem";
import Box from "@mui/material/Box";
function Nav() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="bg-black flex py-2">
      <div className="flex">
        <NavItem name={"Contact"} />
        <NavItem name={"About"} />
        <NavItem name={"Help"} />
        <NavItem name={"Items"} />
      </div>
      <div className="flex ml-auto text-center">
        <NavItem path={"/login"} name={"Login"} />
        <NavItem path={"/register"} name={"Register"} />
      </div>
    </div>
  );
}

export default Nav;
