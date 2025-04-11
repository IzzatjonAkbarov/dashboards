import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Sidebar from "@/components/sections/Register/Sidebar";
import TopBar from "@/components/sections/TopBar";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="  h-12 px-4 flex items-center border-b border-gray-200 z-10 bg-white">
          <div className="flex space-x-4">
            <button className="text-sm font-medium">Music</button>
            <button className="text-sm font-medium">File</button>
            <button className="text-sm font-medium">Edit</button>
            <button className="text-sm font-medium">View</button>
            <button className="text-sm font-medium">Account</button>
          </div>
        </div>
        <div className="flex h-screen bg-white text-black overflow-hidden rounded-lg border border-gray-200">
          <Sidebar />
          <div>
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
