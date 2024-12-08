import { Link, NavLink } from "react-router-dom";
import logo from "../assets/favicon.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "../Provider/ThemeProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  

  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center">
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/Reviews" className="flex items-center">
          <span>All Reviews</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/addReview" className="flex items-center">
          <span>Add Review</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/myreview" className="">
          <span>My Reviews</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/myWatchlist">Game Watchlist</NavLink>
      </li>
    </>
  );

  return (
    <div className=" sticky top-0 z-50">
      <div
        className={`text-white navbar ${
          theme == "light"
            ? "text-black bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900"
            : "bg-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-red-500 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <a className="text-2xl font-bold md:block lg:block hidden">
              Chill Gamer
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 font-bold">{links}</ul>
        </div>

        <div className="navbar-end space-x-4">
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 text-sm font-bold transition duration-300 rounded-md ${
              theme === "light" ? "text-white" : "text-white bg-themeDatak"
            }`}
          >
            {theme === "light" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  class="fill-sky-400/20 stroke-white"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  class="stroke-white"
                ></path>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  class="fill-sky-400/20"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  class="fill-white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  class="fill-white"
                ></path>
              </svg>
            )}
          </button>

          {user && user.email ? (
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-md"
                src={user?.photoURL}
                alt="User Avatar"
              />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out shadow-lg">
                {user?.displayName}
                <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-gradient-to-r from-blue-500 to-purple-600"></span>
              </div>
            </div>
          ) : (
            ""
          )}

          {user && user?.email ? (
            <button
              onClick={userLogOut}
              className="rounded-full bg-[#e91e63] hover:bg-[#d81b60] px-4 py-2 text-white transition-all duration-300 hover:scale-90"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-[#e91e63] hover:bg-[#d81b60] px-5 py-2 text-white transition-all duration-300 hover:scale-90"
            >
              Login
            </Link>
          )}

          {user && user?.email ? (
            ""
          ) : (
            <Link
              to="/register"
              className=" rounded-full bg-[#e91e63] hover:bg-[#d81b60] px-4 py-2 text-white transition-all duration-300 hover:scale-90"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
