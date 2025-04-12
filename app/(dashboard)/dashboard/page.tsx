interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

interface Playlist {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

export default function MusicApp() {
  const topAlbums: Album[] = [
    {
      id: "1",
      title: "React Rendezvous",
      artist: "Ethan Byte",
      cover: "/assets/images/imgcard.png",
    },
    {
      id: "2",
      title: "Async Awakenings",
      artist: "Nina Netcode",
      cover: "/assets/images/imgcard1.png",
    },
    {
      id: "3",
      title: "The Art of Reusability",
      artist: "Lena Logic",
      cover: "/assets/images/imgcard2.png",
    },
    {
      id: "4",
      title: "Stateful Symphony",
      artist: "Beth Binary",
      cover: "/assets/images/imgcard3.png",
    },
    {
      id: "5",
      title: "Static Void",
      artist: "Beth Binary",
      cover: "/assets/images/imgcard4.png",
    },
  ];

  const personalPlaylists: Playlist[] = [
    {
      id: "1",
      title: "Thinking Components",
      artist: "Lena Logic",
      cover: "/assets/images/imgcard5.png",
    },
    {
      id: "2",
      title: "Functional Fury",
      artist: "Beth Binary",
      cover: "/assets/images/imgcard6.png",
    },
    {
      id: "3",
      title: "React Rendezvous",
      artist: "Ethan Byte",
      cover: "/assets/images/imgcard7.png",
    },
    {
      id: "4",
      title: "Stateful Symphony",
      artist: "Beth Binary",
      cover: "/assets/images/imgcard8.png",
    },
    {
      id: "5",
      title: "Async Awakenings",
      artist: "Nina Netcode",
      cover: "/assets/images/imgcard9.png",
    },
    {
      id: "6",
      title: "The Art",
      artist: "Ethan Byte",
      cover: "/assets/images/imgcard5.png",
    },
    {
      id: "7",
      title: "React Rendezvous",
      artist: "Ethan Byte",
      cover: "/assets/images/imgcard1.png",
    },
  ];

  return (
    <div className="flex-1  overflow-scroll">
      <div className="p-6">
        {/* Listen Now Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Listen Now</h2>
          <p className="text-gray-500 text-sm mb-6">
            Top picks for you. Updated daily.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topAlbums.map((album) => (
              <div key={album.id} className="group cursor-pointer">
                <div className="relative aspect-square mb-2 overflow-hidden rounded-md">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="object-cover w-full h-full transition-all group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm">{album.title}</h3>
                <p className="text-xs text-gray-500">{album.artist}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Made for You Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Made for You</h2>
          <p className="text-gray-500 text-sm mb-6">
            Your Personal playlists. Updated daily.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {personalPlaylists.map((playlist) => (
              <div key={playlist.id} className="group cursor-pointer">
                <div className="relative aspect-square mb-2 overflow-hidden rounded-md">
                  <img
                    src={playlist.cover || "/placeholder.svg"}
                    alt={playlist.title}
                    className="object-cover w-full h-full transition-all group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm truncate">
                  {playlist.title}
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  {playlist.artist}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
