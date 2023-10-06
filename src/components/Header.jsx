import React from "react";
import randmImg from "../assets/rick_morty_.png";

function Header() {
  return (
    <div
      className="bg-red-700 w-screen h-64 flex items-center justify-center bg-no-repeat "
      style={{
        backgroundImage: `url(${randmImg})`,
      }}
    >
      <p className="text-5xl font-sans font-extrabold">
        Rick and Morty Characters
      </p>
    </div>
  );
}

export default Header;
