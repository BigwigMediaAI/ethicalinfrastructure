"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBath, FaBed } from "react-icons/fa";
import { PiRuler } from "react-icons/pi";
import Image from "next/image";
import image1 from "../assets/9-768x532.webp";
import image2 from "../assets/9-768x532.webp";
import image3 from "../assets/9-768x532.webp";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const apartments = [
  {
    id: 1,
    tag: "Featured",
    price: "$500,000",
    title: "Park Avenue Apartment",
    location: "East 59th St",
    description:
      "Located inside Fort Bonifacio, this luxurious apartment features spacious interiors, modern design, and a private pool area.",
    image: image1,
    beds: 3,
    baths: 2.5,
    area: "1,300 ft²",
    agent: "Jess Lee",
  },
  {
    id: 2,
    tag: "Hot Offer",
    price: "$420,000",
    title: "Sunset Heights",
    location: "Ocean Drive",
    description:
      "Enjoy ocean views and premium amenities in this modern apartment with an open-plan layout and a large balcony.",
    image: image2,
    beds: 2,
    baths: 2,
    area: "1,100 ft²",
    agent: "Ryan Patel",
  },
  {
    id: 3,
    tag: "Sales",
    price: "$620,000",
    title: "Emerald Towers",
    location: "Downtown Ave",
    description:
      "A stylish apartment located in the heart of the city with easy access to shopping centers and top restaurants.",
    image: image3,
    beds: 4,
    baths: 3,
    area: "1,800 ft²",
    agent: "Sophia Chen",
  },
];

export default function FeaturedApartments() {
  const [index, setIndex] = useState(0);

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
    <div className="bg-[#021A33] text-white py-12">
      <div className="w-11/12 md:w-5/6 mx-auto  flex flex-col md:flex-row items-center justify-between gap-10">
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
            className="text-4xl font-bold mt-2 mb-6 tracking-widest"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Featured Apartments
          </h2>
          <p
            className="text-gray-300 mb-4"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Dynamic approach and tireless commitment to facilitating
            transactions for buyers and sellers.
          </p>
          <p
            className="text-gray-300 mb-6"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            In the vibrant neighborhood of Portland, Maryland, we are renowned
            among residents, developers, and professionals.
          </p>
          <Link href="/contact-us">
            <button
              className="bg-[var(--primary-color)] text-white px-6 py-2 hover:bg-[var(--hover-color)] rounded-lg cursor-pointer"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Card Section */}
        <div
          className="relative bg-white text-black rounded-2xl shadow-lg overflow-visible md:w-1/2 flex min-h-[350px] transition-all duration-300 ease-in-out"
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
              <h3 className="text-blue-600 text-lg font-semibold">
                {current.price}
              </h3>
              <h2 className="text-2xl font-bold mt-1">{current.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{current.location}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                {current.description}
              </p>
              <div className="flex items-center gap-4 text-gray-700 text-sm">
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
              <p className="text-sm text-gray-600 mt-4">
                Agent: {current.agent}
              </p>
            </div>
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
    </div>
  );
}
