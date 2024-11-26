import React from "react";
import Corner from "../../../assets/home/corner.png";
import { Link } from "react-router-dom";
import { staff } from "../../data/staff";

const AllStaff = () => {
  return (
    <>
      <div className="relative z-10 mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-y-12">
        {staff.map((item) => {
          return (
            <div key={item.id}>
              <Link className="flex flex-col items-center gap-2 lg:gap-4" to={`/player/staff/${item.id}`}>
                <img src={item.img} className="h-40 object-cover lg:h-[250px]" />
                <h2 className="font-semibold text-colorText text-shadow-md lg:text-lg">{item.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllStaff;
