"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Trash2, X } from "lucide-react";

interface SellRequest {
  _id: string;
  name: string;
  email: string;
  phone: string;
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
  approved: boolean;
  createdAt: string;
}

export default function SellRequests() {
  const [sellRequests, setSellRequests] = useState<SellRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<SellRequest | null>(
    null
  );
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isApproving, setIsApproving] = useState(false);

  useEffect(() => {
    fetchSellRequests();
  }, []);

  const fetchSellRequests = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE}/sellproperty/viewsell`
      );
      setSellRequests(res.data);
    } catch (error) {
      console.error("Failed to fetch sell requests", error);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this request?")) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE}/sellproperty/${slug}`
      );
      setSellRequests(sellRequests.filter((r) => r.slug !== slug));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleApprove = async (_id: string) => {
    try {
      setIsApproving(true);
      console.log(_id);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/sell/approve/${_id}`
      );
      alert("Request approved!");
      setIsViewModalOpen(false);
      fetchSellRequests();
    } catch (error) {
      console.error("Approve failed", error);
    } finally {
      setIsApproving(false);
    }
  };

  const openViewModal = (request: SellRequest) => {
    setSelectedRequest(request);
    setIsViewModalOpen(true);
  };

  return (
    <div className="p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Sell Requests</h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3">Title</th>

              <th className="p-3">Location</th>
              <th className="p-3">Seller</th>
              <th className="p-3">Approved</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellRequests.length > 0 ? (
              sellRequests.map((req) => (
                <tr key={req._id} className="border-t border-gray-300">
                  <td className="p-3 text-center">{req.title}</td>

                  <td className="p-3 text-center">{req.location}</td>
                  <td className="p-3 text-center">{req.name}</td>
                  <td className="p-3 text-center">
                    {req.approved ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-500 font-semibold">No</span>
                    )}
                  </td>
                  <td className="p-3 flex gap-3 justify-center">
                    <button
                      onClick={() => openViewModal(req)}
                      className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(req.slug)}
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
                  colSpan={6}
                  className="text-center p-4 text-gray-500 italic"
                >
                  No sell requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {isViewModalOpen && selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto no-scrollbar rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Title & Description */}
            <h2 className="text-2xl font-bold mb-2">{selectedRequest.title}</h2>
            <p className="mb-4 text-gray-300">{selectedRequest.description}</p>

            {/* Seller Info */}
            <div className="mb-4 p-4 border border-gray-600 rounded-lg bg-gray-900">
              <h3 className="font-semibold mb-2">Seller Info</h3>
              <p>
                <strong>Name:</strong> {selectedRequest.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedRequest.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedRequest.phone}
              </p>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <strong>Purpose:</strong> {selectedRequest.purpose}
                </p>
                <p>
                  <strong>Location:</strong> {selectedRequest.location}
                </p>
                <p>
                  <strong>Price:</strong> {selectedRequest.price ?? "—"}
                </p>
              </div>
              <div>
                <p>
                  <strong>Bedrooms:</strong> {selectedRequest.bedrooms ?? "—"}
                </p>
                <p>
                  <strong>Bathrooms:</strong> {selectedRequest.bathrooms ?? "—"}
                </p>
                <p>
                  <strong>Area (sqft):</strong>{" "}
                  {selectedRequest.areaSqft ?? "—"}
                </p>
              </div>
            </div>

            {/* Approve Button */}

            {/* Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
              {selectedRequest.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Sell request image ${idx}`}
                  className="rounded-lg w-full h-40 object-cover"
                />
              ))}
            </div>
            {/* Approve Button */}
            {!selectedRequest.approved && (
              <div className="flex justify-end mt-10">
                <button
                  onClick={() => handleApprove(selectedRequest._id)}
                  disabled={isApproving}
                  className="inline-block bg-[var(--primary-color)] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition"
                >
                  {isApproving ? "Approving..." : "Approve"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
