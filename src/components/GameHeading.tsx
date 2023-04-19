import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data } = useGenres();

  const genre = data?.results.find((g) => g.id === gameQuery.genreId);
  const platform = data?.results.find((p) => p.id === gameQuery.platformId);

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
