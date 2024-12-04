import { Link, NavLink } from "react-router-dom";
import logo from '../assets/favicon.png';

const Navbar = () => {
  console.log(import.meta.env.VITE_a);
  const links = (
    <>
      <li>
        <NavLink  className="flex items-center">
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink  className="flex items-center">
          <span>All Reviews</span>
        </NavLink>
      </li>
      <li>
        <NavLink  className="flex items-center">
          <span>Add Review</span>
        </NavLink>
      </li>
      <li>
        <NavLink  className="">
          <span>My Reviews</span>
        </NavLink>
      </li>
      <li>
        <NavLink>Game Watchlist</NavLink>
      </li>
    </>
  );

  return (
    <div className="mt- sticky top-0 z-50">
      <div className="text-white navbar bg-gradient-to-r from-red-500 to-orange-400">
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
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <a className="text-2xl font-bold md:block lg:block hidden">Discount Pro</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 font-bold">{links}</ul>
        </div>
        <div className="navbar-end space-x-4">
          <Link  className="bg-[#E6533C] text-white btn font-bold">
            Login
          </Link>
          <Link
            
            className="btn bg-[#E6533C] text-white font-bold"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
