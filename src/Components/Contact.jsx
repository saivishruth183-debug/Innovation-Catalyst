import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-[#1E5C96] mb-12">
          Contact Us
          <span className="block w-16 h-1 bg-[#90AB8B] mx-auto mt-3 rounded"></span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="flex flex-col gap-8">

            <div className="flex items-start gap-4">
              <Mail className="text-green-600 mt-1" size={24} />
              <p className="text-gray-700">
                weareinnovationcatalyst@gmail.com
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-600 mt-1" size={24} />
              <p className="text-gray-700">
                9640864444 | 8096574368
              </p>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-green-600 mt-1" size={24} />
              <p className="text-gray-700">
                Hyderabad, Telangana, India
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form className="flex flex-col">

            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 mb-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600"
            />

            <textarea
              rows="5"
              placeholder="Message"
              required
              className="w-full p-3 mb-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:-translate-y-1 transition shadow-md"
            >
              Submit
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;