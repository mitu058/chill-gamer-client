import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => { 
  const reviewdetails = useLoaderData();
  const {name,title,genre,email,rating,review,photo} = reviewdetails
  
  
  return (
    <div className="flex  flex-col justify-center items-center my-10">
        
      <div className="flex max-w-[400px] flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-lg dark:bg-[#18181B]">
        <div className="group relative">
          <img
            
            className="h-[150px] w-full   bg-slate-500 object-cover"
            src={photo}
          />
         
        </div>
        <div className="space-y-1 text-center">
          <h1 className="text-2xl text-gray-700 dark:text-white/90">{name}</h1>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
        <div className="flex w-full justify-between py-2">
          <div className="space-y-1 text-center">
            <p className="text-gray-500 dark:text-white/70">Title</p>
            <p className="font-mono text-xl text-gray-700 dark:text-white/50">
             {title}
            </p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-gray-500 dark:text-white/70">Genre</p>
            <p className="font-mono text-xl text-gray-700 dark:text-white/50">
              {genre}
            </p>
          </div>
          <div className="space-y-1 text-center ">
            <p className="text-gray-500 dark:text-white/70">Rating</p>
            <p className="font-mono text-xl text-gray-700 dark:text-white/50">
              {rating}
            </p>
          </div>
        </div>
        {/* bio  */}
        <p className="pb-2 text-center text-sm text-gray-500">
          {review}
        </p>
       
        <button className="w-full rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">
         Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ReviewDetails;
