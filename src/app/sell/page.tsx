"use client";
import { useEffect, useRef, useState } from "react";

import {
  Phone,
  Mail,
  Home,
  ClipboardList,
  DollarSign,
  CheckCircle,
  X,
} from "lucide-react";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import banner from "../../../assets/sell.jpg";

import Image from "next/image";
import SellForm from "../../../components/SellForm";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "../../../components/Button";

function Sell() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const [showForm, setShowForm] = useState(false);

  const sellRef = useRef<HTMLDivElement | null>(null);
  const scrollToNext = () => {
    if (sellRef.current) {
      const yOffset = -50;
      const y =
        sellRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black flex flex-col justify-center items-center text-center px-6 tracking-widest">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative text-white z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            Get the Best Value for Your Property
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Partner with us to sell faster, smarter, and at the right price. Our
            expert team ensures maximum exposure and trusted buyers.
          </p>

          <button
            onClick={scrollToNext}
            className="mt-10 animate-bounce border rounded-full w-fit px-1 py-2 mx-auto cursor-pointer"
          >
            <span className="text-3xl">↓</span>
          </button>
        </div>
      </div>

      <section
        ref={sellRef}
        className="py-12  w-11/12 md:w-5/6 mx-auto tracking-widest"
      >
        <h2 className="text-4xl  font-bold   text-center mb-12 text-[var(--title)]">
          Our Selling Process
        </h2>
        <div className="grid md:grid-cols-3 gap-10 ">
          <div
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition "
            data-aos="fade-up"
          >
            <ClipboardList
              size={40}
              className="text-[var(--primary-color)] mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[var(--title)]">
              Step 1: Share Your Details
            </h3>
            <p className="text-[var(--text)]">
              Fill out our form or call us directly to provide basic information
              about your property.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Home size={40} className="text-[var(--primary-color)] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[var(--title)]">
              Step 2: Property Evaluation
            </h3>
            <p className="text-[var(--text)]">
              Our experts will evaluate your property and suggest the best
              market price.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition "
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <DollarSign
              size={40}
              className="text-[var(--primary-color)] mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[var(--title)]">
              Step 3: Close the Deal
            </h3>
            <p className="text-[var(--text)]">
              We connect you with genuine buyers and ensure a hassle-free
              closing process.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12  tracking-widest">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--title)]">
          Why Sell With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 w-11/12 md:w-5/6 mx-auto">
          {[
            {
              title: "Trusted Network",
              desc: "Access to genuine buyers & investors.",
            },
            {
              title: "Best Market Price",
              desc: "Get accurate valuation and maximum returns.",
            },
            {
              title: "Hassle-Free Process",
              desc: "We handle the legal and documentation work.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 rounded-xl bg-[var(--desktop-sidebar)] shadow"
              data-aos="fade-up"
              data-aos-delay={i * 300}
            >
              <CheckCircle className="text-[var(--primary-color)]" size={32} />
              <div>
                <h3 className="text-lg font-semibold text-[var(--black)]">
                  {item.title}
                </h3>
                <p className="text-[var(--text)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sell Form */}
      <section className="py-12 w-11/12 md:w-5/6 mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--title)] ">
          Get In Touch With Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center tracking-widest">
          <div className="space-y-6">
            <p className="text-md text-[var(--text)]">
              Want to sell your property quickly and easily? Fill out the form
              or contact us directly.
            </p>
            <div className="flex items-center gap-3">
              <Phone className="text-[var(--title)]" />
              <span className="text-md">+91 8368607860</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[var(--title)]" />
              <span className="text-md">info@khalsaproperty.in</span>
            </div>

            {/* Button to toggle form */}
            <ButtonFill
              text="List Your Property"
              onClick={() => setShowForm(!showForm)}
              className="font-semibold py-3 px-8 shadow-md"
            />
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-[var(--desktop-sidebar)] w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto p-8 rounded-2xl shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={28} />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-[var(--title)] text-center">
              List Your Property
            </h2>

            <SellForm onSuccess={() => setShowForm(false)} />
          </div>
        </div>
      )}

      <div className="bg-[var(--primary-color)] text-white text-center py-10 px-4 mt-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Dream Project?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s bring your vision to life with our expert team. Get in touch
          today and take the first step toward your future.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Sell;
