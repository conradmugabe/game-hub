import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre?: Genre) => void;
  selectedGenreId?: number;
}

function SelectedFilters({ selectedGenreId, onSelectGenre }: Props) {
  const genre = useGenre(selectedGenreId);

  if (!selectedGenreId) return null;

  return (
    <HStack>
      <Tag borderRadius="full" variant="solid" size="lg">
        <TagLabel>Genre: {genre?.name}</TagLabel>
        <TagCloseButton onClick={() => onSelectGenre()} />
      </Tag>
    </HStack>
  );
}

export default SelectedFilters;
