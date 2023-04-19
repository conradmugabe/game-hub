import { useQuery } from "@tanstack/react-query";

import apiClientService from "../services/api.client.service";
import { FetchResponse } from "../services/api.client.service";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClientService
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours hours * minutes * seconds * milliseconds
  });

export default usePlatforms;
