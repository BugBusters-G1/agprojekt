import { useState } from "react";
import { useIcon } from "../../hooks/useIcon";

import "./Filter.css";

interface FilterProps {
  toggleFilter: () => void;
  availableCategories?: string[];
  selectedCategories: string[];
  updateSelectedCategories: (categorie: string) => void;
  onGenerateNewJoke: (categories: string[]) => void;
  loading?: boolean;
  error?: string | null;
  colors: Record<string, { background: string; text: string }>;
}

export function Filter({
  toggleFilter,
  availableCategories,
  selectedCategories,
  updateSelectedCategories,
  onGenerateNewJoke,
  loading,
  error,
  colors,
}: FilterProps) {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const InfoIcon = useIcon("Info");

  const handleCheckboxChange = (category: string) => {
    updateSelectedCategories(category);
  };

  const handleInfo = () => {
    setShowInfo(true);
    console.log("test");
  };
  const handleButtonClick = () => {
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
            <div
              className="category"
              key={category}
              style={{
                backgroundColor: colors[category]?.background,
                color: colors[category]?.text,
              }}
            >
              <div className="category-content">
                <label className="category-name">{category}</label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  className="category-checkbox"
                />
              </div>

              <div className="category-description">
                <p>tRSTINGNDOJI</p>
              </div>
            </div>
          ))
        ) : (
          <p>Inga kategorier tillgängliga.</p>
        )}
        <div className="filterBtn-section">
          <button className="filterBtn" onClick={handleButtonClick}>
            Filtrera
          </button>
        </div>
      </div>
    </div>
  );
}
