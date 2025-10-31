"use client";

import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ButtonFill from "./Button";

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirements: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // ✅ Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[1-9]\d{7,14}$/; // international format (E.164)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear errors when typing
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // ✅ Name
    if (!formData.name.trim()) newErrors.name = "Name is required.";

    // ✅ Phone
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid phone number with country code.";

    // ✅ Email
    if (formData.email && !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    // ✅ Requirements
    if (!formData.requirements)
      newErrors.requirements = "Please select a property type.";

    // ✅ Budget
    if (!formData.budget) newErrors.budget = "Please select a budget range.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = { ...formData };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/submit`,
        payload
      );

      if (res.status === 200) {
        setSuccess("✅ Lead submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirements: "",
          budget: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Lead submission failed:", err);
      alert("❌ Failed to submit. Please try again.");
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

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* ✅ PhoneInput with Country Code */}
          <PhoneInput
            international
            defaultCountry="IN"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, phone: value || "" }))
            }
            className="border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#021A33]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address (optional)"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Requirements Dropdown */}
          <select
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="border border-gray-300 bg-[var(--white)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
          >
            <option value="">Select Property Type*</option>
            <option value="Apartment">Apartment</option>
            <option value="Builder Floor">Builder Floor</option>
            <option value="Villa">Villa</option>
            <option value="Farmhouse">Farmhouse</option>
          </select>
          {errors.requirements && (
            <p className="text-red-500 text-sm">{errors.requirements}</p>
          )}

          {/* Budget Dropdown */}
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border border-gray-300 bg-[var(--white)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#021A33]"
          >
            <option value="">Select Budget Range*</option>
            <option value="Under ₹1 Crore">Under ₹1 Crore</option>
            <option value="₹1 Crore - ₹2 Crore">₹1 Crore - ₹2 Crore</option>
            <option value="₹2 Crore - ₹5 Crore">₹2 Crore - ₹5 Crore</option>
            <option value="Above ₹5 Crore">Above ₹5 Crore</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-sm">{errors.budget}</p>
          )}

          {/* Message */}
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
          <p className="text-green-600 text-sm mt-3 font-medium">{success}</p>
        )}
      </div>
    </section>
  );
};

export default LeadForm;
