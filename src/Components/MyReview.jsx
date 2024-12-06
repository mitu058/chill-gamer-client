import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyReview = () => {
  const allReviews = useLoaderData();
  const [reviews, setReviews] = useState(allReviews);

  const deleteReview = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete from the database
        fetch(`https://chill-gamer-server-beta.vercel.app/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              const remainingReviews = reviews.filter(
                (review) => review._id !== id
              );
              setReviews(remainingReviews);
            }
          });
      }
    });
  };

  return (
    <div className="my-16">
      <div className="overflow-x-auto w-[60%] mx-auto shadow-xl">
        <table className="w-full  border border-gray-100">
          {/* Table Head */}
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-center border-b">SL</th>
              <th className="py-3 px-6 text-start border-b">Title</th>
              <th className="py-3 px-6 text-start border-b">Genre</th>
              <th className="py-3 px-6 text-center border-b">Rating</th>
              <th className="py-3 px-6 text-center border-b">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <tr key={review._id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-center border-b">{index + 1}</td>
                  <td className="py-4 px-6 text-start border-b">
                    {review.title}
                  </td>
                  <td className="py-4 px-6 text-start border-b">
                    {review.genre}
                  </td>
                  <td className="py-4 px-6 text-center border-b">
                    {review.rating}
                  </td>
                  <td className="py-4 px-6 text-center border-b">
                    <Link to={`/updateReview/${review._id}`}>
                      <button className="btn bg-[#f0a544] text-white btn-sm ">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteReview(review._id)}
                      className="btn btn-error text-white btn-sm ml-4"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-4 px-6 text-center border-b text-gray-500"
                >
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
