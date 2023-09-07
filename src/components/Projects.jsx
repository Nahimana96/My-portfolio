import React, { useState } from "react";
import { projects } from "../data/projects";
import Hover from "../reusable-ui/Hover";
import Carousel from "../reusable-ui/Carousel";

const Projects = () => {
  let [project, setProject] = useState([]);

  return (
    <div className="mt-4 md:mt-8 text-center" id="projects">
      <h1 className=" text-2xl md:text-3xl mb-5 text-primary font-semibold">
        Mes projets
      </h1>
      <div className="bg-[#181824] md:p-8 p-2 rounded-3xl">
        <div className="md:grid flex flex-col gap-3 md:grid-cols-2 md:gap-3 relative">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <img
                src={project.cover}
                alt={`couverture du site ${project.title}`}
                className="h-full rounded-xl object-cover"
              />
              {/* hover section */}
              {/* Au click, je change la valeur de l'état "project" */}
              {/* je lui affecte les données de l'objet cliqué */}
              <Hover
                handleClick={() => setProject(project)}
                link={project.githubLink}
              />
            </div>
          ))}
          {/* le block d'affichage des détails */}
          {/* Il s'affichera uniquement lorsque la longueur du tableau n'est pas 0 */}
          <div
            className={`absolute flex flex-col items-center p-6 pt-10 md:pt-6 gap-5 bg-gray-300 w-full h-full top-0 left-0 z-30 rounded-lg overflow-y-auto ${
              project.length === 0 && "hidden"
            } transition duration-500 ease-out`}
          >
            <div className=" md:w-[75%] w-full h-[25%] md:h-[70%] ">
              {/* je passe au composant "Carousel" le tableau des images à afficher si elles existent */}
              {/* Je lui passe aussi un tableau vide au cas où project.images sera "false" */}
              <Carousel images={project.images || []} length={project.length} />
            </div>
            <div className="flex flex-col md:w-[60%]">
              <h1 className="text-2xl font-semibold text-primary pb-2">
                {project.description ? project.description.title : ""}
              </h1>
              <p>{project.description ? project.description.text : ""}</p>
              <p className="pt-3">
                <span className="text-primary font-semibold">Les outils: </span>
                {project.description ? project.description.tools : ""}
              </p>
            </div>
            {/* L'icône X pour fermer le block au click */}
            <div
              className={`absolute z-50 right-5 top-3 cursor-pointer ${
                project.length === 0 && "hidden"
              }`}
              onClick={() => setProject([])}
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
