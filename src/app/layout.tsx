import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SaudagarPro - Solusi Point of Sale, ERP & CRM",
  description: "Kelola bisnis Anda dengan lebih cerdas dan efisien bersama SaudagarPro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
