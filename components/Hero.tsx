"use client";
import React from "react";
import hero from "../assets/book_wide-1.webp";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${hero.src})`, // ✅ use template literal, not string
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get More Real Estate Leads With{" "}
            <span className="text-blue-400">Ethical Infrastructure</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-lg">
            Engage with our professional real estate agents to sell, buy or rent
            your home. Get emails directly to your inbox and manage the lead
            with the built-in CRM.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold transition">
            Contact us today
          </button>
        </div>

        {/* Right Contact Form */}
        <div className="mt-10 md:mt-0 md:w-1/3 bg-white text-black rounded-lg shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-2">Get In Touch</h3>
          <p className="text-gray-600 text-sm mb-6">
            Fill out this form and one of our agents will be in touch with you
            soon.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows={3}
              placeholder="Message"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" id="gdpr" />
              <label htmlFor="gdpr">I consent to the GDPR Terms</label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
