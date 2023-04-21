import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId?: number) => void;
  setPlatformId: (platformId?: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,

  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText, sortOrder: "" } })),

  setGenreId: (genreId?: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),

  setPlatformId: (platformId?: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),

  setSortOrder: (sortOrder: string) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
