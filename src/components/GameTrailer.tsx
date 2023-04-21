import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

export default function GameTrailer({ gameId }: GameTrailerProps) {
  const { data, error } = useTrailers(gameId);

  if (data) {
    const firstVideo = data.results[0];

    return firstVideo ? (
      <video src={firstVideo.data[480]} poster={firstVideo.preview} />
    ) : null;
  }

  if (error) throw error;

  return null;
}
