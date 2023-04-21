import { Grid, Show, GridItem, Flex } from "@chakra-ui/react";

import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SelectedFilters from "../components/SelectedFilters";
import SortSelector from "../components/SortSelector";

export default function HomePage() {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      paddingBottom={10}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={{ base: 3, lg: 10 }}>
        <GameHeading />
        <Flex gap={5} marginY={5}>
          <PlatformSelector />
          <SortSelector />
          <SelectedFilters />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
