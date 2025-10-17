// import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, Phone } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/contact.webp";
import Image from "next/image";
import ContactSidebar from "../../../components/ContactSidebar";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="  min-h-screen ">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black flex flex-col justify-center items-center text-center px-6 tracking-widest">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative text-white z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            Get in Touch With Us
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you with
            all your property needs. Let’s connect and turn your real estate
            goals into reality.
          </p>
        </div>
      </div>

      <section className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8  ">
        <div className="pt-4">
          <h2 className="text-xl md:text-2xl mb-2 font-bold text-[var(--primary-color)] font-amatic border-l-4 border-[var(--primary-color)] pl-3">
            Head Office
          </h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Gurugram, India</p>
          <p className="mb-4">
            A-26/12B,FF1 DLFCity,Phase-1 Gurugram Haryana -122011
          </p>
          <p className="text-gray-400 mt-8">
            Our business operating hours are as follows:
          </p>
          We’re here for you from 10 AM to 7 PM daily{" "}
        </div>

        <div className="pt-4">
          <h2 className="text-xl md:text-2xl mb-2 font-bold text-[var(--primary-color)] font-amatic border-l-4 border-[var(--primary-color)] pl-3">
            Get in Touch
          </h2>
          <hr />
          <p className="mb-4 text-gray-400 font-sans">
            Please contact us via phone or email below or visit us at our Head
            Office in Business Bay during operating hours.
          </p>

          <div className="flex flex-col gap-4">
            {/* Phone Button */}
            <Link
              href="tel:+919999000183"
              className="bg-[var(--featured)] text-[var(--text)]  rounded-md p-4 flex items-center gap-4 shadow-sm transition font-sans"
            >
              <Phone className="w-6 h-6 " />
              <span className="text-sm ">+91 9999000183</span>
            </Link>
            {/* <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">+91 9999000172</span>
            </div> */}

            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/+919999000172"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--featured)] text-[var(--text)] rounded-md p-4 flex items-center gap-4 shadow-sm transition font-sans"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600" />
              <span className="text-sm ">+91 9999000172</span>
            </Link>

            {/* Email Button */}
            <Link
              href="mailto:info@eipl.co"
              className="bg-[var(--featured)] text-[var(--text)] rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <Mail className="w-6 h-6 " />
              <span className="text-sm">info@eipl.co</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start py-8 gap-10 mb-7  ">
          {/* Form Section */}
          {/* <div className="w-full md:w-1/2 max-w-lg bg-gray-100 rounded-lg p-8 shadow-lg text-left  border border-[var(--primary-color)]">
          <form className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className="bg-white border border-gray-600 placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-white border border-gray-600  placeholder-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />

            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="IN"
              international
              className="bg-white border border-gray-600 px-4 py-3 text-[16px] rounded-lg w-full text-black placeholder-gray-400"
              onChange={function (_value?: Value): void {
                throw new Error("Function not implemented.");
              }}
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              className="bg-white border border-gray-600 placeholder-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-[var(--primary-color)] hover:opacity-80 text-white py-3 px-6 rounded-lg w-full transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div> */}

          {/* Map Section */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg border border-[var(--primary-color)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2037326384284!2d77.0934439!3d28.4734105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d7d137311f%3A0xc0cbc38c4452175d!2sETHICAL%20INFRASTRUCTURES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1759831704667!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[9999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+919999000183"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+919999000172"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <ContactSidebar />
      </div>
      <Footer />
    </div>
  );
}
