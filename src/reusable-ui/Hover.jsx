import React from "react";
import Logo from "../reusable-ui/Logo";
import githubLogo from "../assets/icons/logo-github.png";
import details from "../assets/icons/details.png";
import { Link } from "react-scroll";

const Hover = ({ link, handleClick }) => {
  return (
    <div className="hover">
      <a href={link} target="_blank">
        <div className="flex justify-center items-center text-gray-300 gap-2 md:hover:scale-110 md:transition-transform md:duration-300">
          <Logo imageSource={githubLogo} alt={"github logo"} />
          <p>Code</p>
        </div>
      </a>
      <div
        onClick={handleClick}
        className="flex justify-center items-center text-gray-300 gap-2 cursor-pointer md:hover:scale-110 md:transition-transform md:duration-300"
      >
        <Logo imageSource={details} alt={"details icon"} />
        <p>Détails</p>
      </div>
    </div>
  );
};

export default Hover;
