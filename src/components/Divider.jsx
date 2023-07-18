import React from 'react';
import imgtitle from "../assets/title_img.svg";

const Divider = () => {
  return (
      <div className="flex justify-center">
      <img className="pb-6 w-[80px]" src={imgtitle} alt="imagtilte" />
    </div>
  );
};

export default Divider;
