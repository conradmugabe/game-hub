import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameCriticScore from "../components/GameCriticScore";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";

import useGame from "../hooks/useGame";

export default function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (game)
    return (
      <>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} />
        <GameAttributes game={game} />
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </>
    );

  if (error) throw error;

  return <Spinner />;
}
