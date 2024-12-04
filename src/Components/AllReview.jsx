import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReviewDetails from "./ReviewDetails";

const AllReview = () => {
  const reviewData = useLoaderData();
  console.log(reviewData);

  return (
    
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
        {reviewData.map((review) => (
          <div key={review._id} className="card  bg-base-100  shadow-xl">
            <figure>
              <img
                src={review.photo}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
               
                <div className="badge badge-secondary">Rating : {review.rating}</div>
              </h2>
              <p>Title : {review.title}</p>
              <p>Genre : {review.genre}</p>
              <div className="card-actions justify-center">
            
               <Link to={`/review/${review._id}`}>
               <button className="btn btn-sm btn-primary">Explore Details</button> 
               </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default AllReview;
