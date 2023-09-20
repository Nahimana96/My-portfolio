import React, { useState } from "react";
import { projects } from "../../data/projects";
import Hover from "../../reusable-ui/Hover";
import Modal from "./Modal";

const Projects = () => {
  // le projet à afficher dans la modale
  // initialement c'est un tableau vide
  let [projectToDisplay, setProjectToDisplay] = useState([]);

  return (
    <div className="mt-4 md:mt-8 text-center" id="projects">
      <h1 className=" text-2xl md:text-3xl mb-5 text-primary font-semibold">
        Mes projets
      </h1>
      <div className="bg-[#181824] md:p-8 p-2 rounded-3xl relative">
        <div className="md:grid flex flex-col gap-3 md:grid-cols-2 md:gap-3">
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

              {/* Hover c'est le composant qui s'affiche au survol d'un projet */}
              {/* le handleClick permettra d'afficher la modale avec à l'intérieur */}
              {/* les détails du projet concerné */}
              <Hover
                handleClick={() => setProjectToDisplay(project)}
                link={project.githubLink}
              />
            </div>
          ))}

          {/* la modale qui affiche les détails du projet*/}
          {/* Elle s'affichera uniquement lorsque la longueur 
      de projetctToDisplay
        n'est pas 0 */}
          {projectToDisplay.length !== 0 && (
            <Modal
              projectToDisplay={projectToDisplay}
              setProjectToDisplay={setProjectToDisplay}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
