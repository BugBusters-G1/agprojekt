import CategoryItem from "./CategoryItem";
import { useJokesContext } from "../../context/JokeContext";
import { categoryColors } from "../../utils/Colors";
import { useMediaQuery } from "react-responsive";

interface FilterProps {
  toggleFilter: () => void;
}

export function FilterContainer({}: FilterProps) {
  const {
    loading,
    error,
    categories,
    tempSelectedCategories,
    setTempSelectedCategories,
  } = useJokesContext();
  const isTall = useMediaQuery({ query: "(min-height: 600px)" });
  const isShort = useMediaQuery({ query: "(max-height: 200px)" });
  const heightClass = isTall ? "h-100" : isShort ? "h-80" : "h-96"; // fallback if neither

  return (
    <div
      className={`rounded-xl shadow-xl select-none flex flex-col w-80 overflow-hidden ${
        isTall ? "h-100" : "h-70"
      } `}
    >
      {loading ? (
        <p>Laddar kategorier...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : categories && categories.length > 0 ? (
        categories.map((category) => (
          <CategoryItem
            key={category.category}
            category={category}
            selected={tempSelectedCategories.includes(category.category)}
            onToggle={(categoryName: string) => {
              setTempSelectedCategories((prev) =>
                prev.includes(categoryName)
                  ? prev.filter((c) => c !== categoryName)
                  : [...prev, categoryName]
              );
            }}
            colors={categoryColors}
          />
        ))
      ) : (
        <p>Inga kategorier tillgängliga.</p>
      )}
    </div>
  );
}
