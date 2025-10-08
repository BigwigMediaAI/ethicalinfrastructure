"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../assets/property/property1.jpg";
import image2 from "../assets/property/property2.jpg";
import image3 from "../assets/property/property3.jpg";
import image4 from "../assets/property/property4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Goa",
    location: "Goa, India",
    price: "₹2.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "3500 sqft",
    image: image1,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai, India",
    price: "₹1.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sqft",
    image: image2,
  },
  {
    id: 3,
    title: "Cozy Family Home",
    location: "Bangalore, India",
    price: "₹90 Lakh",
    bedrooms: 3,
    bathrooms: 2,
    area: "1500 sqft",
    image: image3,
  },
  {
    id: 4,
    title: "Beachfront Villa",
    location: "Goa, India",
    price: "₹4 Cr",
    bedrooms: 5,
    bathrooms: 4,
    area: "4000 sqft",
    image: image4,
  },
];

export default function PropertyGrid() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-12">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--title)] tracking-widest">
          Our Properties
        </h2>

        {/* ==== Mobile View: Swiper ==== */}
        <div className="block md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.2} grabCursor={true}>
            {properties.map((property, index) => (
              <SwiperSlide key={property.id}>
                <div
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
                  data-aos="fade-up"
                  data-aos-delay={index * 200} // stagger cards by 200ms
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-[var(--primary-color)]">
                      {property.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{property.location}</p>
                    <p className="font-semibold">{property.price}</p>
                    <div className="flex items-center gap-4 mt-2 text-gray-600">
                      <div className="flex items-center gap-1">
                        <FaBed /> {property.bedrooms}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBath /> {property.bathrooms}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaRulerCombined /> {property.area}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ==== Desktop View: Grid ==== */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger cards by 200ms
            >
              <div className="relative h-56 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[var(--primary-color)]">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-sm">{property.location}</p>
                <p className="font-semibold">{property.price}</p>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaBed /> {property.bedrooms}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath /> {property.bathrooms}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRulerCombined /> {property.area}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
