"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Pencil, Trash2, Eye, X } from "lucide-react";

import PropertyForm from "../../../../components/PropertyForm";

interface Property {
  _id: string;
  title: string;
  slug: string;
  description: string;
  purpose: string;
  location: string;
  price: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  areaSqft: number | null;
  highlights: string[];
  featuresAmenities: string[];
  nearby: string[];
  googleMapUrl: string;
  videoLink: string;
  extraHighlights: string[];
  images: string[];
  createdAt: string;
}

export default function AllProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editProperty, setEditProperty] = useState<Property | null>(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE}/property`
      );
      setProperties(res.data);
    } catch (error) {
      console.error("Failed to fetch properties", error);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE}/property/${slug}`
      );
      setProperties(properties.filter((p) => p.slug !== slug));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const openViewModal = (property: Property) => {
    setSelectedProperty(property);
    setIsViewModalOpen(true);
  };

  const openFormModal = (property?: Property) => {
    setEditProperty(property || null);
    setIsFormModalOpen(true);
  };

  return (
    <div className="p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Properties</h1>
        <button
          onClick={() => openFormModal()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          <Plus size={18} /> Add Property
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg">
          <thead className="bg-gray-900 text-white ">
            <tr>
              <th className="p-3">Title</th>

              <th className="p-3">Purpose</th>
              <th className="p-3">Location</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property._id} className="border-t border-gray-300">
                  <td className="p-3 text-center">{property.title}</td>
                  <td className="p-3 text-center ">{property.purpose}</td>
                  <td className="p-3 text-center">{property.location}</td>
                  <td className="p-3 flex gap-3 justify-center">
                    <button
                      onClick={() => openViewModal(property)}
                      className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => openFormModal(property)}
                      className="p-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-white"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(property.slug)}
                      className="p-2 bg-red-500 hover:bg-red-600 rounded-lg text-white"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-4 text-gray-500 italic"
                >
                  No properties found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {isViewModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto no-scrollbar rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Title & Description */}
            <h2 className="text-2xl font-bold mb-2">
              {selectedProperty.title}
            </h2>
            <p className="mb-4 text-gray-300">{selectedProperty.description}</p>

            {/* Property Details in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <strong>Purpose:</strong> {selectedProperty.purpose}
                </p>
                <p>
                  <strong>Location:</strong> {selectedProperty.location}
                </p>
                <p>
                  <strong>Price:</strong> {selectedProperty.price ?? "—"}
                </p>
              </div>
              <div>
                <p>
                  <strong>Bedrooms:</strong> {selectedProperty.bedrooms ?? "—"}
                </p>
                <p>
                  <strong>Bathrooms:</strong>{" "}
                  {selectedProperty.bathrooms ?? "—"}
                </p>
                <p>
                  <strong>Area (sqft):</strong>{" "}
                  {selectedProperty.areaSqft ?? "—"}
                </p>
              </div>
            </div>

            {/* Lists Section */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <strong>Highlights:</strong>
                  <ul className="list-disc ml-5 text-gray-300">
                    {selectedProperty.highlights?.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Nearby:</strong>
                  <ul className="list-disc ml-5 text-gray-300">
                    {selectedProperty.nearby?.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <strong>Features & Amenities:</strong>
                  <ul className="list-disc ml-5 text-gray-300">
                    {selectedProperty.featuresAmenities?.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Extra Highlights:</strong>
                  <ul className="list-disc ml-5 text-gray-300">
                    {selectedProperty.extraHighlights?.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Images moved to the bottom */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
              {selectedProperty.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Property image ${idx}`}
                  className="rounded-lg w-full h-40 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Form Modal (for Add / Update) */}
      {isFormModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto no-scrollbar rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setIsFormModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">
              {editProperty ? "Update Property" : "Add Property"}
            </h2>

            <PropertyForm
              property={
                editProperty
                  ? {
                      ...editProperty,
                      price: editProperty.price ?? "",
                      bedrooms: editProperty.bedrooms ?? "",
                      bathrooms: editProperty.bathrooms ?? "",
                      areaSqft: editProperty.areaSqft ?? "",
                    }
                  : undefined
              }
              onClose={() => setIsFormModalOpen(false)}
              onSuccess={fetchProperties}
            />
          </div>
        </div>
      )}
    </div>
  );
}
