"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const blogsPerPage = 9;
  const router = useRouter();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get<BlogPost[]>(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`
      );
      setBlogs(res.data);
      setFilteredBlogs(res.data);
      setCurrentPage(1);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
      setBlogs([]);
      setFilteredBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBlogs(blogs);
    } else {
      const fuse = new Fuse(blogs, {
        keys: ["title", "author"],
        threshold: 0.4,
      });
      const results = fuse.search(searchTerm).map((res) => res.item);
      setFilteredBlogs(results);
      setCurrentPage(1);
    }
  }, [searchTerm, blogs]);

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="min-h-screen">
      <Nav />

      <h2 className="text-4xl font-bold text-[var(--title)] pt-6 text-center">
        Latest Blogs
      </h2>

      <div className="w-11/12 md:w-5/6 mx-auto py-6">
        {/* Search Bar */}
        <div className="sticky top-[80px] z-10  py-4 mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search blogs by title or author"
            className="w-full p-4 border border-gray-300 rounded-lg  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
        </div>

        {/* Blog Cards */}
        {loading ? (
          <div className="flex flex-col justify-center items-center ">
            <div className="w-12 h-12 border-4 border-[var(--primary-color)] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-gray-600 text-lg">Loading blogs...</p>
          </div>
        ) : currentBlogs.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 h-[50vh]">
            No blogs found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {currentBlogs.map((blog) => (
              <div
                key={blog._id}
                onClick={() => router.push(`/blogs/${blog.slug}`)}
                className="bg-[var(--desktop-sidebar)] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-200"
              >
                {/* Image Section */}
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between h-[200px]">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-[var(--primary-color)] transition-colors text-[var(--title)]">
                      {blog.title}
                    </h2>
                    <p className="text-[var(--text)] text-sm mb-1">
                      {new Date(blog.datePublished).toLocaleDateString()}
                    </p>
                    <p className="text-[var(--text)] text-sm">
                      By <span className="font-medium">{blog.author}</span>
                    </p>
                  </div>

                  <button
                    className="mt-4 self-start text-[var(--primary-color)] font-semibold hover:underline transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/blogs/${blog.slug}`);
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2 flex-wrap gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-4 py-2 rounded-lg border font-medium transition-colors duration-200 ${
                  currentPage === idx + 1
                    ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
