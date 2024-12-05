import React, { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    {
      url: "https://i.ibb.co.com/sgx6FGD/adventure.jpg",
    
    },
    {
      url: "https://i.ibb.co.com/dPXBBNj/rpg.jpg",
    
    },
    {
      url: "https://i.ibb.co.com/LpZMzyf/dom.jpg",
     
    },
    {
      url: "https://i.ibb.co.com/Vq1DFSw/pubg-battlegrounds-9i69f.jpg",
     
      buttonText: "Visit Us",
    },
    {
      url: "https://i.ibb.co.com/z6zXCN4/forntnight.jpg",
      
      buttonText: "Get Started",
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-4/5 w-full relative overflow-hidden">
      {/* Arrow left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        {/* Left arrow SVG */}
      </button>

      {/* Arrow right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-50 right-3 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        {/* Right arrow SVG */}
      </button>

      {/* Dots */}
      <div className="flex justify-center items-center absolute bottom-4 w-full gap-1 z-50">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlider(idx)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === idx ? "w-8" : "w-2"
            } h-2`}
          ></button>
        ))}
      </div>

      {/* Carousel container */}
      <div
        className="ease-linear duration-500 flex transform-gpu"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {carouselImages.map((slide, idx) => (
          <div
            key={idx}
            className="relative min-w-full h-60 sm:h-96 md:h-[540px]"
          >
            <img
              src={slide.url}
              className="absolute w-full h-full object-cover"
              alt={`Slider - ${idx + 1}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white px-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm md:text-base text-center mb-4">
                {slide.description}
              </p>
              <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
