import React, { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    {
      image: "https://i.ibb.co/sgx6FGD/adventure.jpg",
      title: "Epic Adventure Awaits",
      description: "Join a thrilling adventure in mystical lands. Explore, battle, and uncover hidden secrets!",
    },
    {
      image: "https://i.ibb.co/dPXBBNj/rpg.jpg",
      title: "RPG: Shape Your Destiny",
      description: "Dive deep into a world of magic and combat. Customize your character and become a hero!",
    },
    {
      image: "https://i.ibb.co/LpZMzyf/dom.jpg",
      title: "Master the Game of Dominoes",
      description: "Challenge friends and sharpen your strategy skills in this classic board game!",
    },
    {
      image: "https://i.ibb.co/Vq1DFSw/pubg-battlegrounds-9i69f.jpg",
      title: "Battle Royale: PUBG",
      description: "Fight for survival in this intense, fast-paced battle royale game. Be the last one standing!",
    },
    {
      image: "https://i.ibb.co/z6zXCN4/forntnight.jpg",
      title: "Fortnite: The Ultimate Battle",
      description: "Build, shoot, and survive in this popular multiplayer online battle royale game!",
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
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
      {/* Left arrow */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
        </svg>
      </button>
      {/* Right arrow */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-50 right-3 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselImages.map((img, idx) => (
          <button
            key={`${img}_${idx}`}
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
        {/* Slides */}
        {carouselImages.map((slide, idx) => (
          <div key={slide.image} className="relative min-w-full">
            {/* Image */}
            <img
              src={slide.image}
              className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
              alt={`Slider - ${idx + 1}`}
            />
            {/* Text Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 py-2 bg-opacity-50 bg-black rounded-md">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
