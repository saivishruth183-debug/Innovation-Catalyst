import React from "react";
import { Link } from "react-router-dom";

const Partnership = () => {
  return (
    <>
      {/* Partnership Section */}
      <section className="bg-linear-to-br from-[#1E5C96] via-[#90AB8B] to-[#134477] text-white py-30 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Partner With Innovation Catalyst
          </h2>

          <p className="text-lg opacity-90 mb-8">
            We collaborate with schools to introduce structured programs that
            help students become confident communicators.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#1E5C96] border-2 border-[#1E5C96] px-8 py-3 rounded-lg font-semibold hover:bg-[#1E5C96] hover:text-white transition"
          >
            Partner With Us
          </Link>
        </div>
      </section>  
    </>
  );
};

export default Partnership;