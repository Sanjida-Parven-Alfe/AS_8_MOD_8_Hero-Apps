import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Downloadimg from "../../assets/icon-downloads.png";
import Ratingsimg from "../../assets/icon-ratings.png";
import Reviewimg from "../../assets/icon-review.png";

const YLeftTick = ({ y, payload }) => (
  <text
    x={0}
    y={y}
    dy={4}
    textAnchor="start"
    className="fill-[#627382]"
    fontSize="18"
  >
    {payload.value}
  </text>
);

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id.toString() === id);
        setApp(foundApp);
      });
  }, [id]);

  if (!app) return <div className="p-12">Loading…</div>;

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} Installed Successfully!`);
  };

  const compact = (n) =>
    typeof n === "string"
      ? n
      : Intl.NumberFormat("en", { notation: "compact" }).format(n);

  const ratingsData = app.ratings || [
    { name: "5 star", count: 11500 },
    { name: "4 star", count: 7200 },
    { name: "3 star", count: 2600 },
    { name: "2 star", count: 1800 },
    { name: "1 star", count: 1200 },
  ];

  const order = ["5 star", "4 star", "3 star", "2 star", "1 star"];
  const orderedRatingsData = [...ratingsData].sort(
    (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
  );

  return (
    <div className="p-[20px] md:p-[80px] bg-[#f2f2f2]">
      {/* ToastContainer top-center */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="w-[350px] h-[350px] flex justify-center md:justify-start">
          <img
            src={app.image}
            alt={app.title}
            className="w-40 h-40 md:w-[350px] md:h-[350px] rounded-2xl object-contain bg-white border"
          />
        </div>

        <div className="flex-1">
          <h1 className="inter-font text-[32px] text-[#001931] md:text-3xl font-bold">
            {app.title}
          </h1>
          <div className="inter-font font-normal text-[#627382] text-[20] mt-1 border-b-1 pb-[30px]">
            <p>
              Developed by
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                {" "}
                productive.io
              </span>
            </p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-1 max-w-xl text-[#001931] pt-[30px]">
            <div className="flex flex-col gap-2 items-start justify-center text-center">
              <img src={Downloadimg} alt="Downloads" className="w-[40px] h-[40px]" />
              <div className="text-sm text-gray-500 mt-1">Downloads</div>
              <div className="text-3xl font-bold mt-2">
                {compact(app.downloads ?? 8000000)}
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center text-center">
              <img src={Ratingsimg} alt="Ratings" className="w-[40px] h-[40px]" />
              <div className="text-sm text-gray-500 mt-1">Average Rating</div>
              <div className="text-3xl font-bold mt-2">{app.ratingAvg ?? "4.9"}</div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center text-center">
              <img src={Reviewimg} alt="Reviews" className="w-[40px] h-[40px]" />
              <div className="text-sm text-gray-500 mt-1">Total Reviews</div>
              <div className="text-3xl font-bold mt-2">
                {compact(app.reviews ?? 54000)}
              </div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-10 w-[239px] inline-flex items-center justify-center px-5 py-2 rounded-md text-white font-medium shadow-sm ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed
              ? "Installed"
              : `Install Now (${app.installSize || "291 MB"})`}
          </button>
        </div>
      </div>

      <div className="my-10 text-gray-500 border-t" />

      {/* Ratings section */}
      <div>
        <h2 className="text-[#001931] inter-font text-[24px] font-semibold mb-4">
          Ratings
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={orderedRatingsData}
              layout="vertical"
              margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
              barSize={32} // bar height
              barCategoryGap="22%"
            >
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#8ea0ae", fontSize: 12 }}
                domain={[0, "dataMax + 1000"]}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={70}
                axisLine={false}
                tickLine={false}
                tick={<YLeftTick />}
              />
              <Tooltip contentStyle={{ backgroundColor: "white", color: "black", fontSize: "14px" }} />
              <Bar dataKey="count" radius={[4, 4, 4, 4]} fill="#FF8B1A" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="my-8 text-gray-400 border-t" />

      {/* Description */}
      <div>
        <h2 className="inter-font text-[24px] text-[#001931] font-semibold mb-3">Description</h2>
        <p className="inter-font text-[#627382] text-[20px] font-normal whitespace-pre-line">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
