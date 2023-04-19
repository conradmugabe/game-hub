import { useQuery } from "@tanstack/react-query";

import apiClientService from "../services/api.client.service";
import { FetchResponse } from "../services/api.client.service";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClientService
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours hours * minutes * seconds * milliseconds
  });

export default useGenres;
