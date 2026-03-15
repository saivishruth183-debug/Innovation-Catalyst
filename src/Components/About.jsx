import React from "react";
import { Check, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-[#1E5C96] mb-12 relative">
          About Us
          <span className="block w-16 h-1 bg-[#90AB8B] mx-auto mt-3 rounded"></span>
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Text */}
          <div className="space-y-4 text-gray-700">
            <p>
              Innovation Catalyst is an education initiative designed to bridge
              the gap between academic knowledge and real-world skills.
            </p>

            <p>
              While schools focus mainly on academic success, many students
              lack confidence in communication, leadership, and analytical
              thinking.
            </p>

            <p>
              Our curriculum is designed for students from{" "}
              <strong>Grade 3 to Grade 12</strong>.
            </p>
          </div>

          {/* Right Lists */}
          <div className="grid sm:grid-cols-2 gap-8">

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1E5C96]">
                Skills We Build
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Confidence
                </li>

                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Communication skills
                </li>

                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Critical thinking
                </li>

                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Leadership abilities
                </li>

                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Creative problem solving
                </li>
              </ul>
            </div>

            {/* Teaching Methods */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1E5C96]">
                How We Teach
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <Star className="text-green-600" size={18} />
                  Debates & Group discussions
                </li>

                <li className="flex items-center gap-2">
                  <Star className="text-green-600" size={18} />
                  Storytelling & Role-play
                </li>

                <li className="flex items-center gap-2">
                  <Star className="text-green-600" size={18} />
                  Team challenges
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;