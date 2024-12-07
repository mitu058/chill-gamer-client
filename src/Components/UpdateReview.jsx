import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateReview = () => {
    const getreview = useLoaderData()
    const {title, rating, genre, year, name, email, photo, review, _id} = getreview
   
    const handelUpdateReview = e =>{
        e.preventDefault()
       const from = e.target
        const title = from.title.value
        const rating = parseInt(from.rating.value)
        const genre = from.genre.value
        const year = from.year.value
        const name = from.name.value
        const email = from.email.value
        const photo = from.photo.value
        const review = from.review.value
    
        const updateReview = {title, rating, genre, year, name, email, photo, review}
        // console.log(updateReview);

        fetch(`https://chill-gamer-server-beta.vercel.app/review/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
       .then(res => res.json())
       .then(data =>{
        
        if(data.modifiedCount){
            Swal.fire({
                title: 'Success!',
                text: 'updated Review successfully',
                icon: 'success',
                confirmButtonText: 'close'
              }) 
        }
       })
    }
    return (
        <div>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="lg:w-[40%] mx-auto space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <div className="flex flex-col space-y-1">
            <h3 className="text-3xl text-center font-bold tracking-tight">
              Update Your Review
            </h3>
            <p className="text-xl text-center text-zinc-500 dark:text-zinc-400">
            Update your review and share your gaming journey! Edit your details, add a favorite game, write a review, and express your thoughts with the gaming community.
            </p>
          </div>
          <div>
            <form onSubmit={handelUpdateReview} className="space-y-6">
              {/* First Grid: Title and Rating */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-sm">
                  <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    Game Title
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                    placeholder="Enter game title"
                    name="title"
                    defaultValue={title}
                    type="text"
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    Rating (1-5)
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                    placeholder="Rate the game (1-5)"
                    name="rating"
                    defaultValue={rating}
                    type="number"
                    min="1"
                    max="5"
                  />
                </div>
              </div>
              {/* Second Grid: Genre and Publishing Year */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-sm">
                  <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    Genre
                  </label>
                  <select
                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                    name="genre"
                    defaultValue={genre}
                  >
                    <option value="Action">Action</option>
                    <option value="RPG">RPG</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>
                <div className="space-y-2 text-sm">
                  <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    Publishing Year
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                    placeholder="Enter publishing year"
                    name="year"
                    defaultValue={year}
                    type="number"
                  />
                </div>
              </div>
              {/* Third Grid: User Email */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-sm">
                  <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                    name="name"
                    defaultValue={name}
                    type="text"
                   
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                    placeholder="Enter your email"
                    name="email"
                    defaultValue={email}
                    type="email"
                  />
                </div>
              </div>
              {/* Full-width: Game Cover Image and Description */}
              <div className="space-y-2 text-sm">
                <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                 Thumbnail
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  placeholder="Enter game cover image URL"
                  name="photo"
                  defaultValue={photo}
                  type="url"
                />
              </div>
              <div className="space-y-2 text-sm">
                <label className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300">
                   Description
                </label>
                <textarea
                  className="flex w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  placeholder="Write your detailed review"
                  name="review"
                  defaultValue={review}
                  rows="4"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button className="rounded-md text-xl bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 px-4 py-2  text-white transition-colors  btn btn-block">
                Update Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UpdateReview;