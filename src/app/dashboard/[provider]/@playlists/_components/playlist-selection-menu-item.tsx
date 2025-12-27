import Image from "next/image";
import { PlaylistPreview } from "src/lib/schemas";
import { cn } from "src/lib/utils/style";

interface PlaylistSelectionMenuItemProps extends PlaylistPreview {
  isSelected?: boolean;
}

export default function PlaylistSelectionMenuItem({
  id,
  name,
  cover,
  nbSongs,
  isSelected = false,
}: PlaylistSelectionMenuItemProps) {
  return (
    <div
      data-playlist-id={id}
      className={cn(
        "cursor-pointer flex gap-3 w-full py-2 px-2 hover:bg-primary/10 rounded",
        ...(isSelected ? ["bg-primary/10"] : []),
      )}
    >
      <div className="w-12 aspect-square overflow-hidden rounded-sm">
        <Image
          src={cover}
          alt="Playlist logo"
          className="object-cover"
          width={128}
          height={128}
        />
      </div>
      <div className="grow flex flex-col gap-0">
        <p>{name}</p>
        <p className="text-primary/50">{nbSongs} songs</p>
      </div>
    </div>
  );
}
