import React from "react";

const Button = ({ children, onClick, type }) => {
  return (
    <button type={type} className="flex w-fit items-center gap-2 rounded-full border border-secondary bg-secondary px-3 py-2 font-bold text-primary duration-200 hover:border hover:border-secondary hover:bg-primary hover:text-secondary lg:px-6">
      {children}
    </button>
  );
};

export default Button;
