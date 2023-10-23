import React from "react";
import Logo from "./Logo";

const Skill = ({ logo, alt, text }) => {
  return (
    <div className="flex items-center">
      <Logo imageSource={logo} alt={alt} />
      <p className="md:pl-5 pl-2 md:text-lg text-gray-400">{text}</p>
    </div>
  );
};

export default Skill;
