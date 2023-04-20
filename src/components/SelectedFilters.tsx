import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

function SelectedFilters() {
  const setGenreId = useGameQueryStore((state) => state.setGenreId);
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  if (!selectedGenreId) return null;

  return (
    <HStack>
      <Tag borderRadius="full" variant="solid" size="lg">
        <TagLabel>Genre: {genre?.name}</TagLabel>
        <TagCloseButton onClick={() => setGenreId()} />
      </Tag>
    </HStack>
  );
}

export default SelectedFilters;
