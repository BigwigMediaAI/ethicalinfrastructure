"use client";
import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface SellFormProps {
  onSuccess?: () => void;
}

export default function SellForm({ onSuccess }: SellFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",
    purpose: "Buy",
    type: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    areaSqft: "",
    highlights: "[]",
    featuresAmenities: "[]",
    nearby: "[]",
    googleMapUrl: "",
    videoLink: "",
    extraHighlights: "[]",
  });

  const [images, setImages] = useState<FileList | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      title: "",
      description: "",
      purpose: "Buy",
      type: "",
      location: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      areaSqft: "",
      highlights: "[]",
      featuresAmenities: "[]",
      nearby: "[]",
      googleMapUrl: "",
      videoLink: "",
      extraHighlights: "[]",
    });
    setImages(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key as keyof typeof formData]);
      }

      if (images) {
        Array.from(images).forEach((file) => {
          data.append("images", file);
        });
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/sellproperty/addsell`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(
        "Thank you! Your property is under review. We’ll get back to you soon."
      );
      resetForm();
      onSuccess?.();
    } catch (error) {
      console.error(error);
      alert("Failed to submit listing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form
        className="space-y-8 max-h-[70vh] overflow-y-auto p-4 no-scrollbar"
        onSubmit={handleSubmit}
      >
        {/* Seller Info */}
        <div className="p-6 border  shadow-sm bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Seller Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border  w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border  w-full"
            />
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputClass="w-full p-3 border  focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              buttonClass="border -l h-full" // styles the dropdown button
              containerClass="w-full"
              placeholder="Phone Number"
              enableAreaCodes={true}
              enableSearch={true}
            />
          </div>
        </div>

        {/* Property Info */}
        <div className="p-6 border  shadow-sm bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Property Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Property Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="p-3 border  w-full col-span-2"
            />
            <textarea
              name="description"
              placeholder="Property Description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="p-3 border  w-full col-span-2"
            ></textarea>

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="p-3 border  w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="p-3 border  w-full"
              min={0}
            />
            <input
              type="number"
              name="bedrooms"
              placeholder="Bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="p-3 border  w-full"
              min={0}
            />
            <input
              type="number"
              name="bathrooms"
              placeholder="Bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="p-3 border  w-full"
              min={0}
            />
            <input
              type="number"
              name="areaSqft"
              placeholder="Area (sq ft)"
              value={formData.areaSqft}
              onChange={handleChange}
              className="p-3 border  w-full"
              min={0}
            />
            <input
              type="text"
              name="googleMapUrl"
              placeholder="Google Map URL"
              value={formData.googleMapUrl}
              onChange={handleChange}
              className="p-3 border  w-full"
            />
            <input
              type="text"
              name="videoLink"
              placeholder="Video Link"
              value={formData.videoLink}
              onChange={handleChange}
              className="p-3 border  w-full"
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="p-3  "
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition"
        >
          {loading ? "Submitting..." : "Submit Property"}
        </button>
      </form>
    </div>
  );
}
