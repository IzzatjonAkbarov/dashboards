"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { useState, useEffect } from "react";
import Sidebar from "@/components/sections/Register/Sidebar";
import TopBar from "@/components/sections/TopBar";
import Sidebar2 from "@/components/sections/Register/Sidebar2";
import { X } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 670);
      // Close sidebar when switching to desktop view
      if (window.innerWidth >= 670) {
        setIsMobileSidebarOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="h-12 px-4 flex items-center justify-between border-b border-gray-200 z-10 bg-white">
          <div className="flex space-x-4">
            <button className="text-sm font-medium">Music</button>
            <button className="text-sm font-medium">File</button>
            <button className="text-sm font-medium">Edit</button>
            <button className="text-sm font-medium">View</button>
            <button className="text-sm font-medium">Account</button>
          </div>

          {/* Mobile sidebar toggle button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="flex  h-screen bg-white text-black overflow-hidden rounded-lg border border-gray-200">
          {/* Desktop Sidebar - always visible on desktop, hidden on mobile */}
          <div className={` hidden md:block ${isMobile ? "hidden" : "block"}`}>
            <Sidebar />
          </div>

          {/* Mobile Sidebar - appears as modal when toggled */}
          {isMobile && isMobileSidebarOpen && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setIsMobileSidebarOpen(false)}></div>
              <div className="absolute overflow-scroll right-0  h-full w-[100%] bg-white shadow-lg">
                <Sidebar2 />
                <X
                  onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                  className="absolute top-4 right-4"
                />
              </div>
            </div>
          )}

          <div className="flex-1 h-screen overflow-y-auto">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
