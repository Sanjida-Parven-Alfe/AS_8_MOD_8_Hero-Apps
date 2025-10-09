import React, { Suspense } from "react";
import Application from "../Applications/Application";

const Apps = ({ data }) => {
  const firstEightApps = data.slice(0, 8);

  return (
    <div className="mx-[40px] md:mx-[80px]">
      <h1 className="inter-font text-[48px] font-bold mb-2 text-[#001931] text-center">
        Trending Apps
      </h1>
      <p className="inter-font text-[20px] font-normal mb-[40px] text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[40px] justify-items-center">
          {firstEightApps.map((singleApp) => (
            <Application key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center pb-[80px] ">
          <button className="inter-font text-[16px] shadow-none font-semibold btn btn-primary w-[145px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg hover:shadow-gray-500 hover:scale-106 transition-transform duration-300 cursor-pointer ">
            Show All
          </button>
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
