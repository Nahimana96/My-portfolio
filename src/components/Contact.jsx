import React from "react";
import Logo from "../reusable-ui/Logo";
import telephoneLogo from "../assets/icons/tel.png";
import mailLogo from "../assets/icons/mail.png";
const Contact = () => {
  return (
    <div className="text-center mt-7 md:mt-10" id="contact">
      <h1 className="text-2xl md:text-3xl mb-5 text-primary font-semibold">
        Contactez-moi
      </h1>
      <div className="bg-[#181824] md:p-8 p-2 rounded-3xl text-center">
        <div className="text-gray-300 font-semibold flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Logo imageSource={mailLogo} alt={"mail logo"} />
            <a
              href="mailto: mnahim024@gmail.com"
              className="hover:md:text-primary md:transition-colors duration-200"
            >
              mnahim024@gmail.com
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <Logo imageSource={telephoneLogo} alt={"telephone logo"} />
            <a
              href="tel:+33753238709"
              className="hover:md:text-primary md:transition-colors duration-200"
            >
              0753238709
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
