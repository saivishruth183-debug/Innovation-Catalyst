import React from "react";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-30 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-100/40 via-transparent to-transparent -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-violet-900 mb-4">
            Send us a Message
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            Have a question or a project in mind? Fill out the form below and 
            our team will get back to you within 24 hours.
          </p>
          <span className="block w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></span>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-violet-900/5 border border-white relative">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Name Input */}
            <div className="sm:col-span-1">
              <label className="block text-sm font-bold text-violet-900 mb-3 ml-1 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all shadow-sm placeholder:text-slate-400"
              />
            </div>

            {/* Email Input */}
            <div className="sm:col-span-1">
              <label className="block text-sm font-bold text-violet-900 mb-3 ml-1 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all shadow-sm placeholder:text-slate-400"
              />
            </div>

            {/* Message Input */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-violet-900 mb-3 ml-1 uppercase tracking-wider">
                How can we help?
              </label>
              <textarea
                rows="6"
                placeholder="Tell us about your goals..."
                required
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all shadow-sm placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="group relative flex items-center justify-center gap-3 bg-violet-700 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-violet-800 hover:-translate-y-1 active:translate-y-0 transition-all shadow-lg shadow-violet-200"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        {/* Optional Footer Text */}
        <p className="text-center mt-10 text-slate-400 text-sm">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default Contact;