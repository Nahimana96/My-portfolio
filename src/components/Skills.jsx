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
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./projects/Projects";
import Skill from "../reusable-ui/Skill";

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
      <div className="flex lg:grid lg:grid-cols-2 lg:gap-6 flex-col w-full">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className=" p-8 bg-[#181824] mb-6 lg:mb-0 rounded-3xl"
        >
          <h1 className="text-2xl text-gray-400 align-middle pb-5">Frontend</h1>
          {/* listes de skills frontend*/}
          <div className="grid grid-cols-2 gap-8">
            <Skill logo={reactLogo} alt="react logo" text="React Js" />
            <Skill logo={htmlLogo} alt="Html logo" text="Html" />
            <Skill logo={cssLogo} alt="CSS logo" text="CSS" />
            <Skill logo={sassLogo} alt="Sass logo" text="Sass" />
            <Skill logo={JsLogo} alt="Javascript logo" text="Javascript" />
            <Skill logo={tailwindLogo} alt="Tailwind logo" text="Tailwind" />
            <Skill
              logo={styledComponent}
              alt="styled-component logo"
              text="Styled-component"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.5}
          className="p-8 bg-[#181824] rounded-3xl"
        >
          <h1 className="text-2xl text-gray-400 align-middle pb-5">Backend</h1>
          {/* listes de skills backend*/}
          <div className="grid grid-cols-2 gap-8">
            <Skill logo={nodeLogo} alt="Node logo" text="Node Js" />
            <Skill logo={mongodbLogo} alt="MongoDB logo" text="Mongo DB" />
            <Skill logo={expressLogo} alt="Express Js logo" text="Express Js" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
