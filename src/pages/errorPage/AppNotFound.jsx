import React from "react";
import AppNotFoundimg from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="bg-[#f2f2f2] flex flex-col items-center p-[40px] md:p-[80px]">
      <img src={AppNotFoundimg} alt="" />
      <h1 className="text-[#001931] inter-font text-[28px] md:text-[48px] font-semibold pt-[35px] md:pt-[55px]">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[#627382] text-center inter-font text-[15px] md:text-[20px] font-normal pb-[16px]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <a
        href="/all-applications"
        className="px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md hover:scale-105 transition-transform duration-200"
      >
        Go Back!
      </a>
    </div>
  );
};

export default AppNotFound;
