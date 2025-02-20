import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const { creatUser,setUser,updateUserProfile } = useContext(AuthContext);
  const [showPasswoed, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;

    // console.log("register user", name, email, password, photo);

    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password should be at least 6 characters long",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "Error!",
        text: ' "password should be at least one upperCase, one lowerCase, one number, one special charecter"',
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log("firebase user created", user);
        setUser(user)
        updateUserProfile({displayName:name,photoURL:photo})
        // save user to the database
        const newUser = { name, email };
        fetch("https://chill-gamer-server-beta.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("user save to database", data);
            if (data.insertedId) {
           toast.success('Successfully registered')
              navigate('/')
            }
          });     
      })
      
      .catch((err) => {
        toast.error('Failed To Register')
      });
  };

  return (
    <div className="mx-auto my-14 w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-col space-y-1">
        <h3 className="text-3xl text-center font-bold tracking-tight">
          Register Now
        </h3>
        <p className="text-base text-center text-zinc-500 dark:text-zinc-400">
          Please fill in the form to create an account.
        </p>
      </div>
      <div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label
              className="text-base font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Name
            </label>
            <input
              className="flex text-base h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              placeholder="Enter your name"
              name="name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-base font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex text-base h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </div>
          <div className="space-y-2 text-sm relative">
            <label
              className="text-base font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="password_"
            >
              Password
            </label>
            <input
              className="flex text-base h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              type={showPasswoed ? "text" : "password"}
              placeholder="password"
              name="password"
            />

            <div
              onClick={() => setShowPassword(!showPasswoed)}
              className="btn btn-xs absolute right-3 top-8"
            >
              {showPasswoed ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <label
              className="text-base font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="password_"
            >
              Photo
            </label>
            <input
              className="flex text-base h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              placeholder="photo"
              name="photo"
              type="url"
            />
          </div>
          <button className="rounded-md text-2xl w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 px-4 py-2 text-white transition-colors ">
            Register
          </button>
        </form>
        <p className="text-center text-base text-zinc-700 pt-4 dark:text-zinc-300">
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
