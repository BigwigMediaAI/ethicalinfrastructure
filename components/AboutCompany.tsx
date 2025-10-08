"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import sampleImage1 from "../assets/about1.jpg";
import sampleImage2 from "../assets/aboutCompany.gif";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CompanySection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* Left Side */}
          <div
            className="flex-1 flex flex-col"
            data-aos="fade-up" // AOS animation for left side
          >
            <Image
              src={sampleImage1}
              alt="Left Side"
              className="rounded-lg mb-4 object-cover h-[350px] w-full"
            />

            <h3
              className="text-4xl font-bold mb-2 text-[var(--title)] tracking-widest"
              data-aos="zoom-in" // optional zoom-in for heading
              data-aos-delay="200"
            >
              Our Vision
            </h3>
            <p
              className="text-gray-700 flex-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              neque omnis ducimus doloremque natus reprehenderit, consequatur,
              unde veritatis dignissimos maxime aliquam quia distinctio maiores
              quo voluptas earum illo? Voluptates, dicta at quisquam earum
              ratione corrupti quia maxime similique quam? Rem!
            </p>
          </div>

          {/* Right Side */}
          <div
            className="flex-1 flex flex-col"
            data-aos="fade-down" // AOS animation for right side
          >
            <h3
              className="text-4xl font-bold mb-4 text-[var(--title)] tracking-widest"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              About the Company
            </h3>
            <p
              className="text-gray-700 mb-4 flex-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fringilla, nunc nec placerat consectetur, justo nulla lacinia
              lorem, sit amet egestas quam elit at nunc. Suspendisse potenti.
            </p>
            <Image
              src={sampleImage2}
              alt="Right Side"
              className="rounded-lg mb-4 object-cover h-[350px] w-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <p
              className="text-gray-700 flex-1"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vehicula diam at quam congue, in tincidunt libero commodo. Sed sit
              amet sapien non justo feugiat ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
