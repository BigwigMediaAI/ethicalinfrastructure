import type { Metadata } from "next";
import BuyDetailsClient from "./BuyDetailsClient";

async function getProperty(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/property/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch property");
  return res.json();
}

// ✅ FIX 1: await params here
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; // ✅ must await params
  const property = await getProperty(slug);

  return {
    title: property.metatitle || property.title,
    description: property.metadescription || property.description,
    alternates: {
      canonical: `https://www.eipl.co/buy/${property.slug}`,
    },
    openGraph: {
      title: property.metatitle || property.title,
      description: property.metadescription || property.description,
      url: `https://www.eipl.co/buy/${property.slug}`,
      siteName: "Ethical Infrastructures Pvt Ltd",
      images: [
        {
          url: "https://www.eipl.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.634a2fe3.png&w=256&q=75",
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: property.metatitle || property.title,
      description: property.metadescription || property.description,
      images: [
        property.images?.[0] ||
          "https://www.eipl.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.634a2fe3.png&w=256&q=75",
      ],
    },
  };
}

// ✅ FIX 2: await params here as well
export default async function BuyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ must await params
  const property = await getProperty(slug);

  return <BuyDetailsClient property={property} />;
}
