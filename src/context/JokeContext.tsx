import { createContext, ReactNode, useContext, useState } from "react";
import { useJokes } from "../hooks/useJokes";
import { useCategories } from "../hooks/useCategories";
import { Joke } from "../types/Joke";
import { useCopyJoke } from "../hooks/useCopyJoke";
import { Category } from "../types/Category";

interface JokesContextType {
  loading: boolean;
  error: string | null;
  currentJoke: Joke | null;
  handleNewJoke: () => void;
  categories: Category[];
  selectedCategories: string[];
  updateSelectedCategories: (category: string) => void;
  categoryError: string | null;
  categoryLoading: boolean;
  copyJokeToClipboard: (joke: Joke, expanded: boolean) => void;
}

const JokesContext = createContext<JokesContextType | null>(null);

export const JokesProvider = ({ children }: { children: ReactNode }) => {
  const { loading, error, currentJoke, getRandomJoke } = useJokes();
  const { copyJokeToClipboard } = useCopyJoke();
  const {
    categories,
    error: categoryError,
    loading: categoryLoading,
  } = useCategories();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const updateSelectedCategories = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleNewJoke = () => {
    // setExpanded(false);
    getRandomJoke(selectedCategories);
  };

  return (
    <JokesContext.Provider
      value={{
        loading,
        error,
        currentJoke,
        handleNewJoke,
        selectedCategories,
        categories,
        updateSelectedCategories,

        categoryError,
        categoryLoading,
        copyJokeToClipboard,
      }}
    >
      {children}
    </JokesContext.Provider>
  );
};

export const useJokesContext = () => {
  const context = useContext(JokesContext);
  if (!context) {
    throw new Error("useJokesContext must be used within a JokesProvider");
  }
  return context;
};
