import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image.url.service';
import { Game } from '../hooks/useGames';
import GameCriticScore from './GameCriticScore';
import PlatformIconList from './PlatformIconList';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
