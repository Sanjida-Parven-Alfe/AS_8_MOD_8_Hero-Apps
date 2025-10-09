import React, { Suspense, useState } from "react";
import Application from "../Applications/Application";
import { useLoaderData } from "react-router-dom";

const AllApplications = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f2f2f2]">
      <div className="bg-[#f2f2f2] flex flex-col items-center py-[40px]">
        <h1 className="inter-font text-[38px] md:text-[48px] font-bold text-[#001931] mb-2">
          Our All Applications
        </h1>
        <p className="inter-font text-[13px] md:text-[20px] font-normal text-[#627382] mb-[20px] md:mb-[40px] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="px-0 md:px-[80px] pb-[16px] w-[400px] md:w-[1490px] flex flex-col md:flex-row justify-between items-center gap-[10px] md:gap-[50px]">
          <p className="text-[#001931] inter-font text-[24px] font-semibold">
            ({filteredData.length}) Apps Found
          </p>

          <label className="flex items-center bg-white border border-black rounded-md px-4 py-2 hover:shadow-md hover:shadow-fuchsia-300 focus-within:shadow-md focus-within:shadow-fuchsia-300 w-[320px]">
            <svg
              className="h-4 w-4 text-gray-600 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search Apps"
              className="placeholder-[#627382] flex-1 outline-none bg-white text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        <Suspense fallback={<span>Loading....</span>}>
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] justify-items-center mb-[40px]">
              {filteredData.map((singleApp) => (
                <Application key={singleApp.id} singleApp={singleApp} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[200px] w-full mb-[40px]">
              <p className="text-gray-600 text-xl">No App Found</p>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default AllApplications;
