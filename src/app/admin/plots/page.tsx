"use client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ContactRequest {
  _id: string;
  name: string;
  phone: string;
  email: string;
  userType: string;
  plotSize: string;
  location: string;
  message: string;
  marked: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 20;

const AdminPlots = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactRequest[]>(
    []
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  // Fetch Leads
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin");
    if (loggedIn !== "true") {
      router.push("/login");
      return;
    }

    fetch(`${API_BASE}/plot/all`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.data.sort(
          (a: ContactRequest, b: ContactRequest) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setContacts(sorted);
        setFilteredContacts(sorted);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  // Filter by Date
  useEffect(() => {
    if (!selectedDate) {
      setFilteredContacts(contacts);
      setCurrentPage(1);
      return;
    }

    const filtered = contacts.filter((c) =>
      new Date(c.createdAt).toISOString().startsWith(selectedDate)
    );

    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [selectedDate, contacts]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const currentContacts = filteredContacts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // ✅ Mark/Unmark Lead
  const handleMark = async (id: string, marked: boolean) => {
    try {
      const res = await fetch(`${API_BASE}/plot/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marked }),
      });

      if (!res.ok) throw new Error("Failed to update lead");

      const updatedLead = await res.json();
      setContacts((prev) =>
        prev.map((lead) => (lead._id === id ? updatedLead.data : lead))
      );
    } catch (err) {
      console.error("Error updating lead:", err);
    }
  };

  // ✅ Delete Lead
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    try {
      const res = await fetch(`${API_BASE}/plot/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete lead");

      setContacts((prev) => prev.filter((lead) => lead._id !== id));
    } catch (err) {
      console.error("Error deleting lead:", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-raleway flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black p-6 border-b border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Leads</h1>

        <div className="flex items-center gap-2">
          <label htmlFor="filter-date" className="text-sm text-gray-400">
            Filter by Date:
          </label>
          <input
            id="filter-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 text-sm"
          />
        </div>
      </div>

      {/* Leads Table */}
      <div className="flex-1 overflow-y-auto p-6">
        {filteredContacts.length === 0 ? (
          <p className="text-gray-400">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Name</th>
                  <th className="px-4 py-3 border-b border-gray-700">Email</th>
                  <th className="px-4 py-3 border-b border-gray-700">Phone</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Requirement
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Plot Size
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Location
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Message
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Requested At
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">Action</th>
                </tr>
              </thead>

              <tbody>
                {currentContacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3">{contact.name}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-cyan-400 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </td>
                    <td className="px-4 py-3">{contact.phone}</td>
                    <td className="px-4 py-3">{contact.userType}</td>
                    <td className="px-4 py-3">{contact.plotSize}</td>
                    <td className="px-4 py-3">{contact.location}</td>
                    <td className="px-4 py-3">{contact.message}</td>
                    <td className="px-4 py-3">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>

                    {/* Action Column */}
                    <td className="px-4 py-3 flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={contact.marked || false}
                        onChange={(e) =>
                          handleMark(contact._id, e.target.checked)
                        }
                        className="w-4 h-4 cursor-pointer"
                      />
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-6">
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
              >
                Prev
              </button>

              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-2 py-1 text-gray-300"
                >
                  {currentPage - 1}
                </button>
              )}

              <span className="px-3 py-1 bg-[var(--primary-color)] text-white rounded">
                {currentPage}
              </span>

              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-2 py-1 text-gray-300"
                >
                  {currentPage + 1}
                </button>
              )}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPlots;
