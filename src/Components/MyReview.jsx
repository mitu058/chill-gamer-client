import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import dollAnimation from '../lottie/nodataGirl.json'

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const allReviews = useLoaderData();
  const [reviews, setReviews] = useState([]);
  // const [reviews, setReviews] = useState(allReviews);


  useEffect(() => {
    if (allReviews?.length > 0 && user?.email) {
      const userReviews = allReviews.filter((data) => data.email === user.email);
      setReviews(userReviews);
    }
  }, [user, allReviews]);

  const deleteReview = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
              const remainingReviews = reviews.filter((review) => review._id !== id);
              setReviews(remainingReviews);
            }
          });
      }
    });
  };

  return (
    <div className="my-16 overflow-x-auto">
      <div className=" lg:w-[60%] mx-auto shadow-xl">
        <table className="w-full border border-gray-100">
          {/* Table Head */}
          <thead>
            <tr className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
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
                <tr key={review._id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 text-center border-b">{index + 1}</td>
                  <td className="py-4 px-6 text-start border-b">{review.title}</td>
                  <td className="py-4 px-6 text-start border-b">{review.genre}</td>
                  <td className="py-4 px-6 text-center border-b">{review.rating}</td>
                  <td className="py-4 px-6 text-center border-b">
                    <Link to={`/updateReview/${review._id}`}>
                      <button className="btn bg-purple-800 text-white btn-sm">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteReview(review._id)}
                      className="btn bg-red-500 text-white btn-sm ml-4"
                    >
                      Delete
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
                  <Lottie animationData={dollAnimation} loop={true} className="h-96"></Lottie>
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
