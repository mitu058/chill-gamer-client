import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ReviewDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const reviewdetails = useLoaderData();
  const { name, title, genre, email, rating, review, photo } = reviewdetails;

  const handleAddToWatchlist = (e) => {
    e.preventDefault();

    if (!user) {
      // Show SweetAlert when the user is not logged in
      Swal.fire({
        icon: "warning",
        title: "Please Login",
        text: "You need to log in to add items to your watchlist.",
        confirmButtonText: "Login",
        confirmButtonColor: "#4f46e5",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Redirect to login page
        }
      });
      return;
    }

    const watchlistItem = {
      title,
      genre,
      rating,
      name,
      writerEmail: email,
      email: user?.email,
      photo,
      review,
    };
    // console.log("Add to watchlist", watchlistItem);
    fetch("https://chill-gamer-server-beta.vercel.app/watchlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(watchlistItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("review saved to database", data);
        if (data.insertedId) {
          Swal.fire({
            text: "Review add your watchlist",
            icon: "success",
            confirmButtonText: "Close",
          });
          navigate("/myWatchlist");
        }
      });
  };

  return (
    <div className="flex gap-8 py-10 px-14">
      <div className="relative w-full mb-10">
        <img
          src={photo}
          alt={`${name} Banner`}
          className="w-full h-[350px] object-cover rounded-t-lg"
        />
      </div>

      <div className="w-full   rounded-lg px-6 py-8 ">
        <div className="">
          <div className="space-y-2">
            <h2 className="text-lg ">Title : {title}</h2>
         
        
        
            <h2 className="text-lg ">Genre : {genre}</h2>
         
         
          
            <h2 className="text-lg ">Rating : {rating}</h2>
           
            <h2 className="text-xl ">Name : {name}</h2>
            <h2 className="text-xl ">Email : {email}</h2>
            <h2 className="text-lg font-semibold  dark:text-white mb-4">
            Review : {review}
          </h2>

          
        <div className="flex justify-center pt-2">
          <button
            onClick={handleAddToWatchlist}
            className="rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-2 px-6 text-sm font-semibold hover:bg-sky-700"
          >
            Add to Wishlist
          </button>
        </div>
        
        </div>
    

      </div>
    </div>
             </div>
  );
};

export default ReviewDetails;
