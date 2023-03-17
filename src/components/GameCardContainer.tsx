import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

function GameCardContainer(props: PropsWithChildren) {
  return (
    <Box width="60" borderRadius={10} overflow="hidden">
      {props.children}
    </Box>
  );
}

export default GameCardContainer;