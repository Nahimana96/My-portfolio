import React, { useState } from "react";
import { projects } from "../data/projects";
import Hover from "../reusable-ui/Hover";
import Carousel from "../reusable-ui/Carousel";
import { Link } from "react-scroll";

const Projects = () => {
  // le projet à afficher dans la modale
  // initialement son contenu est vide
  let [projectToDisplay, setProjectToDisplay] = useState([]);

  return (
    <div className="mt-4 md:mt-8 text-center" id="projects">
      <h1 className=" text-2xl md:text-3xl mb-5 text-primary font-semibold">
        Mes projets
      </h1>
      <div className="bg-[#181824] md:p-8 p-2 rounded-3xl">
        <div className="md:grid flex flex-col gap-3 md:grid-cols-2 md:gap-3 relative">
          {projects.map((project) => (
            <div key={project.id} className="relative mb-6">
              <img
                src={project.cover}
                alt={`couverture du site ${project.title}`}
                className="h-[90%] rounded-xl object-cover"
              />
              <p className="text-gray-300 pt-3 hidden md:block">
                <span className="text-primary font-semibold">Outils: </span>
                {project.description.tools}
              </p>
              {/* hover section */}
              {/* Au click, je change le contenu du projet à afficher dans la modale */}
              {/* je lui affecte les données de l'objet cliqué */}

              <Hover
                handleClick={() => setProjectToDisplay(project)}
                link={project.githubLink}
              />
            </div>
          ))}
          {/* la modale qui affiche les détails */}
          {/* Elle s'affichera uniquement lorsque la longueur du tableau n'est pas 0 */}
          <div
            className={`absolute flex flex-col items-center p-6 pt-10 md:pt-6 gap-5 bg-gray-300 w-full  top-[50%] translate-y-[-50%]  z-30 rounded-lg overflow-y-auto ${
              projectToDisplay.length === 0 && "hidden"
            } transition duration-500 ease-out`}
            id="modale"
          >
            <div className=" md:w-[80%] w-full h-[25%] md:h-[55%] mt-8">
              {/* je passe au composant "Carousel" le tableau des images à afficher si elles existent */}
              {/* Je lui passe aussi un tableau vide au cas où "projectToDisplay.images" sera "false" */}
              <Carousel
                images={projectToDisplay.images || []}
                length={projectToDisplay.length}
              />
            </div>
            <div className="flex flex-col md:w-[60%]">
              <h1 className="text-2xl font-semibold text-primary pb-2">
                {projectToDisplay.description
                  ? projectToDisplay.description.title
                  : ""}
              </h1>
              <p>
                {projectToDisplay.description
                  ? projectToDisplay.description.text
                  : ""}
              </p>
              <p className="pt-3">
                <span className="text-primary font-semibold">Les outils: </span>
                {projectToDisplay.description
                  ? projectToDisplay.description.tools
                  : ""}
              </p>
            </div>
            {/* L'icône X pour fermer la modale au click */}
            {/* Le contenu de projectToDisplay sera vidé au clic pour faire disparaître la modale */}
            <div
              className={`absolute z-50 right-5 top-3 cursor-pointer ${
                projectToDisplay.length === 0 && "hidden"
              }`}
              onClick={() => setProjectToDisplay([])}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 md:w-8 h-6 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
