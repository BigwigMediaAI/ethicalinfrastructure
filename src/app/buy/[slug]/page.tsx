import type { Metadata } from "next";
import BuyDetailsClient from "./BuyDetailsClient";

type PageProps = {
  params: { [key: string]: string }; // <-- Use an index signature
  searchParams?: { [key: string]: string | string[] | undefined };
};

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const property = await getProperty(params.slug);

  return {
    title: property.metatitle || property.title,
    description:
      property.metadescription || property.description?.slice(0, 150),
    alternates: { canonical: `https://www.eipl.co/buy/${property.slug}` },
    openGraph: {
      title: property.metatitle || property.title,
      description: property.metadescription || property.description,
      url: `https://www.eipl.co/buy/${property.slug}`,
      siteName: "Ethical Infrastructures Pvt Ltd",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url:
            property.images?.[0] ||
            "https://www.eipl.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.634a2fe3.png&w=256&q=75",
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
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

const BuyDetailsPage = async ({ params }: PageProps) => {
  const property = await getProperty(params.slug);
  return <BuyDetailsClient propertyData={property} />;
};

export default BuyDetailsPage;
