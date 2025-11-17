import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "News Platform",
  description: "Intelligence for the New World Economy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f8f5d7] overflow-x-hidden scroll-smooth">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
