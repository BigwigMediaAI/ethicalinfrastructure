"use client";

import React, { useEffect, useState } from "react";
import hero from "../assets/book_wide-1.webp";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    purpose: "buy",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation duration 1s, animate once
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/send-otp`,
        formData
      );
      if (res.status === 200) {
        setOtpSent(true);
        setSuccess("OTP sent to your email.");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Error sending OTP");
      } else {
        alert("Error sending OTP");
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/verify-otp`,
        {
          email: formData.email,
          otp,
        }
      );
      if (res.status === 200) {
        setSuccess("Lead submitted successfully!");
        setOtpSent(false);
        setOtp("");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          purpose: "buy",
        });
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Invalid OTP");
      } else {
        alert("Invalid OTP");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 md:w-5/6 mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left tracking-widest">
          <h1
            className="text-4xl font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Get More Real Estate Leads With{" "}
            <span className="text-blue-400">Ethical Infrastructure</span>
          </h1>
          <p
            className="text-gray-200 text-lg max-w-lg"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Engage with our professional real estate agents to buy, sell, or
            lease properties. We specialize in Residential, Commercial,
            Industrial, Pre-Leased properties, and Farmhouses. Receive leads
            directly to your inbox and manage them with our built-in CRM.
          </p>
        </div>

        {/* Right Contact Form */}
        <div
          className="mt-6 mb-6 md:w-1/3 bg-white text-black rounded-lg shadow-lg p-6"
          data-aos="zoom in"
        >
          <h3 className="text-2xl font-semibold mb-2 tracking-widest">
            Get In Touch
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Fill out this form and one of our agents will be in touch with you
            soon.
          </p>

          {!otpSent ? (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                sendOtp();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                required
              />

              {/* React Phone Input */}
              <PhoneInput
                international
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(value) =>
                  setFormData({ ...formData, phone: value || "" })
                }
                className="phone-input border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                required
              />
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
              <textarea
                name="message"
                rows={3}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              ></textarea>

              <button
                type="submit"
                className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] text-white font-semibold py-2 rounded"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                verifyOtp();
              }}
            >
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                required
              />
              <button
                type="submit"
                className="bg-[var(--primary-color)] hover:bg-[var(--hover-color)] text-white font-semibold py-2 rounded"
                disabled={loading}
              >
                {loading ? "Verifying OTP..." : "Verify OTP & Submit"}
              </button>
            </form>
          )}

          {success && <p className="text-green-600 mt-2">{success}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
