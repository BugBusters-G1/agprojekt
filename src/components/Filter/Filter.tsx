import { useState } from "react";
import { useIcon } from "../../hooks/useIcon";
import "./Filter.css";

interface FilterProps {
  toggleFilter: () => void;
  availableCategories?: string[];
  loading?: boolean;
  error?: string | null;
  colors: Record<string, { background: string; text: string }>;
}

export function Filter({
  toggleFilter,
  availableCategories,
  loading,
  error,
  colors,
}: FilterProps) {
  const InfoIcon = useIcon("Info");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
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
            <div className="category" key={category}>
              <div
                className="category-item"
                style={{
                  backgroundColor: colors[category]?.background,
                  color: colors[category]?.text,
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  className="category-checkbox"
                />
                <label className="category-name">{category}</label>
              </div>
              <div className="category-icon">{InfoIcon && <InfoIcon />}</div>
            </div>
          ))
        ) : (
          <p>Inga kategorier tillgängliga.</p>
        )}

        <div className="filterBtn-section">
          <button className="filterBtn">Filtrera</button>
        </div>
      </div>
    </div>
  );
}
