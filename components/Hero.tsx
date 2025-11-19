"use client";

import React, { useState } from "react";
import LeadFormModal from "./LeadPopup";
import { Tinos } from "next/font/google";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["700"],
});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[86vh] md:h-[100vh] overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          src="./Ethvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          {/* First Line - slide from top */}
          <h1
            className={`${tinos.className} text-4xl md:text-6xl font-bold uppercase mb-4 animate-slideFromTop text-white`}
          >
            Ethical Infrastructures Pvt. Ltd.
          </h1>

          {/* Second Line - slide from bottom */}
          <p className="text-lg md:text-2xl text-white/70 font-medium mb-8 animate-slideFromBottom">
            Your Vision, Our Ethical Commitment
          </p>

          {/* Button - appears after text with zoom-in */}
          <div className="animate-zoomIn mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer relative overflow-hidden border-2 border-white px-6 py-2 rounded-lg group transition-all duration-500"
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-[var(--primary-color)] h-0 group-hover:h-full transition-all duration-500 ease-in rounded-md z-0"></span>

              {/* Text */}
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-500">
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Animations */}
      <style jsx>{`
        @keyframes slideFromTop {
          0% {
            transform: translateY(-150px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideFromBottom {
          0% {
            transform: translateY(150px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-slideFromTop {
          animation: slideFromTop 3.5s ease-out forwards;
        }

        .animate-slideFromBottom {
          animation: slideFromBottom 3.5s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1s ease-out forwards;
          animation-delay: 3.5s; /* Wait for both texts to finish */
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </>
  );
};

export default Hero;
