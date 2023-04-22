import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";

import useGame from "../hooks/useGame";

export default function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, error } = useGame(slug!);

  if (game)
    return (
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={5}
        padding={{ base: 3, md: 5 }}
      >
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText text={game.description_raw} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    );

  if (error) throw error;

  return <Spinner />;
}
