import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import HttpService from "../services/api.client.service";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const httpService = new HttpService<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: httpService.getMany,
    staleTime: ms("24h"),
  });

export default usePlatforms;
