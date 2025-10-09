import { Metadata } from "next";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import ContactInfo from "../../../../components/ContactInfo";

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  category?: string;
  schemaMarkup?: string[];
}

async function getBlog(slug: string): Promise<BlogType> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  const blogs: BlogType[] = await res.json();
  const found = blogs.find((b) => b.slug === slug);

  if (!found) throw new Error("Blog not found");

  return found;
}

// ✅ Proper type for dynamic route metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.stellarbinge.com/blogs/${blog.slug}`,
    },
  };
}

// ✅ Proper page function type
export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`, {
    cache: "no-store",
  });
  const allBlogs: BlogType[] = await res.json();

  const relatedBlogs = allBlogs
    .filter(
      (b) =>
        b.slug !== blog.slug &&
        b.category?.toLowerCase() === blog.category?.toLowerCase()
    )
    .slice(0, 4);

  return (
    <div className=" min-h-screen">
      {/* Schema Markup */}
      {Array.isArray(blog.schemaMarkup) &&
        blog.schemaMarkup.map((markup, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        ))}

      <Navbar />

      <section className="w-11/12 md:w-5/6 mx-auto text-left pt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--title)] leading-tight mb-3">
          {blog.title}
        </h1>
        <p className="text-[var(--text)] text-sm md:text-base mb-6">
          By <span className="font-semibold ">{blog.author}</span> •{" "}
          {new Date(blog.datePublished).toLocaleDateString()}
        </p>
      </section>

      {blog.coverImage && (
        <div className="relative w-11/12 md:w-5/6 mx-auto h-[300px] md:h-[500px] overflow-hidden rounded-xl">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="w-11/12 md:w-5/6 mx-auto my-10">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {relatedBlogs.length > 0 && (
          <aside className="lg:col-span-1 bg-[var(--desktop-sidebar)] p-5 rounded-2xl shadow-sm h-fit mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--title)] border-b border-gray-200 pb-2">
              Related Blogs
            </h2>
            <div className="space-y-5">
              {relatedBlogs.map((rel) => (
                <div key={rel.slug}>
                  <h3 className="text-base font-semibold text-[var(--black)] leading-snug line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>

      <ContactInfo />

      <Footer />
    </div>
  );
}
