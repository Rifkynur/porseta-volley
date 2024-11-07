import React from "react";
import Img1 from "../../../assets/detailPlayer/detail1.png";
import { players } from "../../data/player";
import { useParams } from "react-router-dom";

const Detailplayer = () => {
  const { id } = useParams();
  const filteredData = players.filter((item) => item.id === Number(id));

  console.log(filteredData);

  return (
    <>
      {filteredData.map((data) => {
        return (
          <div className="flex flex-col md:flex-row" key={data.id}>
            <div className="relative flex h-64 items-center justify-end bg-secondary md:h-screen md:w-[35%] md:justify-start">
              <p className="mt-8 px-2 font-fjalla text-9xl text-shadow-md md:px-0 md:text-[150px] lg:px-8 lg:text-[200px]">{data.number}</p>
              <img src={data.detailImg} alt="img" className="absolute right-[50%] top-[50%] w-[50%] translate-x-[-10%] object-cover md:right-[-60%] md:w-full md:translate-y-[-50%] lg:right-[-50%] lg:top-[60%] lg:h-[450px] lg:object-contain" />
            </div>
            <div className="md:ps- flex h-full flex-col gap-4 py-8 ps-44 md:h-screen md:w-full md:justify-center">
              <h1 className="font-fjalla text-4xl font-bold capitalize md:text-[50px] md:leading-[50px] md:tracking-wide lg:md:leading-[70px] lg:text-[72px]">{data.firstName}</h1>
              <h2 className="font-fjalla text-4xl font-bold capitalize md:text-[50px] md:leading-[50px] md:tracking-wide lg:md:leading-[70px] lg:text-[72px]">{data.lastName}</h2>
              <p className="text-xl text-slate-50/50">
                Position - <span className="font-semibold capitalize text-white">{data.position}</span>
              </p>
              <p className="text-xl text-slate-50/50">
                Height - <span className="font-semibold text-white">{data.height}</span>{" "}
              </p>
              <p className="text-xl text-slate-50/50">
                Weight - <span className="font-semibold text-white">{data.weight}</span>
              </p>
              <p className="text-xl text-slate-50/50">
                DOB - <span className="font-semibold capitalize text-white">{data.dob}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Detailplayer;
