import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import HttpService from "../services/api.client.service";
import { Platform } from "../entities/Platform";

const httpService = new HttpService<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: httpService.getMany,
    staleTime: ms("24h"),
  });

export default usePlatforms;
