import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClientService from '../services/api.client.service';

interface Game {
  id: number;
  name: string;
}

interface GetGamesResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const { signal, abort } = new AbortController();

    apiClientService
      .get<GetGamesResponse>('/games', { signal: signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => abort();
  }, []);

  return { games, error };
}

export default useGames;
