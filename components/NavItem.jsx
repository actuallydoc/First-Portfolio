import React from "react";

function NavItem({ name, path, clickFunc, src }) {
  return (
    <div className="text-3xl text-center rounded justify-center text-white bg-black  m-1.5 py-2 px-2 space-x-7 transform hover:scale-125 transition-all">
      <a onClick={clickFunc} href={path}>
        <h1>{name}</h1>
      </a>
    </div>
  );
}

export default NavItem;
