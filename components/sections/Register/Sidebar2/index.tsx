"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import {
  BarChart,
  Clock,
  Disc,
  Library,
  ListMusic,
  Music,
  PlayCircle,
  Radio,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar2 = () => {
  const [activeNavItem, setActiveNavItem] = useState("/dashboard");

  const navButton = (
    id: string,
    label: string,
    Icon: React.ElementType,
    path: string
  ) => (
    <Link
      href={`${path}`}
      onClick={() => {
        setActiveNavItem(id); // Set the active state
      }}
      className={cn(
        "flex items-center w-full px-3 py-2 text-sm rounded-md",
        activeNavItem === id
          ? "bg-black text-white"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      )}>
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Link>
  );

  return (
    <div className="w-full border-r border-gray-200 flex flex-col h-full">
      <div className="px-5 py-4">
        <h2 className="text-lg font-semibold mb-2">Discover</h2>
        <nav className="space-y-1">
          {navButton("listen-now", "Listen Now", PlayCircle, "/dashboard")}
          {navButton("browse", "Browse", ListMusic, "/browse")}
          {navButton("radio", "Radio", Radio, "/radio")}
        </nav>
      </div>

      <div className="px-5 py-4">
        <h2 className="text-lg font-semibold mb-2">Library</h2>
        <nav className="space-y-1">
          {navButton(
            "library-playlists",
            "Playlists",
            ListMusic,
            "/library/playlists"
          )}
          {navButton("library-songs", "Songs", Music, "/library/songs")}
          {navButton(
            "library-made-for-you",
            "Made for you",
            User,
            "/library/made-for-you"
          )}
          {navButton("library-artists", "Artists", User, "/library/artists")}
          {navButton("library-albums", "Albums", Disc, "/library/albums")}
        </nav>
      </div>
      <div className="px-5 py-4">
        <h2 className="text-lg font-semibold mb-2">Playlists</h2>
        <nav className="space-y-1">
          {navButton(
            "playlist-recently-added",
            "Recently Added",
            Clock,
            "/playlists/recently-added"
          )}
          {navButton(
            "playlist-recently-played",
            "Recently Played",
            Clock,
            "/playlists/recently-played"
          )}
          {navButton(
            "playlist-top-songs",
            "Top Songs",
            BarChart,
            "/playlists/top-songs"
          )}
          {navButton(
            "playlist-top-albums",
            "Top Albums",
            Disc,
            "/playlists/top-albums"
          )}
          {navButton(
            "playlist-top-artists",
            "Top Artists",
            User,
            "/playlists/top-artists"
          )}
          {navButton(
            "playlist-logic-discography",
            "Logic Discography",
            Library,
            "/playlists/logic-discography"
          )}
          {navButton(
            "playlist-bedtime-beats",
            "Bedtime Beats",
            Clock,
            "/playlists/bedtime-beats"
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar2;
