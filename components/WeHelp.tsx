"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import aboutImg from "../assets/9-768x532.webp"; // replace with your image
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "./Button";
import LeadFormModal from "./LeadPopup";

const WeHelp = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className="w-full py-16 px-6">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ===== Left Content ===== */}
        <div className="space-y-6">
          <h2
            className="text-4xl font-bold text-[var(--title)] tracking-widest"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            We help our clients sell, buy or lease properties
          </h2>

          <p
            className="text-[var(--text)] leading-relaxed text-justify"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            With years of expertise in Residential, Commercial, Industrial,
            Leasing, Pre-Leased, and FarmHouse properties, we provide trusted
            guidance and personalized services to clients in Gurugram and
            beyond.
          </p>

          <ul className="space-y-3 text-[var(--text)]">
            {[
              "24/7 client support",
              "Expert legal and documentation assistance",
              "Property listing and promotion services",
              "Dedicated team for smooth transactions",
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

          <div data-aos="fade-right" data-aos-delay="1200">
            <ButtonFill
              text="Get in Touch"
              onClick={() => setShowModal(true)}
            />
          </div>
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
      <LeadFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default WeHelp;
