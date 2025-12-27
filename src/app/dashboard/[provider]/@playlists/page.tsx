import PlaylistSelectionMenu from "./_components/playlist-selection-menu";
import { PlaylistPreview } from "src/lib/schemas";

interface PlaylistSelectionPageProps {
  params: Promise<{ provider: string }>;
}

export default async function PlaylistSelectionPage({
  params,
}: PlaylistSelectionPageProps) {
  const { provider } = await params;
  const playlists = await new Promise<PlaylistPreview[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Chill vibes",
          nbSongs: 40,
          cover:
            "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c785808b8933da7bde038e8a4",
        },
        {
          id: "2",
          name: "K-POP",
          nbSongs: 34,
          cover:
            "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c785808b8933da7bde038e8a4",
        },
        {
          id: "3",
          name: "R&B",
          nbSongs: 3,
          cover:
            "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c785808b8933da7bde038e8a4",
        },
      ]);
    }, 1500);
  });

  return (
    <div className="flex flex-col w-80 h-full overflow-scroll px-3 py-5 rounded-sm bg-accent gap-6 shadow-md animate-fade-slide">
      <div className="flex justify-between items-center">
        <h3 className="uppercase font-heading px-1">Your playlists</h3>
      </div>

      {/* <PlaylistMenuClient provider={provider} playlists={playlists} /> */}

      <PlaylistSelectionMenu provider={provider} playlists={playlists} />
    </div>
  );
}
