import React from "react";
import { useParams } from "react-router-dom";
import { FaInstagram, FaTiktok, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { futsalPlayer } from "../../data/futsalPlayer";

const DetailFutsalPlayer = () => {
  const { id } = useParams();
  const filteredData = futsalPlayer.filter((item) => item.id === Number(id));
  return (
    <>
      {filteredData.map((data) => {
        return (
          <div className="flex flex-col md:flex-row" key={data.id}>
            <div className="relative flex h-64 items-center justify-end bg-secondary md:h-screen md:w-[35%] md:justify-start">
              <p className="text-colorText mt-8 px-2 font-fjalla text-9xl text-shadow-md md:px-0 md:text-[150px] lg:px-8 lg:text-[200px]">{data.number}</p>
              <img src={data.detailImg} alt="img" className="absolute right-[50%] top-[50%] h-[500px] w-[50%] translate-x-[-10%] object-contain md:right-[-60%] md:w-full md:translate-y-[-50%] lg:right-[-50%] lg:top-[60%] lg:h-[450px] lg:object-contain" />
            </div>
            <div className="md:ps- flex h-full flex-col gap-4 py-8 ps-44 md:h-screen md:w-full md:justify-center">
              <h1 className="text-colorText font-fjalla text-4xl font-bold capitalize md:text-[50px] md:leading-[50px] md:tracking-wide lg:md:leading-[70px] lg:text-[72px]">{data.firstName}</h1>
              <h2 className="text-colorText font-fjalla text-4xl font-bold capitalize md:text-[50px] md:leading-[50px] md:tracking-wide lg:md:leading-[70px] lg:text-[72px]">{data.lastName}</h2>
              <p className="text-xl text-slate-50/50">
                Position - <span className="text-colorText font-semibold capitalize">{data.position}</span>
              </p>
              <p className="text-xl text-slate-50/50">
                Height - <span className="text-colorText font-semibold">{data.height}</span>{" "}
              </p>
              <p className="text-xl text-slate-50/50">
                Weight - <span className="text-colorText font-semibold">{data.weight}</span>
              </p>
              <p className="text-xl text-slate-50/50">
                DOB - <span className="font-semibold capitalize text-white">{data.dob}</span>
              </p>
              <div className="flex gap-4">
                <Link target="_blank">
                  <FaInstagram />
                </Link>
                <Link target="_blank">
                  <FaTiktok />
                </Link>
                <Link target="_blank">
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailFutsalPlayer;
