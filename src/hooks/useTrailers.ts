import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import HttpService from "../services/api.client.service";

const useTrailers = (gameId: number) => {
  const httpService = new HttpService<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: httpService.getMany,
  });
};

export default useTrailers;
