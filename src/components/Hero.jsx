import React from "react";
import heroImage from "../assets/hero-image.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const leftSideAnimation = {
  initial: {
    opacity: 0,
    x: "-300",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
const rightSideAnimation = {
  initial: {
    opacity: 0,
    scale: 0.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
    },
  },
};
const Hero = () => {
  return (
    <div className="px-7 md:px-10 my-14 md:h-[80vh] bg-[#1a1a29]" id="home">
      <div className="w-full flex flex-col md:flex-row items-center justify-around">
        {/* text */}
        <div className="text-gray-300 md:flex md:flex-col mb-8">
          <motion.h6
            variants={leftSideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl mt-12"
          >
            Hello, je suis
          </motion.h6>
          <motion.h1
            className="font-semibold text-3xl md:text-5xl my-4"
            variants={leftSideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Moussa Hassan <br />
            Nahimana
          </motion.h1>
          <motion.h2
            className="md:w-96 md:text-3xl text-xl font-bold text-gray-400"
            variants={leftSideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Développeur FullStack
          </motion.h2>
          {/* button */}
          <motion.div
            className="mt-5"
            variants={leftSideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="https://cvdesignr.com/p/65280ed247d65" target="_blank">
              <motion.button className="btn bg-primary py-2 px-4 text-gray-300 font-semibold rounded-3xl hover:bg-gray-300 hover:text-primary hover:transition-all hover:duration-300 transition-all duration-200">
                Mon CV
              </motion.button>
            </a>
            <Link to="projects" smooth={true} spy={true}>
              <button className="btn outline px-6 py-1.5 rounded-3xl font-semibold border-none text-gray-300 ml-5">
                Projets
              </button>
            </Link>
            {/* social icons */}
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          className="md:w-[40%] order-first md:order-last"
          variants={rightSideAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img src={heroImage} alt="mon portrait" className="object-contain" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
