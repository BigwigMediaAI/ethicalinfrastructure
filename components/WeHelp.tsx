"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import aboutImg from "../assets/9-768x532.webp"; // replace with your image

const WeHelp = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ===== Left Content ===== */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We help our clients sell, buy or rent properties
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Utilizing our exceptional experience and knowledge of the luxury
            waterfront markets, we serve an extensive and elite worldwide client
            base with honesty and transparency.
          </p>

          <ul className="space-y-3 text-gray-700">
            {[
              "24/7 Support available",
              "Expert legal support from us",
              "Free submission on our website",
              "Home loans assistance from our staff",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition">
            Contact us today
          </button>
        </div>

        {/* ===== Right Image with Play Icon ===== */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={aboutImg}
            alt="Modern Living Room"
            fill
            className="object-cover"
            priority
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <button className="bg-white/80 hover:bg-white text-blue-600 rounded-full p-4 transition">
              <FaPlay size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
