import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const platformName = platform?.name || "";
  const genreName = genre?.name || "";
  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
