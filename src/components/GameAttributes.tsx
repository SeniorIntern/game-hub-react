import { SimpleGrid, Text } from '@chakra-ui/react';

import CriticScore from '../components/CriticScore';
import DefinationItem from '../components/DefinationItem';
import Game from '../entities/Game';

type Props = {
  game: Game;
};

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="MetaScore">
        <CriticScore score={game.metacritic} />
      </DefinationItem>

      <DefinationItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="Platforms">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
