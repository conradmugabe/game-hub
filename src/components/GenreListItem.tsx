import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url.service";

interface Props {
  genre: Genre;
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

function GenreListItem({ genre, selectedGenreId, onSelectGenre }: Props) {
  return (
    <ListItem paddingY="1.5">
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          borderRadius={8}
          boxSize={8}
          objectFit="cover"
        />
        <Button
          variant="link"
          whiteSpace="normal"
          textAlign="left"
          onClick={() => onSelectGenre(genre)}
          fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
}

export default GenreListItem;
