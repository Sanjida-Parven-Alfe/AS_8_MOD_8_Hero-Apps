import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Errorimg from "../../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="bg-[#f2f2f2] flex flex-col items-center p-[40px] md:p-[80px]">
        <img src={Errorimg} alt="404 Error" />
        <h1 className="text-[#001931] inter-font text-[30px] md:text-[48px] font-semibold pt-[35px] md:pt-[55px]">
          Oops, page not found!
        </h1>
        <p className="text-[#627382] inter-font text-[15px] md:text-[20px] font-normal pb-[16px]">
          The page you are looking for is not available.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md hover:scale-105 transition-transform duration-200"
        >
          Go Back!
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
