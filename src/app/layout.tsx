import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Body Mechanic | Sports Massage Therapy in Wadebridge, Cornwall",
  description:
    "Professional sports massage therapy in Wadebridge, Cornwall. Specialising in sports injuries, rehabilitation, deep tissue massage & muscle recovery. Book your appointment today.",
  keywords: [
    "sports massage Wadebridge",
    "sports massage Cornwall",
    "sports massage therapist",
    "deep tissue massage Wadebridge",
    "sports injury treatment Cornwall",
    "muscle recovery massage",
    "rehabilitation massage",
    "athletic massage therapy",
    "massage therapist near me",
    "sports massage near me",
  ],
  authors: [{ name: "The Body Mechanic" }],
  creator: "The Body Mechanic",
  metadataBase: new URL("https://www.thebodymechanictherapy.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.thebodymechanictherapy.co.uk",
    siteName: "The Body Mechanic",
    title: "The Body Mechanic | Sports Massage Therapy in Wadebridge, Cornwall",
    description:
      "Professional sports massage therapy in Wadebridge, Cornwall. Specialising in sports injuries, rehabilitation, deep tissue massage & muscle recovery.",
    images: [
      {
        url: "/images/IMG_4192.jpg",
        width: 1200,
        height: 800,
        alt: "Sports massage therapy at The Body Mechanic, Wadebridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Body Mechanic | Sports Massage in Wadebridge",
    description:
      "Professional sports massage therapy in Wadebridge, Cornwall. Sports injuries, rehabilitation & muscle recovery.",
    images: ["/images/IMG_4192.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/favicon-96x96.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "The Body Mechanic",
  image: "https://www.thebodymechanictherapy.co.uk/images/IMG_4192.jpg",
  "@id": "https://www.thebodymechanictherapy.co.uk",
  url: "https://www.thebodymechanictherapy.co.uk",
  telephone: "07759332532",
  email: "Thebodymechanictherapy@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wadebridge",
    addressRegion: "Cornwall",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.5084,
    longitude: -4.8388,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  priceRange: "££",
  description:
    "Professional sports massage therapy in Wadebridge, Cornwall. Specialising in sports injuries, rehabilitation, deep tissue massage and muscle recovery.",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 50.5084,
      longitude: -4.8388,
    },
    geoRadius: "15000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sports Massage Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sports Massage - 45 minutes",
          description: "45 minute sports massage session",
        },
        price: "20.00",
        priceCurrency: "GBP",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sports Massage - 90 minutes",
          description: "1 hour 30 minute sports massage session",
        },
        price: "30.00",
        priceCurrency: "GBP",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
