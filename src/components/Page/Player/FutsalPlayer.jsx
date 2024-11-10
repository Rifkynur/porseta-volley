import React from "react";
import { Link } from "react-router-dom";
import { futsalPlayer } from "../../data/futsalPlayer";

const FutsalPlayer = () => {
  return (
    <div className="relative z-10 mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-y-12">
      {futsalPlayer.map((item) => {
        return (
          <div key={item.id}>
            <Link className="flex flex-col items-center gap-2 lg:gap-4" to={`/player/futsal/${item.id}`}>
              <img src={item.img} className="h-40 object-cover lg:h-[250px]" />
              <h2 className="text-colorText font-semibold text-shadow-md lg:text-lg">{item.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FutsalPlayer;
