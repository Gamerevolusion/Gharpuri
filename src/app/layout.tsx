import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GHARAPURI — The Digital Memory of Elephanta",
    template: "%s | GHARAPURI",
  },
  description:
    "A Digital Heritage Archive preserving what exists, documenting what is remembered, and making Elephanta's heritage accessible for future generations.",
  openGraph: {
    title: "GHARAPURI — The Digital Memory of Elephanta",
    description:
      "A Digital Heritage Archive for Elephanta Island, Mumbai, India — UNESCO World Heritage Site",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#11110F] text-[#E8D8B8]">
        {children}
      </body>
    </html>
  );
}
