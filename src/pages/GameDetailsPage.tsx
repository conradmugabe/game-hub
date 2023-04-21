import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";

import useGame from "../hooks/useGame";

export default function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (game)
    return (
      <>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} />
      </>
    );

  if (error) throw error;

  return <Spinner />;
}
