import React from "react";
import { volleyPlayers } from "../../data/volleyPlayer";
import { useParams } from "react-router-dom";
import { FaInstagram, FaTiktok, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Detailplayer = () => {
  const { id } = useParams();
  const filteredData = volleyPlayers.filter((item) => item.id === Number(id));

  return (
    <>
      {filteredData.map((data) => {
        return (
          <div className="flex flex-col md:flex-row" key={data.id}>
            <div className="relative flex h-64 items-center justify-end bg-secondary md:h-screen md:w-[35%] md:justify-start">
              <p className="mt-8 px-2 font-fjalla text-9xl text-colorText text-shadow-md md:px-0 md:text-[150px] lg:px-8 lg:text-[200px]">{data.number}</p>
              <img src={data.detailImg} alt="img" className="absolute right-[50%] top-[50%] h-[500px] w-[50%] translate-x-[-10%] object-contain md:right-[-60%] md:w-full md:translate-y-[-50%] lg:right-[-50%] lg:top-[60%] lg:h-[450px] lg:object-contain" />
            </div>
            <div className="md:ps- flex h-full flex-col gap-4 py-8 ps-44 md:h-screen md:w-full md:justify-center">
              <h1 className="font-fjalla text-4xl font-bold capitalize text-colorText md:text-[50px] md:leading-[50px] md:tracking-wide lg:md:leading-[70px] lg:text-[72px]">{data.firstName}</h1>
              <h2 className="font-fjalla text-4xl font-bold capitalize text-colorText md:text-[50px] md:leading-[50px] md:tracking-wide lg:md:leading-[70px] lg:text-[72px]">{data.lastName}</h2>
              <p className="text-xl text-slate-50/50">
                Position - <span className="font-semibold capitalize text-colorText">{data.position}</span>
              </p>
              <p className="text-xl text-slate-50/50">
                Height - <span className="font-semibold text-colorText">{data.height}</span>{" "}
              </p>
              <p className="text-xl text-slate-50/50">
                Weight - <span className="font-semibold text-colorText">{data.weight}</span>
              </p>
              <p className="text-xl text-slate-50/50">
                DOB - <span className="font-semibold capitalize text-white">{data.dob}</span>
              </p>
              <div className="flex gap-4">
                {data.instagram.length > 0 && (
                  <Link target="_blank" to={data.instagram}>
                    <FaInstagram className="size-6" />
                  </Link>
                )}
                <Link target="_blank">
                  <FaTiktok className="size-6" />
                </Link>
                <Link target="_blank">
                  <FaFacebookSquare className="size-6" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Detailplayer;
