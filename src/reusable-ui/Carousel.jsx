import React, { useEffect, useState } from "react";

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
  // j'initialise l'index du tableau à zero à chaque fois que je ferme le block des détails
  useEffect(() => {
    length === 0 && setCurrentIndex(0);
  });

  return (
    <div className="rounded-2xl w-full h-full relative">
      <div className="h-full w-full">
        <img
          className="rounded-2xl h-full w-full md:object-cover"
          src={images[currentIndex]}
          alt={`présentation visuelle du site`}
        />
      </div>
      {totalImages !== 1 && (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow left-[2%]"
            onClick={goToPrevious}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="arrow right-[2%]"
            onClick={goToNext}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Carousel;
