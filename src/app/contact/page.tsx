// import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ContactPage() {
  return (
    <div className=" bg-white min-h-screen text-black">
      <Navbar />

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
          <p className="mt-2">Monday to Saturday: 11:00am - 7:30pm</p>
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
            <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">+91 9999000183</span>
            </div>
            <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">+91 9999000172</span>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+919999000172"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-700">+91 9999000172</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:info@khalsaproperty.in"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <Mail className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">
                info@khalsaproperty.in
              </span>
            </a>
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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3507.2049651170355!2d77.09081647549499!3d28.47337337575202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzI0LjEiTiA3N8KwMDUnMzYuMiJF!5e0!3m2!1sen!2sin!4v1759821507241!5m2!1sen!2sin"
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
      <Footer />
    </div>
  );
}
