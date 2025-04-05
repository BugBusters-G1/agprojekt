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
import { v4 as uuidv4 } from "uuid";

interface JokesContextType {
  jokes: Joke[];
  loading: boolean;
  error: string | null;
  getUniqueRandomJoke: (selectedCategories: string[]) => Joke | null;
  categories: Category[];
  selectedCategories: string[];
  updateSelectedCategories: (category: string) => void;
  categoryError: string | null;
  categoryLoading: boolean;
  copyJokeToClipboard: (joke: Joke, expanded: boolean) => void;
  setJokeQueue: Dispatch<SetStateAction<Joke[]>>;
  jokeQueue: Joke[];
  removeTopJoke: () => void;
  jokeHistory: Joke | null;
  restorePreviousJoke: () => void;
  tempSelectedCategories: string[];
  setTempSelectedCategories: Dispatch<SetStateAction<string[]>>;
 initCategorySelection: () => void;
  applyCategoryChanges: () => void;
  discardCategoryChanges: () => void;
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
  const [tempSelectedCategories, setTempSelectedCategories] = useState<string[]>([]);

const initCategorySelection = () => {
  setTempSelectedCategories(selectedCategories);
};

const applyCategoryChanges = () => {
  setSelectedCategories(tempSelectedCategories);
};

const discardCategoryChanges = () => {
  setTempSelectedCategories(selectedCategories);
};

  const [jokeQueue, setJokeQueue] = useState<Joke[]>([]);
  const [jokeHistory, setJokeHistory] = useState<Joke | null>(null);

  const updateSelectedCategories = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const getUniqueRandomJoke = (categories: string[]) => {
    const joke = getRandomJoke(categories);
    if (joke) {
      return { ...joke, instanceId: uuidv4() };
    }
    return null;
  };

  const removeTopJoke = () => {
    setJokeQueue((prevQueue) => {
      if (prevQueue.length === 0) return prevQueue;

      const removedJoke = prevQueue[prevQueue.length - 1];
      setJokeHistory(removedJoke);

      const newJoke = getUniqueRandomJoke(selectedCategories);

      return newJoke ? [newJoke, ...prevQueue.slice(0, -1)] : prevQueue;
    });
  };

  const restorePreviousJoke = () => {
    if (!jokeHistory) return;

    setJokeQueue((prev) => [...prev, jokeHistory]);
    setJokeHistory(null);
  };

  return (
    <JokesContext.Provider
      value={{
        jokes,
        loading,
        error,
        getUniqueRandomJoke,
        selectedCategories,
        categories,
        updateSelectedCategories,
        categoryError,
        categoryLoading,
        copyJokeToClipboard,
        jokeQueue,
        setJokeQueue,
        removeTopJoke,
        jokeHistory,
        restorePreviousJoke,
        tempSelectedCategories,
        setTempSelectedCategories,
        initCategorySelection,
        applyCategoryChanges,
        discardCategoryChanges,
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
