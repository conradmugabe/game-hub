import usePlatforms from "./usePlatforms";

export default (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((g) => g.id === id);
};
