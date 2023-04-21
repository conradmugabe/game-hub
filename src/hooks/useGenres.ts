import ms from "ms";
import { useQuery } from "@tanstack/react-query";

import HttpService from "../services/api.client.service";
import { Genre } from "../entities/Genre";

const httpService = new HttpService<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: httpService.getMany,
    staleTime: ms("24h"),
  });

export default useGenres;
