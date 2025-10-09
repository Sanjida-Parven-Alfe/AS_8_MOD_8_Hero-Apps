import React from "react";
import { Link } from "react-router-dom";
import downloadImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";

const Application = ({ singleApp }) => {
  const { id, image, title, downloads, ratingAvg } = singleApp;

  return (
    <Link to={`/all-applications/${id}`}>
      <div className="card bg-white w-[320px] h-[420px] shadow-sm rounded-sm hover:shadow-lg hover:shadow-purple-300 hover:scale-103 transition-transform duration-300 cursor-pointer">
        <figure className="m-4 rounded-lg w-[290px] h-[290px]">
          <img
            src={image}
            alt={title}
            className="w-[290px] h-[290px] rounded-lg"
          />
        </figure>
        <div className="card-body w-[305px] p-0 pl-4 pb-[16px]">
          <h2 className="card-title text-[#001931] inter-font text-[18px] font-medium">
            {title}
          </h2>
          <div className="card-actions justify-between pt-[16px]">
            <div className="badge border-none rounded-sm w-[70px] h-[31px] bg-[#F1F5E8] flex items-center gap-1">
              <img
                src={downloadImg}
                className="w-[16px] h-[16px]"
                alt="downloads"
              />
              <p className="text-[#00D390] text-center">
                {(downloads / 1000000).toFixed(0)}M
              </p>
            </div>
            <div className="badge border-none rounded-sm w-[70px] h-[31px] bg-[#FFF0E1] flex items-center gap-1">
              <img
                src={ratingsImg}
                className="w-[16px] h-[16px]"
                alt="ratings"
              />
              <p className="text-center text-[#FF8811]">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Application;
