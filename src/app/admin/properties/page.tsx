"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Pencil, Trash2, Eye, X } from "lucide-react";

import PropertyForm from "../../../../components/PropertyForm";
import { useRouter } from "next/navigation";

interface Property {
  builder: string;
  _id: string;
  title: string;
  slug: string;
  type: string;
  description: string;
  purpose: string;
  location: string;
  price: number | string;
  bedrooms: number | string;
  bathrooms: number | string;
  areaSqft: number | string;
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
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editProperty, setEditProperty] = useState<Property | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10; // Number of properties per page

  // ✅ Check login and fetch properties
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin");
    if (loggedIn !== "true") {
      router.push("/login");
      return;
    }
    fetchProperties(currentPage);
  }, [currentPage]);

  const fetchProperties = async (page: number) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE}/property`,
        {
          params: { page, limit: pageSize },
        }
      );

      if (res.data?.success) {
        setProperties(res.data.properties || []);
        setTotalPages(res.data.totalPages || 1);
        setCurrentPage(res.data.currentPage || 1);
      } else {
        setProperties([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Failed to fetch properties", error);
      setProperties([]);
      setTotalPages(1);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE}/property/${slug}`
      );
      fetchProperties(currentPage); // refetch after delete
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
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Purpose</th>
              <th className="p-3">Type</th>
              <th className="p-3">Location</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property._id} className="border-t border-gray-300">
                  <td className="p-3 text-center">{property.title}</td>
                  <td className="p-3 text-center">{property.purpose}</td>
                  <td className="p-3 text-center">{property.type}</td>
                  <td className="p-3 text-center">{property.location}</td>
                  <td className="p-3 flex gap-3 justify-center">
                    <button
                      onClick={() => openViewModal(property)}
                      className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white cursor-pointer"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => openFormModal(property)}
                      className="p-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-white cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(property.slug)}
                      className="p-2 bg-red-500 hover:bg-red-600 rounded-lg text-white cursor-pointer"
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
              className="absolute top-3 right-3 text-gray-400 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-2">
              {selectedProperty.title}
            </h2>
            <p className="mb-4 text-gray-300">{selectedProperty.description}</p>

            {/* Property Details */}
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
                <p>
                  <strong>Type:</strong> {selectedProperty.type ?? "—"}
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
                <p>
                  <strong>Builder:</strong> {selectedProperty.builder ?? "—"}
                </p>
              </div>
            </div>

            {/* Lists */}
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

            {/* Images */}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-2 rounded border bg-black hover:bg-gray-800 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-2 rounded border ${
                currentPage === num
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-black hover:bg-gray-800"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-2 rounded border hover:bg-gray-800 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Form Modal */}
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
                      builder: editProperty.builder ?? "",
                    }
                  : undefined
              }
              onClose={() => setIsFormModalOpen(false)}
              onSuccess={() => fetchProperties(currentPage)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
