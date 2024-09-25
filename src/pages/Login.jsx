import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto border border-black rounded-xl sm:w-full sm:max-w-md p-6">
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
              <h4 className="mx-1">Remember me</h4>
              <a href="#" className="text-blue-600 pl-12">
                Forgot password?
              </a>
            </div>

            <button className="w-3/4 m-auto mx-12 mt-2 text-white rounded-xl h-10 bg-black">
              Login
            </button>

            <div className="relative flex justify-center text-sm mt-4">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
