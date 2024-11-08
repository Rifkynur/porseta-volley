import React from "react";
import { gallery } from "../../data/gallery";
import { img } from "framer-motion/client";

const Gallery = () => {
  return (
    <div>
      <h1 className="mb-4 text-center text-xl font-bold lg:text-2xl">Gallery</h1>
      <div className="p grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4">
        {gallery.map((data) => {
          return <img src={data.url} className="h-24 w-full cursor-pointer border object-cover shadow-md lg:h-[200px]" />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
