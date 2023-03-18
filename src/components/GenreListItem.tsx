import { Button, HStack, Image, ListItem } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image.url.service';

interface Props {
  genre: Genre;
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreListItem({ genre, selectedGenre, onSelectGenre }: Props) {
  return (
    <ListItem key={genre.id} paddingY="1.5">
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          borderRadius={8}
          boxSize={8}
        />
        <Button
          variant="link"
          fontSize="lg"
          onClick={() => onSelectGenre(genre)}
          fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
}

export default GenreListItem;
