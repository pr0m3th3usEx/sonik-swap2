import Link from "next/link";
import PlaylistSelectionMenuItem from "./playlist-selection-menu-item";
import { PlaylistPreview } from "src/lib/schemas";

interface PlaylistSelectionMenuProps {
  playlists: PlaylistPreview[];
  provider: string;
}

export default function PlaylistSelectionMenu({
  playlists,
  provider,
}: PlaylistSelectionMenuProps) {
  return (
    <div className="grow flex basis-0 flex-col max-h-full overflow-auto gap-3 cursor-pointer">
      {playlists.map((playlist) => (
        <Link key={playlist.id} href={`/dashboard/${provider}/${playlist.id}`}>
          <PlaylistSelectionMenuItem
            id={playlist.id}
            name={playlist.name}
            cover={playlist.cover}
            nbSongs={playlist.nbSongs}
          />
        </Link>
      ))}
    </div>
  );
}
