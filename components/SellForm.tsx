"use client";
import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ButtonFill from "./Button";

interface SellFormProps {
  onSuccess?: () => void;
}

interface PropertyData {
  name: string;
  email: string;
  phone: string;
  title: string;
  description: string;
  purpose: string;
  type: string;
  location: string;
  price: number | string;
  bedrooms: number | string;
  bathrooms: number | string;
  areaSqft: number | string;
  highlights: string[];
  featuresAmenities: string[];
  nearby: string[];
  extraHighlights: string[];
  googleMapUrl: string;
  videoLink: string;
  brochure: File | null;
}

export default function SellForm({ onSuccess }: SellFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<PropertyData>({
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
    highlights: [],
    featuresAmenities: [],
    nearby: [],
    extraHighlights: [],
    googleMapUrl: "",
    videoLink: "",
    brochure: null,
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

  const handleBrochureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, brochure: e.target.files[0] });
    }
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
      highlights: [],
      featuresAmenities: [],
      nearby: [],
      extraHighlights: [],
      googleMapUrl: "",
      videoLink: "",
      brochure: null,
    });
    setImages(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      for (const key in formData) {
        const value = formData[key as keyof PropertyData];
        if (value !== null) {
          if (Array.isArray(value)) {
            data.append(key, JSON.stringify(value));
          } else {
            data.append(key, value.toString());
          }
        }
      }

      if (images) {
        Array.from(images).forEach((file) => {
          data.append("images", file);
        });
      }

      if (formData.brochure) {
        data.append("brochure", formData.brochure);
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
    <div className="text-[var(--text)] transition-colors duration-300">
      <form
        className="space-y-8 max-h-[70vh] overflow-y-auto p-4 no-scrollbar"
        onSubmit={handleSubmit}
      >
        {/* Seller Info */}
        <div className="p-6 border border-gray-300 dark:border-gray-800 rounded-lg shadow-sm bg-[var(--white)]">
          <h3 className="text-xl font-semibold mb-4 text-[var(--title)]">
            Seller Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 text-[var(--text)] rounded w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 dark:border-gray-800 bg-[var(--white)] text-[var(--text)] rounded w-full"
            />
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputClass="!w-full !border !border-gray-300 dark:!border-gray-800 !bg-[var(--white)] !text-[var(--text)] !rounded focus:outline-none"
              buttonClass="!border-none !bg-transparent"
              containerClass="w-full"
              placeholder="Phone Number"
              enableAreaCodes
              enableSearch
            />
          </div>
        </div>

        {/* Property Info */}
        <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-[var(--white)]">
          <h3 className="text-xl font-semibold mb-4 text-[var(--title)]">
            Property Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Property Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full col-span-2"
            />
            <textarea
              name="description"
              placeholder="Property Description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full col-span-2"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Builder Floor</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Plot">Plot</option>
              <option value="Office">Office</option>
            </select>

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
              min={0}
            />
            <input
              type="number"
              name="bedrooms"
              placeholder="Bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
              min={0}
            />
            <input
              type="number"
              name="bathrooms"
              placeholder="Bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
              min={0}
            />
            <input
              type="number"
              name="areaSqft"
              placeholder="Area (sq ft)"
              value={formData.areaSqft}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
              min={0}
            />
            <input
              type="text"
              name="googleMapUrl"
              placeholder="Google Map URL"
              value={formData.googleMapUrl}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
            />
            <input
              type="text"
              name="videoLink"
              placeholder="Video Link"
              value={formData.videoLink}
              onChange={handleChange}
              className="p-3 border border-gray-300 bg-[var(--white)] text-[var(--text)] rounded w-full"
            />

            {/* Images */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-[var(--text)]">
                Upload Property Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="p-3 text-[var(--text)] border border-gray-300 rounded"
              />
            </div>

            {/* Brochure */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-[var(--text)]">
                Upload Property Brochure (PDF)
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleBrochureChange}
                className="p-3 text-[var(--text)] border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <ButtonFill
          text={loading ? "Submitting..." : "Submit Property"}
          className="font-semibold py-3 px-8 shadow-md disabled:opacity-50"
        />
      </form>
    </div>
  );
}
