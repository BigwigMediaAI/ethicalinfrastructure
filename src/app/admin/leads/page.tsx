"use client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ContactRequest {
  _id: string;
  name: string;
  phone: string;
  email: string;
  requirements: string;
  budget: string;
  marked?: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 20;

const AdminLead = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactRequest[]>(
    []
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  useEffect(() => {
    // ✅ Check login status
    const loggedIn = localStorage.getItem("isAdmin");
    if (loggedIn !== "true") {
      router.push("/login"); // redirect if not logged in
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/lead/all`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: ContactRequest, b: ContactRequest) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setContacts(sorted);
        setFilteredContacts(sorted);
      })
      .catch((err) => console.error("Error fetching contact requests:", err));
  }, []);

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

  // ✅ Handle mark/unmark
  const handleMark = async (id: string, marked: boolean) => {
    try {
      const res = await fetch(`${API_BASE}/api/lead/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marked }),
      });
      if (!res.ok) throw new Error("Failed to update lead");
      setContacts((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, marked } : lead))
      );
    } catch (err) {
      console.error("Error updating lead:", err);
    }
  };

  // ✅ Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/lead/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete lead");
      setContacts((prev) => prev.filter((lead) => lead._id !== id));
    } catch (err) {
      console.error("Error deleting lead:", err);
    }
  };

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      <div className="sticky top-0 z-20 bg-black p-4 sm:p-6 border-b border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Leads</h1>
        <div className="flex items-center gap-2">
          <label htmlFor="filter-date" className="text-sm text-gray-400">
            Filter by Date:
          </label>
          <input
            id="filter-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {filteredContacts.length === 0 ? (
          <p className="text-gray-400">No Leads found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Name</th>
                  <th className="px-4 py-3 border-b border-gray-700">Email</th>
                  <th className="px-4 py-3 border-b border-gray-700">Phone</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Requirements
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">Budget</th>
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
                    <td className="px-4 py-3">{contact.requirements}</td>
                    <td className="px-4 py-3">{contact.budget}</td>
                    <td className="px-4 py-3">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>
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
                        className="px-2 py-1 text-red-600 rounded text-sm hover:text-red-700 cursor-pointer"
                      >
                        <Trash2 />
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
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>

              {currentPage > 2 && (
                <>
                  <span className="px-2">1</span>
                  {currentPage > 3 && <span className="px-1">...</span>}
                </>
              )}

              {currentPage > 1 && (
                <button
                  className="px-2 py-1 text-gray-300"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  {currentPage - 1}
                </button>
              )}

              <span className="px-3 py-1 bg-[var(--primary-color)] text-white rounded">
                {currentPage}
              </span>

              {currentPage < totalPages && (
                <button
                  className="px-2 py-1 text-gray-300"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
              )}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && (
                    <span className="px-1">...</span>
                  )}
                  <span className="px-2">{totalPages}</span>
                </>
              )}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
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

export default AdminLead;
