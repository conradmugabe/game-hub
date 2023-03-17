import { List } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreListItem from './GenreListItem';
import SkeletonGenreListItem from './SkeletonGenreListItem';

function GenreList() {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <List>
      <>
        {isLoading &&
          [...Array(30).keys()].map((i) => <SkeletonGenreListItem key={i} />)}

        {genres.map((genre) => (
          <GenreListItem key={genre.id} genre={genre} />
        ))}
      </>
    </List>
  );
}

export default GenreList;
