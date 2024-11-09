import { useState } from "react";

const ModalGallery = ({ children, visible, onClose }) => {
  return <div className={`fixed ${visible ? "bg-black/70" : "invisible"} inset-0 z-[99] flex flex-col items-center justify-center text-white`}>{children}</div>;
};

export default ModalGallery;
