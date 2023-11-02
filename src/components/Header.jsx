import React, { useState } from "react";
import { Link, scroll } from "react-scroll";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Header = () => {
  let Links = [
    { name: "À propos", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projets", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-7xl md:mt-10">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl flex items-center gap-1">
          <span className="text-primary">MHN.</span>
        </div>
        {/* Mobile Menu icons */}
        <div
          onClick={() => setOpen(!open)}
          className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-gray-300 absolute"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Nav Link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute left-0 md:static md:z-auto z-10 w-screen md:w-auto mt-4 md:pl-0 pl-9 bg-slate-400/20 sm:bg-transparent transition-all duration-500 ${
            open ? "top-[40px]" : "top-[-768px]"
          }`}
        >
          {Links.map((link, index) => (
            <motion.li
              key={link.name}
              className="md:ml-8 md:my-0 my-7 font-semibold cursor-pointer"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-gray-300 transition-all duration-500 hover:text-primary"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
