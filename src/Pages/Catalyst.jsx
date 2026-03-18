import React from "react";
import {
  Users,
  Scale,
  Brain,
  Mic,
  PersonStanding,
  Users2,
  Lightbulb,
} from "lucide-react";

const Offers = () => {
  const cards = [
    {
      icon: <Users size={40} />,
      title: "Social Intelligence",
      desc: "Helping students interact confidently through socialization and empathy.",
    },
    {
      icon: <Scale size={40} />,
      title: "Ethics & Character",
      desc: "Building responsible, principled students with integrity and decision-making skills.",
    },
    {
      icon: <Brain size={40} />,
      title: "Critical Thinking",
      desc: "Training students to analyze situations and find creative solutions.",
    },
    {
      icon: <Mic size={40} />,
      title: "Public Speaking",
      desc: "Teaching students to express ideas clearly and master storytelling.",
    },
    {
      icon: <PersonStanding size={40} />,
      title: "Stage Presence",
      desc: "Mastering body language, eye contact, and confidence while presenting.",
    },
    {
      icon: <Users2 size={40} />,
      title: "Leadership",
      desc: "Taking initiative and working effectively in collaborative teams.",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Creativity",
      desc: "Training students to think differently and generate unique solutions.",
    },
  ];

  return (
    <section id="offer" className="bg-[#90AB8B] py-30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-[#1E5C96] mb-2">
          Our Skill Development Curriculum
        </h2>

        <p className="text-center text-green-700 font-semibold mb-12">
          (Grades 3 – 12)
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center shadow-md border-t-4 border-green-600 transition hover:-translate-y-3 hover:shadow-xl hover:border-[#1E5C96]"
            >
              <div className="text-green-600 mb-5 flex justify-center">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Offers;