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
    handleNewJoke,
    categories,
    selectedCategories,
    updateSelectedCategories,
  } = useJokesContext();
  const handleButtonClick = () => {
    handleNewJoke();
    toggleFilter();
  };

  const handleClose = () => {
    toggleFilter();
  };

  return (
    <div className="filter-overlay">
      <div className="filter-view">
        <div className="filter-close" onClick={handleClose}>
          <CircleX />
        </div>
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

        <FilterButton onClick={handleButtonClick} />
      </div>
    </div>
  );
}
