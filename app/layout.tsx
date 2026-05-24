import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nozomi Ventures | Premium Solar & Backup Power in Kenya",
  description:
    "Explore premium portable power stations, foldable solar panels, and complete solar kits built for modern Kenyan homes and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 