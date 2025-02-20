import React from "react";
import { FaEye } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const TopReview = () => {
  const highest = useLoaderData();

  const topRatedGames = highest.sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <div className="my-20 px-4 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4 text-purple-700">
        <Typewriter
          className="text-4xl font-bold mb-4 text-primary"
          words={[" Discover the Top Rated Games Loved by Gamers Worldwide."]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={800}
        />
      </h1>
      <p className="text-center mb-12">
        Explore the ultimate collection of top-rated games that define
        excellence in gaming. From immersive worlds to groundbreaking gameplay, <br />
        these titles have set the standard for unforgettable experiences.
        Discover why they are celebrated by gamers everywhere!
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {topRatedGames.map((game) => (
          <div
            key={game._id}
            className="space-y-4 hover:scale-105 transition bg-white  rounded-md border p-4 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <img
              width={350}
              height={190}
              className="h-[160px] w-full rounded-2xl object-cover bg-gray-400"
              src={game.photo || "https://via.placeholder.com/350x190"} // Default image if no photo
              alt={game.title}
            />
            <div className="space-y-2">
              <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
                {game.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Genre: {game.genre}
              </p>
              <p className="font-medium pb-3 text-gray-600">Rating: {game.rating} / 10</p>
              <Link to={`/review/${game._id}`}>
                <button className="rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 px-6 py-2 text-white hover:bg-slate-900 justify-end">
                  Explore Details
                </button>
              </Link>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopReview;
