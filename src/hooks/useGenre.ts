import useGenres from "./useGenres";

export default (id?: number) => {
  const { data } = useGenres();
  return data?.results.find((g) => g.id === id);
};
