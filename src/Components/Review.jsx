import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import { Typewriter } from 'react-simple-typewriter';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    genre: ' RPG',
    review: 'An incredible Action RPG with stunning graphics and an engaging storyline. A must-play for all gamers!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    genre: 'Adventure',
    review: 'The gameplay mechanics in this Adventure game are smooth, but I found the story a bit lacking in depth.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Robert Brown',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    genre: ' RPG',
    review: 'Loved the open-world experience in this Action RPG! It’s so immersive and packed with exciting quests.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily White',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    genre: 'Adventure',
    review: 'A decent Adventure game with a good mix of action and exploration, though the difficulty could be better balanced.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Michael Green',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    genre: 'Sports',
    review: 'One of the best Sports games I’ve ever played. Great fun with friends!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lisa Black',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    genre: 'Adventure',
    review: 'The visuals are amazing in this Adventure game, but the gameplay felt repetitive after a while.',
    rating: 3,
  },
  {
    id: 7,
    name: 'David Blue',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    genre: 'Sports',
    review: 'A good Sports game overall, but the controls could be more intuitive.',
    rating: 3,
  },
  {
    id: 8,
    name: 'Sarah Gray',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    genre: ' RPG',
    review: 'Absolutely loved the soundtrack and character design in this Action RPG. Truly a masterpiece!',
    rating: 5,
  },
];

const Review = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="my-20 px-6 w-[90%] mx-auto">
        <p className="text-purple-700 pb-16 font-bold text-3xl text-center uppercase ">
        <Typewriter
                className=" font-bold mb-4 text-primary"
                words={["What Our Gamers Say ?"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={800}
              />
        </p>
         
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
          >
            <div className="flex items-center mb-2">
              <img
                src={review.image}
                alt={`Profile picture of ${review.name}`}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.genre}</p>
                <p className="mb-2">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-500">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, index) => (
                    <span key={index} className="text-gray-300">★</span>
                  ))}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
