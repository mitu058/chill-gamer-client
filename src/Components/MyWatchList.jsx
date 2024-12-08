import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import Animation from '../lottie/noData.json'

const MyWatchList = () => {
  const { user } = useContext(AuthContext);
  const watchlist = useLoaderData();
  // console.log(watchlis
  const [list, setList] = useState([]);
console.log(list[0]);

  useEffect(() => {
    if (watchlist?.length > 0 && user?.email) {
      const userWatchlist = watchlist.filter(
        (item) => item.email === user.email
      );
      setList(userWatchlist);
    }
  }, [user, watchlist]);

  return (
    <div>
      <div className="my-16 overflow-x-auto">
        <table className="lg:w-[80%] mx-auto shadow-xl border border-gray-100">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
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
            {list && list.length > 0 ? (
              list.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 text-center border-b">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-center border-b">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mx-auto"
                    />
                  </td>
                  <td className="py-4 px-6 text-start border-b">{item.name}</td>
                  <td className="py-4 px-6 text-start border-b">
                    {item.writerEmail}
                  </td>

                  <td className="py-4 px-6 text-start border-b">
                    {item.title}
                  </td>
                  <td className="py-4 px-6 text-center border-b">
                    {item.genre}
                  </td>
                  <td className="py-4 px-6 text-center border-b">
                    {item.rating}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-6 text-center">
                
                  <Lottie animationData={Animation} loop={true} className="h-96"></Lottie>
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
