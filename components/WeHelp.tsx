"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import aboutImg from "../assets/9-768x532.webp"; // replace with your image
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const WeHelp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ===== Left Content ===== */}
        <div className="space-y-6">
          <h2
            className="text-4xl font-bold text-[var(--title)] tracking-widest"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            We help our clients sell, buy or rent properties
          </h2>

          <p
            className="text-gray-600 leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="400"
          >
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
              <li
                key={index}
                className="flex items-center gap-3"
                data-aos="fade-right"
                data-aos-delay={index * 300}
              >
                <FaCheckCircle className="text-[var(--primary-color)]" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact-us">
            <button
              className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] text-white font-medium px-6 py-2 rounded-md shadow-md transition cursor-pointer"
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              Contact us
            </button>
          </Link>
        </div>

        {/* ===== Right Image with Play Icon ===== */}
        <div
          className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-right"
          zoom-in="1200"
        >
          <Image
            src={aboutImg}
            alt="Modern Living Room"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WeHelp;
