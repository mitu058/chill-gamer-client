import React from 'react';
import image from '../assets/Forspoken-.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Upcomeing = () => {
    return (
        <div>
            <div className="my-20 px-6 md:px-12 lg:px-20">
            <p className="text-purple-700 pb-16 font-bold text-4xl text-center uppercase ">

            <Typewriter
          className="text-4xl font-bold mb-4 text-primary"
          words={["Up-Coming!!!"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={800}
        />
                
            </p>
  <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
    {/* Text Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
     
      <h2 className="text-4xl font-bold mb-4"><span className='text-purple-700'>Forspoken</span> - <span>Europe</span></h2>
      <p className=" mb-6">
      Dive into the thrilling world of *Forspoken*, an epic action-adventure game set in a sprawling fantasy 
        universe. Play as Frey, a young woman who must master her magical abilities to fight ferocious creatures 
        and uncover the mysteries of a strange new land.
      </p>
      <div className="flex justify-center lg:justify-start gap-4 mb-6">
        {/* <button className="px-6 py-2 bg-purple-800 hover:bg-purple-700 text-white font-bold rounded">
          Details
        </button> */}
     <Link to='/seeDetails'>
     <button className="px-6 py-2 bg-[#e91e63] hover:bg-[#d81b60] text-white font-bold rounded">
         See Details
        </button>
     </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 text-center">
        {/* Countdown Timer */}
        <div>
          <p className="text-3xl font-bold text-purple-600">25</p>
          <p className="text-gray-600">Days</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-600">12</p>
          <p className="text-gray-600">Hours</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-600">57</p>
          <p className="text-gray-600">Minutes</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-600">37</p>
          <p className="text-gray-600">Seconds</p>
        </div>
      </div>
      <p className="text-gray-600 mt-6">
        Release on <span className="text-purple-600 font-bold">3 January 2025</span>
      </p>
    </div>
    {/* Image Section */}
    <div className="lg:w-1/2">
      <img
        src={image}
        alt="Forspoken"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>

        </div>
    );
};

export default Upcomeing;