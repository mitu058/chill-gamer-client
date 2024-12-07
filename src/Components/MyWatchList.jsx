import React from "react";
import { useLoaderData } from "react-router-dom";

const MyWatchList = () => {
  const watchlist = useLoaderData();

  return (
    <div>
      <div className="my-16">
        <table className="w-[80%] mx-auto shadow-xl border border-gray-100">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-center border-b">SL</th>
              <th className="py-3 px-6 text-center border-b">Photo</th>
              <th className="py-3 px-6 text-start border-b">Name</th>
              <th className="py-3 px-6 text-start border-b">Email</th>
              <th className="py-3 px-6 text-start border-b">Title</th>
              <th className="py-3 px-6 text-center border-b">Genre</th>
              <th className="py-3 px-6 text-center border-b">Rating</th>
            </tr>
          </thead>
          <tbody>
            {watchlist && watchlist.length > 0 ? (
              watchlist.map((item, index) => (
                <tr key={item._id} className="hover:bg-white">
                  <td className="py-4 px-6 text-center border-b">{index + 1}</td>
                  <td className="py-4 px-6 text-center border-b">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mx-auto"
                    />
                  </td>
                  <td className="py-4 px-6 text-start border-b">{item.name }</td>
                  <td className="py-4 px-6 text-start border-b">{item.email}</td>
                 
                  <td className="py-4 px-6 text-start border-b">{item.title}</td>
                  <td className="py-4 px-6 text-center border-b">{item.genre}</td>
                  <td className="py-4 px-6 text-center border-b">{item.rating}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-6 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWatchList;
