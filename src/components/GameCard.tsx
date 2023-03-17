import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image.url.service';
import { Game } from '../hooks/useGames';
import GameCriticScore from './GameCriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card width="60" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" marginY={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
