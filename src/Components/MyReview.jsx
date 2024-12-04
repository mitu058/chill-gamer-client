import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';

const MyReview = () => {
const allReviews = useLoaderData()
const [reviews, setreviews] = useState(allReviews)

  const deleteReview = id => {
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
          // delete from the database
          fetch(`http://localhost:5000/review/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("delete is done", data);
              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const remainingReviews = reviews.filter((review) => review._id!== id);
                setreviews(remainingReviews);
              }
  
            });
        }
      });
    };
  

    return (
        <div className="my-16">
      <h2 className="text-3xl text-center pb-4">Reviews : {reviews.length}</h2>

      <div className="overflow-x-auto w-[60%] mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl bg-orange-700 text-white">
              <th>SL</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {reviews.map((review,index) => (
              <tr className="text-lg" key={review._id}>
                <th>{index+1}</th>
                <td>{review.title}</td>
                <td>{review.genre}</td> 
                <td>{review.rating}</td>
                <td >
                  <button className="btn btn-sm mr-4 bg-[#f0a544] text-white"><FaEdit></FaEdit></button>
                  <button
                   onClick={()=>deleteReview(review._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyReview;
