import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useJokes } from "../hooks/useJokes";
import { useCategories } from "../hooks/useCategories";
import { Joke } from "../types/Joke";
import { useCopyJoke } from "../hooks/useCopyJoke";
import { Category } from "../types/Category";

interface JokesContextType {
  jokes: Joke[];
  loading: boolean;
  error: string | null;
  getRandomJoke: (selectedCategories: string[]) => Joke | null;
  categories: Category[];
  selectedCategories: string[];
  updateSelectedCategories: (category: string) => void;
  categoryError: string | null;
  categoryLoading: boolean;
  copyJokeToClipboard: (joke: Joke, expanded: boolean) => void;
  setJokeQueue: Dispatch<SetStateAction<Joke[]>>;
  jokeQueue: Joke[];
  removeTopJoke: () => void;
}

const JokesContext = createContext<JokesContextType | null>(null);

export const JokesProvider = ({ children }: { children: ReactNode }) => {
  const { loading, error, jokes, getRandomJoke } = useJokes();
  const { copyJokeToClipboard } = useCopyJoke();
  const {
    categories,
    error: categoryError,
    loading: categoryLoading,
  } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [jokeQueue, setJokeQueue] = useState<Joke[]>([]);

  const updateSelectedCategories = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const removeTopJoke = () => {
    setJokeQueue((prevQueue) => {
      const newQueue = prevQueue.slice(1);

      if (newQueue.length < 2) {
        const newJokes = Array.from({ length: 5 }, () =>
          getRandomJoke(selectedCategories)
        ).filter(Boolean) as Joke[];
        return [...newQueue, ...newJokes];
      }

      return newQueue;
    });
  };

  return (
    <JokesContext.Provider
      value={{
        jokes,
        loading,
        error,
        getRandomJoke,
        selectedCategories,
        categories,
        updateSelectedCategories,
        categoryError,
        categoryLoading,
        copyJokeToClipboard,
        jokeQueue,
        setJokeQueue,
        removeTopJoke,
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
