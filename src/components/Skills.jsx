import React from "react";
import reactLogo from "../assets/icons/react.png";
import sassLogo from "../assets/icons/sass.png";
import JsLogo from "../assets/icons/JS.png";
import mongodbLogo from "../assets/icons/mongodb.png";
import nodeLogo from "../assets/icons/node.png";
import tailwindLogo from "../assets/icons/tailwind.png";
import cssLogo from "../assets/icons/css.png";
import styledComponent from "../assets/icons/styled-component.png";
import htmlLogo from "../assets/icons/html.png";
import expressLogo from "../assets/icons/express.png";
import Logo from "../reusable-ui/Logo";

const Skills = () => {
  return (
    <div className="mt-4 md:mt-8 text-center" id="skills">
      {/* title */}
      <div className="text-center mb-5">
        <h2 className="text-primary text-xl">Explorer mes</h2>
        <h1 className=" text-2xl md:text-3xl text-primary font-semibold ">
          Compétences
        </h1>
      </div>
      {/* block de compétences */}
      <div className="flex md:grid md:grid-cols-2 md:gap-6 flex-col w-full">
        <div className=" p-8 bg-[#181824] mb-6 md:mb-0 rounded-3xl">
          <h1 className="text-2xl text-gray-400 align-middle pb-5">Frontend</h1>
          {/* listes de skills frontend*/}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <Logo imageSource={reactLogo} alt={"react logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">React</p>
            </div>
            <div className="flex items-center">
              <Logo imageSource={htmlLogo} alt={"html logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">html</p>
            </div>
            <div className="flex items-center">
              <Logo imageSource={cssLogo} alt={"css logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">Css</p>
            </div>
            <div className="flex items-center">
              <Logo imageSource={sassLogo} alt={"sass logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">Sass</p>
            </div>
            <div className="flex items-center">
              <Logo imageSource={JsLogo} alt={"Js logo"} />
              <p className="md:pl-5 pl-2md: text-lg text-gray-400">
                Javascript
              </p>
            </div>
            <div className="flex items-center">
              <Logo imageSource={tailwindLogo} alt={"tailwind logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">Tailwind</p>
            </div>
            <div className="flex items-center">
              <Logo
                imageSource={styledComponent}
                alt={"styledComponent logo"}
              />
              <p className="md:pl-5 pl-2md: md:text-lg text-gray-400">
                Styled component
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-[#181824] rounded-3xl">
          <h1 className="text-2xl text-gray-400 align-middle pb-5">Backend</h1>
          {/* listes de skills backend*/}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <Logo imageSource={nodeLogo} alt={"NodeJS logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">Node JS</p>
            </div>
            <div className="flex items-center">
              <Logo imageSource={mongodbLogo} alt={"mongoDB logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">Mongo DB</p>
            </div>
            <div className="flex items-center">
              <Logo imageSource={expressLogo} alt={"expressJs logo"} />
              <p className="md:pl-5 pl-2 md:text-lg text-gray-400">
                Express JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
