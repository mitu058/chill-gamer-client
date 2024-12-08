import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllReview = () => {
  const reviewData = useLoaderData(); 
  const [sortedReviews, setSortedReviews] = useState(reviewData); 
  const [selectedGenre, setSelectedGenre] = useState(""); 

  // Sorting functionality
  const handleSort = (criteria) => {
    const sorted = [...sortedReviews].sort((a, b) => {
      if (criteria === "rating") {
        return b.rating - a.rating; 
      } else if (criteria === "year") {
        return b.year - a.year; 
      }
      return 0;
    });
    setSortedReviews(sorted);
  };

  // Filter functionality
  const handleFilter = (genre) => {
    setSelectedGenre(genre);
    if (genre === "") {
      setSortedReviews(reviewData); 
    } else {
      const filtered = reviewData.filter((review) => review.genre === genre);
      setSortedReviews(filtered);
    }
  };

  return (
    <div className="my-16 w-[80%] mx-auto">
      <div className="text-center pb-6">
        <h2 className="text-4xl pb-4 font-bold">All Reviews</h2>
        <p>Discover a hub of honest and in-depth reviews for all your favorite games. Explore ratings, insights <br /> and experiences from gamers worldwide to guide your next pick.</p>
      </div>
      <div className="flex justify-between mb-8">
        <div>
          <label className="mr-2 font-bold">Sort By:</label>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="select select-bordered"
          >
            <option value="">Select</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>
        </div>
      
        <div>
          <label className="mr-2 font-bold">Filter by Genre:</label>
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="select select-bordered"
          >
            <option value="">All Genres</option>
            {[...new Set(reviewData.map((review) => review.genre))].map(
              (genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      {/* Display reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedReviews.map((review) => (
          <div key={review._id} className="card bg-white shadow-xl">
            <figure>
              <img src={review.photo} alt={review.name} />
            </figure>
            <div className="p-6">
              <h2 className="card-title pb-2">
                {review.name}
                <div className="badge badge-secondary ">
                  Rating: {review.rating}
                </div>
              </h2>
              <p>Title: {review.title}</p>
              <p>Genre: {review.genre}</p>
              <p>Year: {review.year}</p>
              <div className="card-actions mt-3 justify-center">
                <Link to={`/review/${review._id}`}>
                  <button className="py-2 px-6 text-sm rounded-full   bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
                    Explore Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
