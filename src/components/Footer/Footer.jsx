import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* First Footer Section */}
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 md:px-[40px] lg:px-[80px]">
        <aside className="flex flex-col items-start mb-8 md:mb-0 md:flex-col">
          <img src="/src/assets/logo.png" alt="Hero.IO Logo" className="w-[65px] h-[65px] mb-4 md:mb-0 md:w-[80px] md:h-[80px]" />
          <p className="text-center md:text-left">
            Hero.IO <br />
            Building innovative solutions for your business
          </p>
        </aside>

        {/* Services, Company, Legal Sections */}
        <nav className="mb-6 md:mb-0">
          <h6 className="footer-title">Features</h6>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">App Store</a>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">Play Store</a>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">Download</a>
        </nav>

        <nav className="mb-6 md:mb-0">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">About Us</a>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">Contact</a>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">Blog</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">Terms of Use</a>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">Privacy Policy</a>
          <a className="link link-hover hover:text-[#ba8cfb] transition-colors duration-200">Cookie Policy</a>
        </nav>
      </footer>

      {/* Second Footer Section */}
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside className="flex flex-col md:flex-row justify-center items-center gap-8">
          <p>Copyright © {new Date().getFullYear()} Hero.IO. All rights reserved.</p>
          <div className="flex space-x-4 items-center ">
            {/* Facebook Icon */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
              </svg>
            </a>

            {/* Twitter Icon */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M10.033 15.3h-1.6v-5.199h1.6zm-.8-5.866q-.866 0-.866-.8a.74.74 0 0 1 .25-.567a.87.87 0 0 1 .616-.233q.866 0 .866.801c0 .801-.288.799-.866.799m6.734 5.866h-1.633v-2.9q0-1.133-.801-1.133q-.632 0-.834.633q-.065.101-.066.4v3H11v-3.533q0-1.2-.033-1.666h1.4l.1.699c.367-.556.9-.833 1.633-.833q.835 0 1.35.583q.518.583.518 1.684V15.3zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9s9 4.037 9 9s-4.037 9-9 9m0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7s7-3.141 7-7s-3.141-7-7-7"
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
