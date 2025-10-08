import React from "react";

const Footer = () => {
  return (
    <div>
      {/* First Footer Section */}
      <footer className="footer bg-[#000d18] sm:footer-horizontal text-white p-10 md:px-[40px] lg:px-[80px]">
        <aside className="flex flex-col items-start mb-8 md:mb-0 md:items-start lg:items-start">
          <img
            src="/src/assets/logo.png"
            alt="Hero.IO Logo"
            className="w-[65px] h-[65px] mb-4 md:mb-0 md:w-[80px] md:h-[80px]"
          />
          <p className="text-left">
            Hero.IO <br />
            Building innovative solutions for your business
          </p>
        </aside>

        {/* Services, Company, Legal Sections */}
        <div className="flex space-x-15 md:space-x-40">
          <nav className="flex flex-col space-y-4">
            <h6 className="footer-title pb-3">Features</h6>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              App Store
            </a>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              Play Store
            </a>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              Download
            </a>
          </nav>

          <nav className="flex flex-col space-y-4">
            <h6 className="footer-title pb-3">Company</h6>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              About Us
            </a>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              Contact
            </a>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              Blog
            </a>
          </nav>

          <nav className="flex flex-col space-y-4">
            <h6 className="footer-title pb-3">Legal</h6>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              Terms of Use
            </a>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              Privacy Policy
            </a>
            <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">
              Cookie Policy
            </a>
          </nav>
        </div>
      </footer>

      {/* Second Footer Section */}
      <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
        <aside className="flex flex-col md:flex-row justify-center items-center gap-8">
          <p>
            Copyright © {new Date().getFullYear()} Hero.IO. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center ">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </a>

            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="#fff" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.612-1.614L17 17h-2.778l-3.028-4.193"
                  ></path>
                  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></path>
                </g>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 20 20"
              >
                <path
                  fill="#fff"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                ></path>
              </svg>
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
