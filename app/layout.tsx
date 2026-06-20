import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaitanya Srivastava | ERP Systems & BI Manager",
  description:
    "Multi-page case study portfolio for ERP systems, automation, analytics, and operations engineering."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
