"use client";

import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ButtonFill from "./Button";
import Image from "next/image";
import popupBg from "../assets/9-768x532.webp";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirements: "Apartment",
    budget: "Below ₹1Cr",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // ✅ Regex validation
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const phoneRegex = /^\+\d{1,4}\d{10}$/; // international format with +country code

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number with country code");
      return;
    }
    if (formData.email && !emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/submit`,
        formData
      );
      if (res.status === 200) {
        setSuccess("Lead submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirements: "Apartment",
          budget: "Below ₹1Cr",
          message: "",
        });
        setTimeout(() => onClose(), 1500);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Error submitting form");
      } else {
        alert("Error submitting form");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="relative bg-white text-black w-full md:w-[800px] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src={popupBg}
            alt="Contact background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-semibold">Let’s Connect</h3>
            <p className="text-sm text-gray-200 mt-1">
              Your dream property is just one message away.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            &times;
          </button>

          <h3 className="text-2xl font-bold mb-2 text-[#021A33]">
            Get In Touch
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Fill out the form and our team will reach out shortly.
          </p>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
              placeholder="Email Address (optional)"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
            />

            <select
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
            >
              <option value="Apartment">Apartment</option>
              <option value="Builder Floor">Builder Floor</option>
              <option value="Villa">Villa</option>
              <option value="Farmhouse">Farmhouse</option>
            </select>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
            >
              <option value="Below ₹1Cr">Below ₹1Cr</option>
              <option value="₹1Cr - ₹2Cr">₹1Cr - ₹2Cr</option>
              <option value="₹2Cr - ₹5Cr">₹2Cr - ₹5Cr</option>
              <option value="Above ₹5Cr">Above ₹5Cr</option>
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
              text={loading ? "Submitting..." : "Submit"}
              onClick={() => {}}
              className="w-full font-semibold py-2 mt-2"
            />
          </form>

          {success && (
            <p className="text-green-600 text-sm mt-2 font-medium">{success}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;
