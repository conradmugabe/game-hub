import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SelectedFilters from "./components/SelectedFilters";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      paddingBottom={10}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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

export default App;
