import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const Carousel = ({ images, length }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };
  // j'initialise l'index du tableau à zero à chaque fois que je ferme la modale
  useEffect(() => {
    length === 0 && setCurrentIndex(0);
  }, [length]);

  return (
    <div className="rounded-2xl w-full h-full relative">
      <div className="h-full w-full">
        <img
          className="rounded-2xl h-full w-full object-fill"
          src={images[currentIndex]}
          alt={`rendu visuelle du site`}
        />
      </div>
      {totalImages !== 1 && (
        <div>
          <BsFillArrowLeftCircleFill
            onClick={goToPrevious}
            className="arrow left-[2%]"
          />
          <BsFillArrowRightCircleFill
            onClick={goToNext}
            className="arrow right-[2%]"
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
