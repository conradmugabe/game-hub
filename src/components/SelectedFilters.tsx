import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre?: Genre) => void;
  selectedGenreId?: number;
}

function SelectedFilters({ selectedGenreId, onSelectGenre }: Props) {
  const { data } = useGenres();

  const selectedGenre = data?.results.find((g) => g.id === selectedGenreId);

  if (!selectedGenreId) return null;
  return (
    <HStack>
      <Tag borderRadius="full" variant="solid" size="lg">
        <TagLabel>Genre: {selectedGenre?.name}</TagLabel>
        <TagCloseButton onClick={() => onSelectGenre()} />
      </Tag>
    </HStack>
  );
}

export default SelectedFilters;
