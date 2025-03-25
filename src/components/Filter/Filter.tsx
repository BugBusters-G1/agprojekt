<<<<<<< HEAD
=======
import { useIcon } from "../../hooks/useIcon";
>>>>>>> ca7a9dc (Add: more css structure and design)
import "./Filter.css";
import { CircleX } from "lucide-react";

interface FilterProps {
  toggleFilter: () => void;
  setChosenCategories?: (category: string) => void;
  availableCategories?: string[];
  loading?: boolean;
  error?: string | null;
}

export function Filter({
  toggleFilter,
  setChosenCategories,
  availableCategories,
  loading,
  error,
}: FilterProps) {
  const InfoIcon = useIcon("Info");

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
              {" "}
              <div
                className="category-item"
                onClick={() => setChosenCategories?.(category)}
              >
                {category}
              </div>
              <div className="category-icon">{InfoIcon && <InfoIcon />}</div>
            </div>
          ))
        ) : (
          <p>Inga kategorier tillgängliga.</p>
        )}
      </div>
    </div>
  );
}
