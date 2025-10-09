import React, { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); 


  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);


  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.info("App uninstalled successfully!");
  };


  const handleSort = (order) => {
    let sortedApps = [...installedApps];
    if (order === "high-to-low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "low-to-high") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sortedApps);
    setSortOrder(order);
  };

  return (
    <div className="bg-[#f2f2f2] pb-[80px]">
     
      <div className="flex flex-col items-center justify-center pt-[40px] md:pt-[80px] pb-[40px]">
        <h1 className="text-[#001931] inter-font text-[48px] font-bold text-center pb-[10px]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] inter-font text-[20px] font-normal text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

     
      <div className="flex flex-col items-center px-4 md:px-[80px] gap-4">
        <div className="flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center w-full mb-4">
          <h1 className="text-[#001931] inter-font font-semibold text-[24px]">
            ({installedApps.length}) Apps Found
          </h1>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 shadow-md rounded-md px-4 py-2 pr-6 text-[#627382] transition-shadow duration-200 hover:shadow-lg hover:shadow-purple-300 focus:outline-none cursor-pointer" 
          >
            <option value="" disabled>
              Sort By Size
            </option>
            <option value="high-to-low">Downloads: High-Low</option>
            <option value="low-to-high">Downloads: Low-High</option>
          </select>
        </div>

       
        <div className="flex flex-col gap-4 w-full">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <div
                key={app.id}
                className="w-full h-[112px] bg-white rounded-sm p-[16px] flex items-center justify-between"
              >
                <img
                  src={app.image}
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-lg"
                  alt={app.title}
                />
                <div className="flex flex-col flex-1 pl-[8px] md:pl-[16px] justify-center">
                  <h1 className="text-[#001931] inter-font text-[15px] md:text-[20px] font-medium">
                    {app.title}
                  </h1>
                  <div className="flex gap-4 items-center mt-1">
                    <p className="inter-font font-normal text-[#00D390] text-[13px] md:text-[16px] flex items-center gap-1">
                      <img
                        src={downloadImg}
                        className="w-[16px] h-[16px]"
                        alt="downloads"
                      />
                      {(app.downloads / 1000000).toFixed(0)}M
                    </p>
                    <p className="inter-font font-normal text-[#FF8811] text-[13px] md:text-[16px] flex items-center gap-1">
                      <img
                        src={ratingsImg}
                        className="w-[16px] h-[16px]"
                        alt="ratings"
                      />
                      {app.ratingAvg ?? "5"}
                    </p>
                    <p className="inter-font font-normal text-[#627382] text-[13px] md:text-[16px]">
                      {app.size ?? "258 MB"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-[#00D390] w-[100px] h-[43px] text-white px-4 py-2 rounded-lg hover:bg-[#28a728]"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-xl text-center mt-10 col-span-full">
              No Apps Installed
            </p>
          )}
        </div>
      </div>

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Installation;
