import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function GameCriticScore({ score }: Props) {
  const colorScheme = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={colorScheme}
      fontSize="sm"
      paddingX={2}
      borderRadius="md"
    >
      {score}
    </Badge>
  );
}

export default GameCriticScore;
