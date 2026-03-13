import React from "react";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-32 pb-16">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#1E5C96] mb-6">
          Login
        </h2>

        {/* Google Login */}
        <button className="w-full border-2 border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-semibold hover:border-green-600 hover:text-green-600 transition mb-4">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="h-5"
          />
          Login with Google
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative bg-white px-3 text-gray-500 text-sm">
            OR
          </span>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex items-center border-2 border-gray-200 rounded-lg px-3">
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-2 border-gray-200 rounded-lg px-3">
            <Lock size={18} className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold shadow hover:-translate-y-1 transition"
          >
            Login
          </button>

        </form>
      </div>
    </section>
  );
};

export default Login;