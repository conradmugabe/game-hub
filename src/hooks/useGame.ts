import { useQuery } from "@tanstack/react-query";
import HttpService from "../services/api.client.service";
import { Game } from "../entities/Game";

const httpService = new HttpService<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => httpService.getOne(slug),
  });

export default useGame;
