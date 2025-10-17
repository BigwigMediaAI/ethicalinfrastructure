"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
}

export default function BlogGrid() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get<BlogPost[]>(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`
      );
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="py-12 ">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-widest text-[var(--title)]">
          Latest Blogs
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 h-40">No blogs found.</p>
        ) : (
          <>
            {/* Mobile Swiper */}
            <div className="block md:hidden">
              <Swiper spaceBetween={16} slidesPerView={1.2} grabCursor>
                {blogs.map((blog) => (
                  <SwiperSlide key={blog._id}>
                    <div className="bg-[var(--desktop-sidebar)] shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition cursor-pointer">
                      <div className="relative h-48 w-full">
                        <Image
                          src={blog.coverImage}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-[var(--primary-color)]">
                          {blog.title}
                        </h3>
                        <div className="flex justify-between text-gray-500 text-sm mt-2">
                          <span>By {blog.author}</span>
                          <span>
                            {new Date(blog.datePublished).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={blog._id}
                  className="bg-[var(--desktop-sidebar)] shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 300}
                  onClick={() => (window.location.href = `/blogs/${blog.slug}`)}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                    <div className="flex justify-between text-gray-500 text-sm mt-2">
                      <span>By {blog.author}</span>
                      <span>
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
