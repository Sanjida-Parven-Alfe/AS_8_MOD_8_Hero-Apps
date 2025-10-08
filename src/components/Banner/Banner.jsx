import React from "react";
import Heroimg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center bg-[#f2f2f2] pt-[50px] md:pt-[80px]">
      {/* Top Section */}
      <div className="flex flex-col justify-center items-center h-[344px] text-center px-4 md:px-6">
        <div className="mb-[40px]">
          <h1 className="inter-font text-[40px] md:text-[56px] lg:text-[72px] font-bold mb-[16px] text-[#001931] leading-tight">
            We Build <br />{" "}
            <span className="font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-[#627382] text-[16px] md:text-[18px] lg:text-[20px]">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.{" "}
            <br className="hidden md:block" />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-4 pb-[20px] md:pb-[40px]">
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer flex items-center justify-center px-4 md:px-6 py-2 text-[#001931] text-[16px] md:text-[20px] inter-font font-semibold rounded-md border-2 border-[#D2D2D2] w-[160px] md:w-[200px] h-[50px] md:h-[56px] text-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:to-[#D3D3D3] hover:shadow-md hover:shadow-[#ae90f6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 283"
                className="mr-2"
              >
                <path
                  fill="#ea4335"
                  d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"
                ></path>
                <path
                  fill="#4285f4"
                  d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"
                ></path>
                <path
                  fill="#34a853"
                  d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"
                ></path>
              </svg>
              Google Play
            </button>
          </a>

          {/* App Store Button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer flex items-center justify-center px-4 md:px-6 py-2 text-[#001931] text-[16px] md:text-[20px] inter-font font-semibold rounded-md border-2 border-[#D2D2D2] w-[160px] md:w-[200px] h-[50px] md:h-[56px] text-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:to-[#D3D3D3] hover:shadow-md hover:shadow-[#ae90f6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
                className="mr-2"
              >
                <defs>
                  <linearGradient
                    id="SVG1vlmueNw"
                    x1="50%"
                    x2="50%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#17c9fb"></stop>
                    <stop offset="100%" stopColor="#1a74e8"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#SVG1vlmueNw)"
                  d="M56.064 0h143.872C230.9 0 256 25.1 256 56.064v143.872C256 230.9 230.9 256 199.936 256H56.064C25.1 256 0 230.9 0 199.936V56.064C0 25.1 25.1 0 56.064 0"
                ></path>
                <path
                  fill="#fff"
                  d="m82.042 185.81l.024.008l-8.753 15.16c-3.195 5.534-10.271 7.43-15.805 4.235s-7.43-10.271-4.235-15.805l6.448-11.168l.619-1.072c1.105-1.588 3.832-4.33 9.287-3.814c0 0 12.837 1.393 13.766 8.065c0 0 .126 2.195-1.351 4.391m124.143-38.72h-27.294c-1.859-.125-2.67-.789-2.99-1.175l-.02-.035l-29.217-50.606l-.038.025l-1.752-2.512c-2.872-4.392-7.432 6.84-7.432 6.84c-5.445 12.516.773 26.745 2.94 31.046l40.582 70.29c3.194 5.533 10.27 7.43 15.805 4.234c5.533-3.195 7.43-10.271 4.234-15.805l-10.147-17.576c-.197-.426-.539-1.582 1.542-1.587h13.787c6.39 0 11.57-5.18 11.57-11.57s-5.18-11.57-11.57-11.57m-53.014 15.728s1.457 7.411-4.18 7.411H48.092c-6.39 0-11.57-5.18-11.57-11.57s5.18-11.57 11.57-11.57h25.94c4.188-.242 5.18-2.66 5.18-2.66l.024.012l33.86-58.648l-.01-.002c.617-1.133.103-2.204.014-2.373l-11.183-19.369c-3.195-5.533-1.299-12.61 4.235-15.804s12.61-1.3 15.805 4.234l5.186 8.983l5.177-8.967c3.195-5.533 10.271-7.43 15.805-4.234s7.43 10.27 4.235 15.804l-47.118 81.61c-.206.497-.269 1.277 1.264 1.414h28.164l.006.275s16.278.253 18.495 15.454"
                ></path>
              </svg>
              App Store
            </button>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full flex justify-center px-4">
        <img
          src={Heroimg}
          className="mt-[10px] md:mt-[40px] max-w-[90%] md:max-w-[70%] lg:max-w-[50%]"
          alt=""
        />
      </div>

      {/* Stats Section */}
      <div className="flex flex-col justify-center items-center h-auto md:h-[380px] w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mb-[80px] py-10">
        <h1 className="text-white text-[22px] md:text-[40px] font-bold text-center pb-[20px] md:pb-[40px] px-4">
          Trusted by Millions, Built for You
        </h1>

        <div className="grid grid-cols-3 gap-10 md:gap-[80px] lg:gap-[120px]">
          <div className="text-center">
            <p className="inter-font text-[9px] md:text-[16px] font-normal">
              Total Downloads
            </p>
            <h1 className="inter-font text-[30px] md:text-[64px] font-extrabold">
              29.6M
            </h1>
            <p className="inter-font text-[9px] md:text-[16px] font-normal">
              21% more than last month
            </p>
          </div>

          <div className="text-center">
            <p className="inter-font text-[9px] md:text-[16px] font-normal">
              Total Reviews
            </p>
            <h1 className="inter-font text-[30px] md:text-[64px] font-extrabold">
              906K
            </h1>
            <p className="inter-font text-[9px] md:text-[16px] font-normal">
              46% more than last month
            </p>
          </div>

          <div className="text-center">
            <p className="inter-font text-[9px] md:text-[16px] font-normal">
              Active Apps
            </p>
            <h1 className="inter-font text-[30px] md:text-[64px] font-extrabold">
              132+
            </h1>
            <p className="inter-font text-[9px] md:text-[16px] font-normal">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
