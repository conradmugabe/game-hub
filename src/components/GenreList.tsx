import { Heading, List } from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import SkeletonGenreListItem from "./SkeletonGenreListItem";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ selectedGenreId, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

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

          {data?.results.map((genre) => (
            <GenreListItem
              key={genre.id}
              genre={genre}
              selectedGenreId={selectedGenreId}
              onSelectGenre={onSelectGenre}
            />
          ))}
        </>
      </List>
    </>
  );
}

export default GenreList;
