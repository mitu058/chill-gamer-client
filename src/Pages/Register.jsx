import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;

    console.log("register user", name, email, password, photo);

    creatUser(email, password)
      .then((result) => {
        console.log("firebase user created", result.user);
        const newUser = {name,email}
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
          console.log('user save to database', data);
          if(data.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'User registered successfully',
              icon:'success',
              confirmButtonText: 'Close'
            })
          }
          
        })
      })
      .catch((err) => {
        console.error("error creating user", err);
      });
  };

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
        <form onSubmit={handleRegister} className="space-y-6">
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
