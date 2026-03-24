import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react"; // Added import
import Logo from '../assets/Logo.jpeg';
import Catalyst from '../assets/Catalyst.png';
import Rolabz from '../assets/Rolabz.jpeg';

const cards = [
  {
    id: 1,
    title: "Catalyst Student Development",
    tag: "Life Skills",
    description: "Empowering students with essential life skills beyond academics. Through interactive sessions and structured skill development, we build confidence, leadership, and problem-solving abilities.",
    image: Catalyst,
    route: "/catalyst"
  },
  {
    id: 2,
    title: "Rolabz Robotics",
    tag: "EdTech Platform",
    description: "A hands-on web platform for robotics and electronics. Design circuits, write code, and upload directly to hardware like Arduino. Includes classroom tools and curriculum mapping.",
    image: Rolabz,
    // route: "/rolabz"
  },
];

const Card = ({ title, description, image, tag, route }) => (
  <div className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-violet-200 border border-slate-100 transition-all duration-500 overflow-hidden flex flex-col h-full text-left">
    <div className="relative h-64 w-full overflow-hidden bg-slate-50">
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-white/90 backdrop-blur-md text-violet-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {tag}
        </span>
      </div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-violet-700 transition-colors">
        {title}
      </h2>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      {/* Show Learn More only for Catalyst Student Development */}
      {route ? (
        <Link to={route} className="flex items-center gap-2 text-violet-700 font-bold hover:gap-3 transition-all mt-auto w-fit group/btn cursor-pointer">
          Learn More 
          <ArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform" />
        </Link>
      ) : (
        // <Link to={route} className="flex items-center gap-2 text-violet-700 font-bold hover:gap-3 transition-all mt-auto w-fit group/btn cursor-pointer">
        //   Learn More 
        //   <ArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform" />
        // </Link>
        null
      )}
    </div>
  </div>
);

const Hero = () => {
  return (
    <header
      id="home"
      className="bg-gradient-to-br from-[#1E5C96] via-[#90AB8B] to-[#134477] text-white pt-44 pb-24 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo" className="h-28 mb-6" />

          <h1 className="text-5xl text-[#F57C00] font-bold mb-2">
            <span className="text-[#0E2A66]">Innovation</span> Catalyst
          </h1>

          <h2 className="text-2xl text-green-400 mb-6 font-medium">
            Empowering Future
          </h2>

          <p className="max-w-2xl mx-auto opacity-90 mb-16">
            Innovation Catalyst partners with schools to develop essential life
            skills in students through structured skill-development programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cards.map(card => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;