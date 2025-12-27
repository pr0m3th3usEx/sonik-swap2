import SpotifyIcon from "src/lib/theme/assets/icons/spotify.svg";
import DeezerIcon from "src/lib/theme/assets/icons/deezer.svg";

interface PlaylistProvider {
  id: string;
  name: string;
  iconUrl?: SVGAElement;
  color: string;
}

export const playlistProviders: PlaylistProvider[] = [
  {
    id: "spotify",
    name: "Spotify",
    iconUrl: SpotifyIcon,
    color: "hsl(141.41deg 75.51% 48.04%)",
  },
  {
    id: "deezer",
    name: "Deezer",
    iconUrl: DeezerIcon,
    color: "hsl(271.96deg 100% 60.98%)",
  },
];

export function getProviderById(id: string): PlaylistProvider | undefined {
  return playlistProviders.find((provider) => provider.id === id);
}
