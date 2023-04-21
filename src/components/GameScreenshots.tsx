import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotsProps {
  gameId: number;
}

export default function GameScreenshots({ gameId }: GameScreenshotsProps) {
  const { data, error } = useScreenshots(gameId);

  if (data) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
        {data.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    );
  }

  if (error) throw error;

  return null;
}
