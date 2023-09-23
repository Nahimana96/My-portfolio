import React from "react";
import Carousel from "../../reusable-ui/Carousel";

const Modal = ({ projectToDisplay, setProjectToDisplay }) => {
  return (
    <div className="md:fixed absolute md:w-screen w-full md:h-screen h-full top-0 left-0 bg-black/70 flex justify-center items-center">
      <div className=" relative xl:w-[60%] md:w-[85%] md:h-[85%] flex flex-col items-center p-6 py-10 md:pt-6 gap-5 md:bg-gray-300 bg-gray-300 z-30 rounded-lg overflow-y-auto">
        <div className="xl:w-[80%] md:w-[90%] sm:w-[100%] h-[25%] md:h-[50%] xl:h-[60%] mt-8">
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
          <p className="pt-4">
            <span className="text-primary font-semibold">Défi: </span>{" "}
            {projectToDisplay.description.challenge
              ? projectToDisplay.description.challenge
              : "Aucun"}
          </p>
          <p className="pt-3">
            <span className="text-primary font-semibold">Outils: </span>
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
  );
};

export default Modal;
