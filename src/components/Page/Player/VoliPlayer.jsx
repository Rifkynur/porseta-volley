import React from "react";
import { volleyPlayers } from "../../data/volleyPlayer";
import { Link } from "react-router-dom";

const VoliPlayer = () => {
  return (
    <div className="relative z-10 mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-y-12">
      {volleyPlayers.map((item) => {
        return (
          <div key={item.id}>
            <Link className="flex flex-col items-center gap-2 lg:gap-4" to={`/player/${item?.id}`}>
              <img src={item?.img} alt={"player"} className="h-40 w-full object-contain lg:h-[250px]" />
              <h2 className="font-semibold text-colorText text-shadow-md lg:text-lg">{item?.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VoliPlayer;
