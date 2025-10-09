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
    <section className="w-full py-16 bg-[var(--white)]/40">
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
              className="text-[var(--text)] flex-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              To be a trusted leader in real estate by providing transparent,
              personalized, and cost-effective solutions. We aim to exceed
              client expectations through expert guidance, market insights, and
              dedicated support, ensuring every property transaction delivers
              long-term value, satisfaction, and a seamless, stress-free
              experience for our clients.
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
              className="text-[var(--text)] mb-4 flex-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Ethical Infrastructures Pvt. Ltd. is dedicated to delivering
              personalized, cost-effective real estate solutions focused on
              client needs and long-term value.
            </p>
            <Image
              src={sampleImage2}
              alt="Right Side"
              className="rounded-lg mb-4 object-cover h-[350px] w-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <p
              className="text-[var(--text)] flex-1"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Our expert team ensures every client receives complete guidance,
              market insights, and seamless service, from property search to
              successful investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
