import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {creatUser} = useContext(AuthContext)

    return (
        <div className="mx-auto my-14 w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl text-center font-bold tracking-tight">
            Register Now 
          </h3>
          <p className="text-lg text-center text-zinc-500 dark:text-zinc-400">
            Please fill in the form to create an account.
          </p>
        </div>
        <div>
          <form  className="space-y-6">
           
            <div className="space-y-2 text-sm">
              <label
                className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="email"
              >
                Name
              </label>
              <input
                className="flex text-lg h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                placeholder="Enter your name"
                name="name"
                type="text"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex text-xl h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                placeholder="Enter your email"
                name="email"
                type="email"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="password_"
              >
                Password
              </label>
              <input
                className="flex text-xl h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                placeholder="password"
                name="password"
                type="password"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="password_"
              >
                Photo
              </label>
              <input
                className="flex text-xl h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                placeholder="photo"
                name="photo"
                type="url"
              />
            </div>
            <button className="rounded-md text-2xl w-full bg-[#331A15] px-4 py-2 text-white transition-colors hover:bg-[#E3B577]">
              Register
            </button>
          </form>
          <p className="text-center text-lg text-zinc-700 pt-4 dark:text-zinc-300">
            Don&apos;t have an account?
            <Link to="/login" className="font-semibold underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;