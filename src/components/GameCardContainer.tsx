import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function GameCardContainer(props: PropsWithChildren) {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {props.children}
    </Box>
  );
}

export default GameCardContainer;
