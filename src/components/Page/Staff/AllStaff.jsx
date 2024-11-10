import React from "react";
import { players } from "../../data/player";
import Corner from "../../../assets/home/corner.png";
import { Link } from "react-router-dom";
import { staff } from "../../data/staff";

const AllStaff = () => {
  return (
    <>
      <h1 className="text-shad relative z-10 mt-8 text-center text-xl font-bold bg-blend-color text-shadow lg:text-4xl">Meet Our Staff</h1>
      <img src={Corner} alt="corner" className="absolute left-0 top-0 z-0" />
      <div className="relative z-10 mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-y-12">
        {staff.map((item) => {
          return (
            <div key={item.id}>
              <Link className="flex flex-col items-center gap-2 lg:gap-4" to={`/staff/${item.id}`}>
                <img src={item.img} className="h-40 object-cover lg:h-[250px]" />
                <h2 className="text-colorText font-semibold text-shadow-md lg:text-lg">{item.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllStaff;
