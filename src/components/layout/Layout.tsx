"use client";

import Header from "./Header";
import Footer from "./Footer";
import { usePageTracking } from "../../hooks/usePageTracking";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Track page views
  usePageTracking();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
