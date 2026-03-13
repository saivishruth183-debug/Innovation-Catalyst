import React from "react";

const PartnershipCareer = () => {
  return (
    <>
      {/* Partnership Section */}
      <section className="bg-linear-to-br from-[#1E5C96] via-[#90AB8B] to-[#134477] text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Partner With Innovation Catalyst
          </h2>

          <p className="text-lg opacity-90 mb-8">
            We collaborate with schools to introduce structured programs that
            help students become confident communicators.
          </p>

          <a
            href="#contact"
            className="bg-white text-[#1E5C96] border-2 border-[#1E5C96] px-8 py-3 rounded-lg font-semibold hover:bg-[#1E5C96] hover:text-white transition"
          >
            Partner With Us
          </a>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#1E5C96] mb-5">
              Join Our Mission
            </h2>

            <p className="text-gray-600 mb-6">
              We are looking for passionate educators, trainers, and mentors
              who want to inspire the next generation.
            </p>

            <button className="bg-linear-to-r from-green-600 to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:-translate-y-1 transition">
              Apply Now
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default PartnershipCareer;