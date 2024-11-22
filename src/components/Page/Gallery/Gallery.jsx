import { useState } from "react";
import { gallery } from "../../data/gallery";
import ModalGallery from "./ModalGallery";
import { IoCloseCircle } from "react-icons/io5";

const Gallery = () => {
  const [singleImg, setSingleImg] = useState(null);
  const [visible, setVisible] = useState(false);

  const chooseImg = (data) => {
    setVisible(true);
    setSingleImg(data);
  };
  return (
    <div>
      <h1 className="mb-4 text-center text-xl font-bold lg:text-2xl">Gallery</h1>
      <div className="p grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4">
        {gallery.map((data) => {
          return <img src={data?.url} key={data?.id} className="h-24 w-full cursor-pointer border object-cover shadow-md lg:h-[200px]" onClick={() => chooseImg(data)} />;
        })}
        <ModalGallery visible={visible}>
          <button className="me-4 ms-auto lg:me-20" onClick={() => setVisible(false)}>
            <IoCloseCircle className="size-6 lg:size-8" />
          </button>
          <img src={singleImg?.url} alt="img" className="h-52 w-[80%] object-cover lg:h-[500px]" />
        </ModalGallery>
      </div>
    </div>
  );
};

export default Gallery;
