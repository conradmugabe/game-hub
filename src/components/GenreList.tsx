import { Heading, List } from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import useGameQueryStore from "../store";
import GenreListItem from "./GenreListItem";
import SkeletonGenreListItem from "./SkeletonGenreListItem";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  const onSelectGenre = (genre: Genre) => {
    setGenreId(genre.id);
  };

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
