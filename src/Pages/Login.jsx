import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto my-14 w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
      <h1 className="text-3xl font-semibold tracking-tight text-center">
        Log In
      </h1>

      <form action="#" className="space-y-6">
        <div className="space-y-2 text-sm">
          <label
            htmlFor="username"
            className="block text-xl text-zinc-700 dark:text-zinc-300 font-medium"
          >
            Email
          </label>
          <input
            className="flex text-lg h-10 w-full rounded-md border px-3 py-2  focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            placeholder="Enter email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="space-y-2 text-sm">
          <label
            htmlFor="password"
            className="block text-xl text-zinc-700 dark:text-zinc-300 font-medium"
          >
            Password
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-lg focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            id="password"
            placeholder="Enter password"
            name="password"
            type="password"
            required
          />
          <div className="flex justify-end text-xs">
            <a
              href="#"
              className="text-zinc-700 hover:underline text-base dark:text-zinc-300"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="rounded-md w-full bg-[#331A15] px-4 text-xl py-2 text-white transition-colors hover:bg-[#E3B577]">
          Login
        </button>
      </form>
      <p className="text-center text-lg text-zinc-700 dark:text-zinc-300">
        Don&apos;t have an account?
        <Link to="/register" className="font-semibold underline">
          Register
        </Link>
      </p>

      <div className="my-8 flex items-center">
        <hr className="flex-1 border-gray-400" />
        <div className="mx-4 text-gray-400">OR</div>
        <hr className="flex-1 border-gray-400" />
      </div>
      {/* Social icons */}
      <button className="mx-auto mb-4 mt-8 block rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="mr-2 inline-block h-5 w-5 fill-current"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
