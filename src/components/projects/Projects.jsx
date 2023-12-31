import React, { useState } from "react";
import { projects } from "../../data/projects";
import Hover from "../../reusable-ui/Hover";
import Modal from "./Modal";
import { motion } from "framer-motion";
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};
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
        <div className="lg:grid flex flex-col gap-3 lg:grid-cols-2 lg:gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative mb-6"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <img
                src={project.cover}
                alt={`couverture du site ${project.title}`}
                className="h-[90%] rounded-xl object-cover"
              />
              <p className="text-gray-300 pt-3 hidden lg:block">
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
            </motion.div>
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
