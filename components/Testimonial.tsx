"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Pulkit Sharma",
    message:
      "ETHICAL INFRASTRUCTURES made buying my dream apartment in Gurugram effortless. The team guided me at every step and ensured a transparent and smooth process.",
  },
  {
    name: "Kirti Bedi",
    message:
      "Selling my property was never this easy! The consultants provided professional advice, connected me with serious buyers, and handled all documentation seamlessly.",
  },
  {
    name: "Saurav Sharma",
    message:
      "Leasing a commercial space was quick and hassle-free thanks to their experienced team. They helped me find the right property that fit my budget and requirements.",
  },
  {
    name: "Anita Desai",
    message:
      "I highly recommend ETHICAL INFRASTRUCTURES. Their attention to detail, market knowledge, and honest guidance made my property investment worry-free.",
  },
  {
    name: "Rahul Verma",
    message:
      "From the first site visit to closing the deal, the team provided excellent support. Their professionalism and responsiveness are unmatched.",
  },
  {
    name: "Priya Kapoor",
    message:
      "Finding a leased home for my family was seamless. They offered a wide selection of verified listings and guided us through legal formalities efficiently.",
  },
  {
    name: "Raj Singh",
    message:
      "Buying my commercial property in Delhi NCR was a smooth experience. The team’s insights and market research helped me make the right decision.",
  },
  {
    name: "Neha Gupta",
    message:
      "The consultants are knowledgeable, patient, and extremely helpful. They ensured that all my questions were answered and the process was transparent.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className="w-full py-12 font-raleway relative">
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* Section Label */}
        <p className="text-[var(--primary-color)] text-sm uppercase tracking-widest">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-widest text-[var(--title)]">
          What People Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[var(--featured)] rounded-2xl border border-neutral-200 p-6 shadow-md h-72 flex flex-col justify-between hover:shadow-lg transition duration-300 relative">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[var(--primary-color)] text-3xl opacity-30 mb-3" />

                {/* Message */}
                <p className="text-base leading-relaxed text-[var(--text)] font-annie line-clamp-5">
                  {testimonial.message}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--primary-color)]">
                    — {testimonial.name}
                  </h3>

                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center text-sm font-bold uppercase">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
