import React from "react";
import img from "../../../assets/gallery/8.jpg";
import { FaChevronCircleRight } from "react-icons/fa";

const BlogCard = ({ props }) => {
  return (
    <div className="rounded-md bg-white/80 text-black shadow-md">
      <img src={img} alt="img" className="h-24 w-full rounded-t-md object-cover" />
      <div className="flex flex-col gap-1 p-2">
        <span className="text-[8px] text-black/50">Nov 24, 2024</span>
        <h2 className="text-sm font-semibold capitalize">sejarah bola voli</h2>
        <p className="text-xs text-black/60">slug blog Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. </p>
        <button className="ms-auto flex w-fit items-center gap-1 rounded-md bg-[#22a09f] p-1 text-[8px] text-white">
          <span className="font-semibold capitalize">read more</span>
          <FaChevronCircleRight className="" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
