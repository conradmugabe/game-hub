import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import SkeletonGameCard from './SkeletonGameCard';

interface Props {
  gameQuery: GameQuery
  
}

function GameGrid({ gameQuery }: Props) {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(gameQuery);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={3}
        padding={{ base: 3, lg: 10 }}
      >
        {isLoading &&
          [...Array(15).keys()].map((i) => (
            <GameCardContainer key={i}>
              <SkeletonGameCard />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
