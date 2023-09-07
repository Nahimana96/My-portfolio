import React from "react";

const Logo = ({ imageSource, alt }) => {
  return (
    <div className=" w-[24px] h-[24px] md:w-[36px] md:h-[36px] ml-3 cursor-pointer">
      <img
        className="w-[100%] h-[100%] object-contain"
        src={imageSource}
        alt={alt}
      />
    </div>
  );
};

export default Logo;
