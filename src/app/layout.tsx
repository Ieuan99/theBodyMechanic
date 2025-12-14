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
