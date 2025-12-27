import z from "zod";

export const playlistPreviewSchema = z.object({
  id: z.string(),
  name: z.string(),
  cover: z.string().url(),
  nbSongs: z.number().min(0),
});

export type PlaylistPreview = z.infer<typeof playlistPreviewSchema>;
