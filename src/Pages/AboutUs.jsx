import React from 'react';

const AboutUs = () => {
  return (
    <div className="  py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-10 leading-7">
          Welcome to <span className="text-purple-700 font-bold">Chill Gamer</span>, your ultimate destination for honest and insightful 
          game reviews. Our mission is to bring together a community of passionate gamers, where players 
          can discover the latest games, share their opinions, and make informed decisions about their 
          next gaming adventure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-500">Our Vision</h3>
            <p className='text-white'>
              We aim to become the go-to platform for all gamers, providing a space where reviews are 
              authentic, informative, and inclusive for players of all levels and preferences.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-500">What We Do</h3>
            <p className='text-white'>
              At Chill Gamer, we review the hottest games across genres like action, RPG, adventure, and 
              sports. We also provide detailed gameplay insights, community ratings, and upcoming game 
              announcements.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-500">Why Choose Us</h3>
            <p className='text-white'>
              Our reviews are written by passionate gamers for passionate gamers. With transparency, 
              creativity, and a love for games at our core, we ensure every review is worth your time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
