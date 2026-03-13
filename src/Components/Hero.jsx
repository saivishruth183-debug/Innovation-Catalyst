import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.jpeg';

const Hero = () => {
  return (
    <header
      id="home"
      className="bg-linear-to-br from-[#1E5C96] via-[#90AB8B] to-[#134477] text-white pt-44 pb-24 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center">

          {/* Logo */}
          <img
            src={Logo}
            alt="Icon"
            className="h-28 mb-6"
          />

          {/* Title */}
          <h1 className="text-5xl text-[#F57C00] font-bold mb-2">
            <span className="text-[#0E2A66]">Innovation</span> Catalyst
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl text-green-400 mb-6">
            Empowering Future
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto opacity-90 mb-8">
            Innovation Catalyst partners with schools to develop essential life
            skills in students through structured skill-development programs.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">

            <Link
              to="#about"
              className="bg-gradient-to-r from-green-600 to-emerald-700 px-7 py-3 rounded-lg font-semibold hover:-translate-y-1 transition shadow-lg"
            >
              Learn More
            </Link>

            <Link
              to="#contact"
              className="bg-white text-[#1E5C96] border-2 border-[#1E5C96] px-7 py-3 rounded-lg font-semibold hover:bg-[#1E5C96] hover:text-white transition"
            >
              Partner With Us
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Hero;