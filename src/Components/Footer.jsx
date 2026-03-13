import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E5C96] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 mb-4"
          />
          <p className="opacity-90">
            © 2026 Innovation Catalyst.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4">
            Quick Links
          </h4>

          <div className="flex flex-col gap-2">
            <a href="#home" className="opacity-90 hover:text-green-400 transition">
              Home
            </a>
            <a href="#about" className="opacity-90 hover:text-green-400 transition">
              About
            </a>
            <a href="#offer" className="opacity-90 hover:text-green-400 transition">
              Curriculum
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4">
            Reach Us
          </h4>

          <p className="opacity-90 mb-2">Hyderabad, India</p>
          <p className="opacity-90">8096574368</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;