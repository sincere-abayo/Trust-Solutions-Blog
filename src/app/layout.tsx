import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trust Solutions Company",
  description:
    "Your trusted source for business solutions and insights across Strategic Business Consulting, Real Estate Brokerage, and Event Planning.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo/image.png", type: "image/png" },
    ],
    apple: "/logo/image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
