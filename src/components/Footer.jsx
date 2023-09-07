import React from "react";
import Logo from "../reusable-ui/Logo";
import githubIcon from "../assets/icons/logo-github.png";
import linkedinIcon from "../assets/icons/logo-linkedin.png";
const Footer = () => {
  return (
    <div className="bg-[#181824] md:p-8 p-2 rounded-3xl flex flex-col justify-center items-center mt-4 md:mt-8">
      <div className="md:my-10 my-7 flex justify-between items-center">
        <a
          href="https://www.linkedin.com/in/moussa-hassan-nahimana-601813176/"
          target="_blank"
          className="md:hover:scale-110 md:transition-transform md:duration-200"
        >
          <Logo imageSource={linkedinIcon} alt={"logo linkedin"} />
        </a>
        <a
          href="https://github.com/Nahimana96"
          target="_blank"
          className="md:hover:scale-110 md:transition-transform md:duration-200"
        >
          <Logo imageSource={githubIcon} alt={"logo github"} />
        </a>
      </div>
      <div className="text-gray-300 font-medium text-center">
        <p>© Copyright 2023 - Moussa Hassan N. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
