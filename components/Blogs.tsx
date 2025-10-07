"use client";

import React from "react";
import Image from "next/image";
import image1 from "../assets/blogImage.jpg";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "How to Maximize Property Value",
    author: "John Doe",
    date: "Sep 5, 2025",
    image: image1,
  },
  {
    id: 2,
    title: "Tips for First-Time Home Buyers",
    author: "Jane Smith",
    date: "Aug 20, 2025",
    image: image1,
  },
  {
    id: 3,
    title: "Real Estate Market Trends 2025",
    author: "Alice Johnson",
    date: "Jul 15, 2025",
    image: image1,
  },
];

export default function BlogGrid() {
  return (
    <section className="py-12">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-4xl font-bold text-start mb-12">Latest Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <div className="flex justify-between text-gray-500 text-sm mt-2">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
