"use client";

import React, { useState } from "react";
import axios from "axios";
import ButtonFill from "./Button";
import toast from "react-hot-toast";

const Plotform: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    userType: "",
    plotSize: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phone: value });

      if (value.length > 0 && value.length < 10) {
        setErrors({
          ...errors,
          phone: "Phone number must be exactly 10 digits.",
        });
      } else {
        setErrors({ ...errors, phone: "" });
      }
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (formData.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits.";

    if (formData.email && !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.userType)
      newErrors.userType = "Please select Buyer or Seller.";
    if (!formData.plotSize) newErrors.plotSize = "Please enter plot size.";
    if (!formData.location) newErrors.location = "Location is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      countryCode: "+91",
      phone: "",
      email: "",
      userType: "",
      plotSize: "",
      location: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = {
        ...formData,
        phone: formData.countryCode + formData.phone,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/plot/create`,
        payload
      );
      //   console.log(res);

      if (res.data.success) {
        toast.success("Lead submitted successfully!");
        resetForm();
      }
    } catch (err) {
      console.error("Lead submission failed:", err);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[var(--white)] text-[var(--black)] overflow-hidden">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Phone */}
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="+91">+91 India</option>
            <option value="+971">+971 UAE</option>
            <option value="+1">+1 USA</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={10}
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address (optional)"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Buyer / Seller */}
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">You are a *</option>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
        {errors.userType && (
          <p className="text-red-500 text-sm">{errors.userType}</p>
        )}

        {/* Plot Size */}
        <input
          type="text"
          name="plotSize"
          placeholder="Plot Size (e.g., 200 sq yards)*"
          value={formData.plotSize}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        {errors.plotSize && (
          <p className="text-red-500 text-sm">{errors.plotSize}</p>
        )}

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Preferred Location*"
          value={formData.location}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location}</p>
        )}

        {/* Message */}
        <textarea
          name="message"
          rows={3}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        ></textarea>

        <ButtonFill
          text={loading ? "Submitting..." : "Submit"}
          onClick={() => {}}
          className="w-full font-semibold py-2 mt-2"
        />
      </form>
    </section>
  );
};

export default Plotform;
