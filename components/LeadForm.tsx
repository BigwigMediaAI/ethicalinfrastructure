"use client";

import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ButtonFill from "./Button";
import Image from "next/image";
import popupBg from "../assets/9-768x532.webp";

const LeadForm: React.FC = () => {
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
    <section className="w-full bg-[var(--white)] text-[var(--black)] overflow-hidden flex flex-col md:flex-row">
      <div className="w-full p-6">
        <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
        <p className="text-gray-500 text-sm mb-6">
          Fill out the form and our team will reach out shortly.
        </p>

        {!otpSent ? (
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              sendOtp();
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
              required
            />

            <PhoneInput
              international
              defaultCountry="IN"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(value) =>
                setFormData({ ...formData, phone: value || "" })
              }
              className="phone-input border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
              required
            />

            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="border border-gray-300 bg-[var(--white)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="lease">Lease</option>
            </select>

            <textarea
              name="message"
              rows={3}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
            ></textarea>

            <ButtonFill
              text={loading ? "Sending OTP..." : "Submit"}
              onClick={() => !loading && sendOtp()}
              className="w-full font-semibold py-2 mt-2"
            />
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
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
              required
            />

            <ButtonFill
              text={loading ? "Verifying OTP..." : "Verify OTP & Submit"}
              onClick={() => !loading && verifyOtp()}
              className="w-full font-semibold py-2"
            />
          </form>
        )}

        {success && (
          <p className="text-green-600 text-sm mt-2 font-medium">{success}</p>
        )}
      </div>
    </section>
  );
};

export default LeadForm;
