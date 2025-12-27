interface ProviderPlaylistLayoutProps {
  playlists: React.ReactNode;
  children: React.ReactNode;
}

export default async function ProviderPlaylistLayout({
  children,
  playlists,
}: ProviderPlaylistLayoutProps) {
  return (
    <div className="max-h-full h-full flex gap-4">
      <div className="shrink-0">{playlists}</div>
      <div className="grow h-full">{children}</div>
    </div>
  );
}
