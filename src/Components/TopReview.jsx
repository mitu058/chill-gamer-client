import React from 'react';
import { FaEye } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const TopReview = () => {
  const highest = useLoaderData();

 
  const topRatedGames = highest
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6); 

  return (
    <div className="my-20 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Top Rated Games</h1>
    
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto">
        {topRatedGames.map((game) => (
          <div
            key={game._id}
            className="space-y-4 rounded border p-6 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <img
              width={350}
              height={190}
              className="h-[190px] w-full rounded-2xl object-cover bg-gray-400"
              src={game.photo || 'https://via.placeholder.com/350x190'} // Default image if no photo
              alt={game.title}
            />
            <div className="space-y-2">
              <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
                {game.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Genre: {game.genre}</p>
              
            </div>
          <div className='flex justify-between items-center'>
          <p className="font-medium">Rating: {game.rating} / 10</p>
           <Link to={`/review/${game._id}`}>
           <button className="rounded-lg bg-slate-800 px-6 py-2 text-white hover:bg-slate-900 justify-end">
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
