import React from 'react'

const Career = () => {
  return (
      <section className="bg-gray-100 py-20">
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
  )
}

export default Career
