import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

function SelectedFilters({ selectedGenre, onSelectGenre }: Props) {
  if (!selectedGenre) return null;
  return (
    <HStack>
      <Tag borderRadius="full" variant="solid" size="lg">
        <TagLabel>Genre: {selectedGenre?.name}</TagLabel>
        <TagCloseButton onClick={() => onSelectGenre(null)} />
      </Tag>
    </HStack>
  );
}

export default SelectedFilters;
