import Header from "./Header";
import bg from "../assets/background.jpg";
import { useState } from "react";
const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);

    const toggleSignupForm=()=>{
        setIsSigninForm(!isSigninForm)
    }
  return (
    <div className="">
      <Header />
      <div className="absolute  ">
        <img
          src={bg}
          className="hidden bg-black md:block object-cover md:h-[80vh] lg:h-full"
          alt="background"
        />
      </div>
      <form className="py-6 md:py-12 px-5 md:px-16 z-10 mt-14 md:mt-24 h-full md:h-[65vh] w-[100%] sm:w-[100%] md:w-[50%] lg:w-[30%] absolute bg-black md:bg-opacity-70 mx-auto right-0 left-0 text-center text-white">
        <h1 className="font-bold text-3xl py-4 text-left">
          {isSigninForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full name / username"
            className="p-3 my-2 bg-transparent rounded border border-gray-500 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobie number"
          className="p-3 my-2 bg-transparent rounded border border-gray-500 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-transparent rounded border border-gray-500 w-full"
        />
        {!isSigninForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 my-2 bg-transparent rounded border border-gray-500 w-full"
          />
        )}
        <button className="p-3 my-2 font-semibold  rounded w-full bg-red-600">
          {isSigninForm ? "Sign In" : "Sign up"}
        </button>
        <p className="text-left mt-5">
          {isSigninForm ? "New to Netflix ?" : "Already a user ?"}{" "}
          <span
            className="font-bold hover:underline cursor-pointer"
            onClick={toggleSignupForm}
          >
            {" "}
            {isSigninForm ? "Sign up now." : "Sign in"}
          </span>
        </p>
      </form>
      <div className=" left-0 top-0 md:backdrop-opacity-10 md:bg-black/60  md:h-[80vh] lg:h-[110vh] z-0"></div>
    </div>
  );
};

export default Login;
