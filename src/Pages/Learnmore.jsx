import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Catalyst from '../assets/Catalyst.png';
import Rolabz from '../assets/Rolabz.jpeg';

const cards = [
  {
    id: 1,
    title: "Catalyst Student Development",
    tag: "Life Skills",
    description: "Empowering students with essential life skills beyond academics. Through interactive sessions and structured skill development, we build confidence, leadership, and problem-solving abilities—preparing them for real-world success.",
    image: Catalyst
  },
  {
    id: 2,
    title: "Rolabz Robotics",
    tag: "EdTech Platform",
    description: "A hands-on web platform for robotics and electronics. Design circuits, write code, and upload directly to hardware like Arduino. Includes classroom tools and curriculum mapping to revolutionize STEM education.",
    image: Rolabz
  },
];

const Card = ({ title, description, image, tag }) => (
  <div className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-violet-200 border border-slate-100 transition-all duration-500 overflow-hidden flex flex-col h-full">
    {/* Image Container */}
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
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content Container */}
    <div className="p-8 flex flex-col flex-grow">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-violet-700 transition-colors">
        {title}
      </h2>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <button className="flex items-center gap-2 text-violet-700 font-bold hover:gap-3 transition-all mt-auto w-fit group/btn cursor-pointer">
        Learn More 
        <ArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform" />
      </button>
    </div>
  </div>
);

const Learnmore = () => {
  return (
    <section id="offer" className="min-h-screen bg-slate-50 py-24 px-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Explore Our Initiatives
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Bridging the gap between traditional education and future-ready skills through innovation and technology.
          </p>
          <span className="block w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learnmore;