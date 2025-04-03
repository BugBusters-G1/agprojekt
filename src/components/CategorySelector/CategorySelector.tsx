import CategoryItem from "./CategoryItem";
import FilterButton from "./SelectorButton";
import { CircleX } from "lucide-react";
import "./CateogrySelectror.css";
import { useJokesContext } from "../../context/JokeContext";
import { categoryColors } from "../../utils/Colors";

interface FilterProps {
  toggleFilter: () => void;
}

export function FilterContainer({ toggleFilter }: FilterProps) {
  const {
    loading,
    error,
    categories,
    selectedCategories,
    updateSelectedCategories,
  } = useJokesContext();
  const handleButtonClick = () => {
    toggleFilter();
  };

  

  const handleClose = () => {
    toggleFilter();
  };

  return (
      <div className="rounded-2xl shadow-lg select-none h-auto w-70 overflow-hidden border-amber-50">
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
