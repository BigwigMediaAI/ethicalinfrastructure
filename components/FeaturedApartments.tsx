"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBath, FaBed } from "react-icons/fa";
import { PiRuler } from "react-icons/pi";
import Image from "next/image";
import image1 from "../assets/silverglades.png";
import image2 from "../assets/av.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "./Button";
import LeadFormModal from "./LeadPopup";

const apartments = [
  {
    id: 1,
    slug: "silverglades",
    tag: "Featured",
    title: "Silverglades",
    location: "Gurugram, Haryana",
    price: "",
    description:
      "Since 1988, we’ve been redefining luxury living across Delhi NCR, creating timeless homes that reflect innovation, elegance, and enduring quality.",
    image: image1,
    beds: 4,
    baths: 5,
    area: "7700 ft²",
  },
  {
    id: 2,
    slug: "ananta-vilasa",
    tag: "Hot Offer",
    price: "",
    title: "Ananta Vilasa",
    location: "Gurugram, Haryana",
    description:
      "Discover Ananta Vilasa, an exclusive collection of 4BHK residences along Gurugram’s Golf Course Road. Crafted by Reza Kabul, where design, luxury, and serenity meet effortlessly.",
    image: image2,
    beds: 4,
    baths: 5,
    area: "3549 ft²",
  },
];

export default function FeaturedApartments() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % apartments.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + apartments.length) % apartments.length);
  };

  const current = apartments[index];

  return (
    <div className="bg-[var(--white)] text-white py-12">
      <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-[var(--featured)] py-8 px-14 rounded-2xl shadow-lg">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <p
            className="text-[var(--primary-color)] text-sm uppercase tracking-widest"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Exclusive
          </p>
          <h2
            className="text-4xl font-bold mt-2 mb-6 tracking-widest text-[var(--title)]"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Featured Apartments
          </h2>
          <p
            className=" mb-4 text-[var(--text)]"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Dynamic approach and tireless commitment to facilitating
            transactions for buyers and sellers.
          </p>
          <p
            className="text-[var(--text)] mb-6"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            Based in Gurugram, we are renowned for providing expert guidance and
            personalized services to clients across all real estate sectors.
          </p>
          <div data-aos="fade-right" data-aos-delay="1000">
            <ButtonFill
              text="Get in Touch"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>

        {/* Right Card Section */}
        <div
          className="relative bg-white text-black rounded-2xl shadow-lg overflow-visible md:w-1/2 flex min-h-[380px] transition-all duration-300 ease-in-out"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          {/* Image */}
          <div className="w-1/2 relative">
            <Image
              src={current.image}
              alt={current.title}
              width={400}
              height={300}
              className="object-cover h-full w-full rounded-l-2xl"
            />
            <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-xs rounded">
              {current.tag}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mt-1 text-[var(--primary-color)]">
                {current.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{current.location}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-4 text-justify">
                {current.description}
              </p>
              <div className="flex items-center gap-4 text-gray-700 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <FaBed /> {current.beds}
                </span>
                <span className="flex items-center gap-1">
                  <FaBath /> {current.baths}
                </span>
                <span className="flex items-center gap-1">
                  <PiRuler /> {current.area}
                </span>
              </div>
            </div>

            {/* View Details Button */}
            <Link href={`/buy/${current.slug}`}>
              <ButtonFill text="View Details" />
            </Link>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-12 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#112335] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-12 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#112335] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <LeadFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
