import { Heading, List } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import GenreListItem from './GenreListItem';
import SkeletonGenreListItem from './SkeletonGenreListItem';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="xl" marginBottom="3">
        Genres
      </Heading>
      <List>
        <>
          {isLoading &&
            [...Array(30).keys()].map((i) => <SkeletonGenreListItem key={i} />)}

          {genres.map((genre) => (
            <GenreListItem
              key={genre.id}
              genre={genre}
              selectedGenre={selectedGenre}
              onSelectGenre={onSelectGenre}
            />
          ))}
        </>
      </List>
    </>
  );
}

export default GenreList;
