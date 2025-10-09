import React from "react";
import Logoimg from "../../assets/logo.png";

const Loader = () => {
  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center items-center">
      <h1 className="inter-font text-[80px] font-extrabold text-[#001931] flex items-center gap-4">
        L
        <img
          src={Logoimg}
          alt="Logo"
          className="w-[80px] h-[80px] animate-spin"
        />
        OADING
      </h1>
    </div>
  );
};

export default Loader;
