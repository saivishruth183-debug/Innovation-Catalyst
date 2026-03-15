import React from "react";
import Logo from "../assets/Logo.jpeg";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  const links = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "What We Offer", path: "/offer" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-violet-700 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="flex flex-col space-y-4">
            <Link smooth to="/home" className="flex items-center gap-3 group w-fit">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-12 rounded-lg object-cover shadow-lg transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-extrabold tracking-tight">
                Innovation Catalyst
              </span>
            </Link>
            <p className="text-violet-100/80 leading-relaxed max-w-xs">
              Empowering the next generation of innovators through expert-led 
              curriculum and hands-on mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h4 className="text-green-400 font-bold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    smooth 
                    to={link.path} 
                    className="text-violet-100/90 hover:text-green-400 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-green-400 font-bold uppercase tracking-wider text-sm mb-6">
              Reach Us
            </h4>
            <div className="space-y-4">
              <a href="mailto:weareinnovationcatalyst@gmail.com" className="flex items-center gap-4 group">
                <div className="p-2 bg-violet-800 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Mail className="text-green-400" size={20} />
                </div>
                <span className="text-sm text-violet-100/90 truncate border-b border-transparent group-hover:border-green-400/50 transition-all">
                  weareinnovationcatalyst@gmail.com
                </span>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-violet-800 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Phone className="text-green-400" size={20} />
                </div>
                <span className="text-sm text-violet-100/90">
                  +91 96408 64444  |  +91 8096574368
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-violet-800 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <MapPin className="text-green-400" size={20} />
                </div>
                <span className="text-sm text-violet-100/90">
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-violet-500/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-violet-200/60 text-sm">
            © {new Date().getFullYear()} Innovation Catalyst. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-violet-200/60">
            <Link smooth to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link smooth to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;