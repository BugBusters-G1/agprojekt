import { Category } from "../../types/Category";

interface CategoryItemProps {
  category: Category;
  selected: boolean;
  onToggle: (category: string) => void;
  colors: Record<string, { background: string; text: string }>;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  selected,
  onToggle,
  colors,
}) => {
  return (
    <div
      className="category"
      style={{
        backgroundColor: colors[category.category.toLowerCase()]?.background,
        color: colors[category.category.toLowerCase()]?.text,
      }}
    >
      <div className="category-content">
        <label className="category-name">{category.categoryInSwedish}</label>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggle(category.category)}
          className="category-checkbox"
        />
      </div>

      <div className="category-description">
        <p>{"Beskrivning saknas"}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
