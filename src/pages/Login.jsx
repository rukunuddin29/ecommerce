import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex justify-center">
            <img
              src=" "
              alt="Logo"
              className="w-auto"
            />
          </div>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>

          <form className="mt-8">
            <label
              htmlFor="email"
              className="block text-sm mx-12 font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@xyz.com"
              required
              className="w-3/4 m-auto my-1 h-10 p-3 block text-sm font-medium text-gray-700 border rounded"
            />

            <label
              htmlFor="password"
              className="block text-sm mx-12 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              required
              className="w-3/4 m-auto my-1 h-10 p-3 block text-sm font-medium text-gray-700 border rounded"
            />

            <div className="w-3/4 flex m-auto my-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="mx-1">Remember me</label>
              <a href="#" className="text-blue-600 pl-12">Forgot password?</a>
            </div>

            <button className="w-3/4 m-auto mx-12 mt-2 text-white rounded-xl h-10 bg-black">
              Login
            </button>

            <div className="my-12 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or continue with
              </div>
            </div>

            <button
              className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white p-2 rounded-full">
             
              </div>
              <span className="ml-4">Sign In with Google</span>
            </button>
            
            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by Cartesian Kinetics
              <a href="#" className="border-b border-gray-500 border-dotted"> Terms of Service </a>
              and its
              <a href="#" className="border-b border-gray-500 border-dotted"> Privacy Policy </a>
            </p>
          </form>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
               style={{ backgroundImage: "url('https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?size=626&ext=jpg&ga=GA1.1.702301594.1688586332&semt=ais_hybrid-rr-similar')" }}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
