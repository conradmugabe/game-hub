import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import HttpService from "../services/api.client.service";

const useScreenshots = (gameId: number) => {
  const httpService = new HttpService<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: httpService.getMany,
  });
};

export default useScreenshots;
