import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const reviewdetails = useLoaderData();
  const { name, title, genre, email, rating, review, photo } = reviewdetails;


  const handleAddToWatchlist = (e) => {
    e.preventDefault();

    // Use loader data directly to create the watchlist item
    const watchlistItem = { title, genre, rating, name, email, photo, review };
    console.log("Add to watchlist", watchlistItem);

    fetch("https://chill-gamer-server-beta.vercel.app/watchlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(watchlistItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("review saved to database", data);
        if (data.insertedId) {
          alert("Added to Watchlist successfully!");
        }
      });
  };




  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="relative w-full max-w-4xl mb-10">
        <img
          src={photo}
          alt={`${name} Banner`}
          className="w-full h-[350px] object-cover rounded-t-lg"
        />
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <h2 className="text-sm text-gray-500 dark:text-gray-400">Title</h2>
            <p className="text-lg font-medium text-gray-800 dark:text-white">
              {title}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-sm text-gray-500 dark:text-gray-400">Genre</h2>
            <p className="text-lg font-medium text-gray-800 dark:text-white">
              {genre}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-sm text-gray-500 dark:text-gray-400">Rating</h2>
            <p className="text-lg font-medium text-gray-800 dark:text-white">
              {rating} / 10
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl text-gray-500 dark:text-gray-400">{name}</h2>
          <p className="text-base font-medium text-gray-800 dark:text-white">
            {email}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
            Review
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {review}
          </p>
        </div>

        <div className="flex justify-center">
          <button onClick={handleAddToWatchlist} className="rounded-full bg-sky-600 text-white py-2 px-6 text-sm font-semibold hover:bg-sky-700">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
