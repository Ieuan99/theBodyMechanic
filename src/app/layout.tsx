import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Body Mechanic | Therapeutic Massage Therapy in Wadebridge",
  description:
    "Expert therapeutic massage therapy in Wadebridge, Cornwall. Sports injuries, rehabilitation, muscle tension, joint pain. Student therapist offering reduced rates until March 2026.",
  keywords: [
    "massage therapy",
    "Wadebridge",
    "Cornwall",
    "therapeutic massage",
    "sports massage",
    "rehabilitation",
    "muscle tension",
    "joint pain",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/favicon-96x96.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
