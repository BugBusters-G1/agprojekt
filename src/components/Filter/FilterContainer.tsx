import CategoryItem from "./CategoryItem";
import FilterButton from "./FilterButton";
import { Category } from "../../types/Category";

import "./Filter.css";

interface FilterProps {
  toggleFilter: () => void;
  availableCategories?: Category[];
  selectedCategories: string[];
  updateSelectedCategories: (categorie: string) => void;
  onGenerateNewJoke: (categories: string[]) => void;
  loading?: boolean;
  error?: string | null;
  colors: Record<string, { background: string; text: string }>;
}

export function FilterContainer({
  toggleFilter,
  availableCategories,
  selectedCategories,
  updateSelectedCategories,
  onGenerateNewJoke,
  loading,
  error,
  colors,
}: FilterProps) {
  const handleButtonClick = () => {
    console.log(selectedCategories);
    onGenerateNewJoke(selectedCategories);
    toggleFilter();
  };

  return (
    <div className="filter-overlay">
      <div className="filter-view">
        {loading ? (
          <p>Laddar kategorier...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : availableCategories && availableCategories.length > 0 ? (
          availableCategories.map((category) => (
            <CategoryItem
              key={category.category}
              category={category}
              selected={selectedCategories.includes(category.category)}
              onToggle={updateSelectedCategories}
              colors={colors}
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
