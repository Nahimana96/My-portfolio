import React from "react";
import heroImage from "../assets/hero-image.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="px-7 md:px-10 my-14 md:h-[80vh] bg-[#1a1a29]" id="home">
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        {/* text */}
        <div className="text-gray-300 md:flex md:flex-col mb-8">
          <h6 className="text-3xl mt-12">Salut, je suis</h6>
          <h1 className="font-semibold text-3xl md:text-5xl my-4">
            Moussa Hassan <br />
            Nahimana
          </h1>
          <h2 className="md:w-96 md:text-3xl text-xl font-bold text-gray-400">
            Développeur Frontend
          </h2>
          {/* button */}
          <div className="mt-5">
            <a
              href="https://cvdesignr.com/p/64edb1895a7b3?hl=en_GB"
              target="_blank"
            >
              <button className="btn bg-primary py-2 px-4 text-gray-300 font-semibold rounded-3xl hover:bg-gray-300 hover:text-primary hover:transition-all hover:duration-300 transition-all duration-200">
                Mon CV
              </button>
            </a>
            <Link to="projects" smooth={true} spy={true}>
              <button className="btn outline px-6 py-1.5 rounded-3xl font-semibold border-none text-gray-300 ml-5">
                Projets
              </button>
            </Link>
            {/* social icons */}
          </div>
        </div>

        {/* image */}
        <div className="md:w-[40%] order-first md:order-last">
          <img src={heroImage} alt="mon portrait" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
