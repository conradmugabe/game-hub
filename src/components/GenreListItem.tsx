import { HStack, Image, ListItem, Text } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image.url.service';

interface Props {
  genre: Genre;
}

function GenreListItem({ genre }: Props) {
  return (
    <ListItem key={genre.id} paddingY="1.5">
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          borderRadius={8}
          boxSize={8}
        />
        <Text fontSize="lg">{genre.name}</Text>
      </HStack>
    </ListItem>
  );
}

export default GenreListItem;
