import CategoryItem from "./CategoryItem";

import "./CateogrySelectror.css";
import { useJokesContext } from "../../context/JokeContext";
import { categoryColors } from "../../utils/Colors";

interface FilterProps {
  toggleFilter: () => void;
}

export function FilterContainer({}: FilterProps) {
  const {
    loading,
    error,
    categories,
    selectedCategories,
    updateSelectedCategories,
  } = useJokesContext();

  return (
    <div className="rounded-2xl shadow-xl select-none h-auto w-70 overflow-hidden">
      {loading ? (
        <p>Laddar kategorier...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : categories && categories.length > 0 ? (
        categories.map((category) => (
          <CategoryItem
            key={category.category}
            category={category}
            selected={selectedCategories.includes(category.category)}
            onToggle={updateSelectedCategories}
            colors={categoryColors}
          />
        ))
      ) : (
        <p>Inga kategorier tillgängliga.</p>
      )}
    </div>
  );
}
