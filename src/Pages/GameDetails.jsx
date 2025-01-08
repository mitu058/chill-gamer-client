import React from "react";
import image from "../assets/Forspoken-.jpg";

const GameDetails = () => {
  return (
    <div className="py-10 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-6xl mx-auto">
        {/* Game Banner */}
        <div className="mb-8">
          <img
            src={image}
            alt="Forspoken Banner"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Game Information */}
        <div className=" rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">Forspoken</h1>
          <p className="text-lg  mb-6">
            Dive into the thrilling world of <span className="font-bold italic">Forspoken</span>, an epic action-adventure game set in a sprawling fantasy universe. Step into the shoes of Frey, a young woman transported from New York City to the magical and perilous world of Athia. Master Frey’s magical abilities as you explore breathtaking landscapes, combat fierce creatures, and unravel the mysteries of this enchanting land.
          </p>

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Game Features</h2>
            <ul className="list-disc list-inside space-y-2 ">
              <li>Action-packed gameplay with fluid magical combat.</li>
              <li>Explore the expansive open-world of Athia with stunning visuals.</li>
              <li>Engage in an emotionally driven story featuring Frey’s journey of self-discovery.</li>
              <li>Customizable abilities and unique spells to suit your playstyle.</li>
              <li>Dynamic environments and weather systems.</li>
            </ul>
          </div>

          {/* Game Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold ">Genre</h3>
              <p className="">Action-Adventure, RPG</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold ">Release Date</h3>
              <p className="">3 January 2025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold ">Developer</h3>
              <p className="">Luminous Productions</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold ">Publisher</h3>
              <p className="">Square Enix</p>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2 bg-purple-800 hover:bg-purple-700 text-white font-bold rounded">
              Pre-Order Now
            </button>
            <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded">
              Add to Wishlist
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
