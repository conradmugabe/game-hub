import { useQuery } from "@tanstack/react-query";

import HttpService from "../services/api.client.service";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const httpService = new HttpService<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: httpService.getMany,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours hours * minutes * seconds * milliseconds
  });

export default useGenres;
