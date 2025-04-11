"use client";

import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [activeTab, setActiveTab] = useState("music");

  return (
    <div className="flex items-center justify-between mb-8 p-6">
      <div className="flex space-x-1 border rounded-md p-1 bg-gray-50">
        <button
          onClick={() => setActiveTab("music")}
          className={cn(
            "px-4 py-1.5 text-sm rounded-md",
            activeTab === "music"
              ? "bg-white shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}>
          Music
        </button>
        <button
          onClick={() => setActiveTab("podcasts")}
          className={cn(
            "px-4 py-1.5 text-sm rounded-md",
            activeTab === "podcasts"
              ? "bg-white shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}>
          Podcasts
        </button>
        <button
          onClick={() => setActiveTab("live")}
          className={cn(
            "px-4 py-1.5 text-sm rounded-md",
            activeTab === "live"
              ? "bg-white shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}>
          Live
        </button>
      </div>

      <button className="flex items-center px-4 py-2 bg-black text-white rounded-md text-sm">
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Music
      </button>
    </div>
  );
};

export default TopBar;
