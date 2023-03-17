import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import SkeletonGameCard from './SkeletonGameCard';

function GameGrid() {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={10}
        padding={10}
      >
        {isLoading &&
          [...Array(12).keys()].map((i) => <SkeletonGameCard key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
