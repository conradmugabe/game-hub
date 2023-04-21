import { Box, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface DefinitionItemProps {
  term: string;
}

export default function DefinitionItem({
  term,
  children,
}: DefinitionItemProps & PropsWithChildren) {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}
