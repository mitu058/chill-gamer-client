import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import action from "../assets/actionGame.jpg";
import rpg from "../assets/eldenring.jpeg";
import adventure from "../assets/addddd.jpg";
import { Typewriter } from "react-simple-typewriter";

const Trending = () => {
  return (
    <div>
        <div className="text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
        <Typewriter
          className="text-4xl font-bold mb-4 text-primary"
          words={["Trending Genres"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={800}
        />
        </h2>
  <p className="text-lg  mb-6">
    Explore the most popular game genres and their top-rated titles based on reviews from our community.
  </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
        <div className=" mx-auto hover:scale-105 transition my-6 max-w-[350px] rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
          <div className="flex items-center justify-between gap-10 px-4 py-4">
            {/* Avatar image  */}
            <div className="flex items-center gap-3">
              <p className="text-4xl ">🎮</p>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Action</h2>
              </div>
            </div>
            {/* Setting button */}
            <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
              <span className="size-[3px] rounded-full bg-gray-600"></span>
              <span className="size-[3px] rounded-full bg-gray-600"></span>
              <span className="size-[3px] rounded-full bg-gray-600"></span>
            </div>
          </div>
          {/* Post Image */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 overflow-hidden">
              <img src={action} alt="" />
            </div>
          </div>
          {/* Post content */}
          <div className="mt-3 space-y-2 px-4">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
              Thrilling Action Adventures
            </h2>
            <h2 className="text-sm text-gray-500 dark:text-white/50">
              Dive into fast-paced combat and intense battles. Conquer
              challenges and experience adrenaline-fueled excitement
            </h2>
          </div>
          {/* icons */}
          <div className="mt-4 flex justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <FaRegHeart></FaRegHeart>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                10k
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineShare />
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                34
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCommentDots />
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                40
              </h2>
            </div>
          </div>
        </div>

        <div className=" mx-auto hover:scale-105 transition my-6 max-w-[350px] rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
          <div className="flex items-center justify-between gap-10 px-4 py-4">
            {/* Avatar image  */}
            <div className="flex items-center gap-3">
              <p className="text-4xl ">⚔️</p>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">RPG</h2>
              </div>
            </div>
            {/* Setting button */}
            <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
              <span className="size-[3px] rounded-full bg-gray-600"></span>
              <span className="size-[3px] rounded-full bg-gray-600"></span>
              <span className="size-[3px] rounded-full bg-gray-600"></span>
            </div>
          </div>
          {/* Post Image */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 overflow-hidden">
              <img src={rpg} alt="" />
            </div>
          </div>
          {/* Post content */}
          <div className="mt-3 space-y-2 px-4">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
              Epic RPG Quests
            </h2>
            <h2 className="text-sm text-gray-500 dark:text-white/50">
              Embark on epic quests and shape your own destiny. Explore vast
              worlds, battle foes, and unlock hidden secrets!
            </h2>
          </div>
          {/* icons */}
          <div className="mt-4 flex justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <FaRegHeart></FaRegHeart>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                15k
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineShare />
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                40
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCommentDots />
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                52
              </h2>
            </div>
          </div>
        </div>

        <div className=" mx-auto hover:scale-105 transition my-6 max-w-[350px] rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
          <div className="flex items-center justify-between gap-10 px-4 py-4">
            {/* Avatar image  */}
            <div className="flex items-center gap-3">
              <p className="text-4xl ">🌍</p>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Adventure</h2>
              </div>
            </div>
            {/* Setting button */}
            <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
              <span className="size-[3px] rounded-full bg-gray-600"></span>
              <span className="size-[3px] rounded-full bg-gray-600"></span>
              <span className="size-[3px] rounded-full bg-gray-600"></span>
            </div>
          </div>
          {/* Post Image */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 overflow-hidden">
              <img src={adventure} alt="" />
            </div>
          </div>
          {/* Post content */}
          <div className="mt-3 space-y-2 px-4">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
              Explore Endless Adventures
            </h2>
            <h2 className="text-sm text-gray-500 dark:text-white/50">
              Set out on thrilling journeys to explore uncharted territories.
              Solve mysteries, face challenges, and uncover hidden treasures
            </h2>
          </div>
          {/* icons */}
          <div className="mt-4 flex justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <FaRegHeart></FaRegHeart>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                13k
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineShare />
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                28
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCommentDots />
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                36
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}


export default Trending;
