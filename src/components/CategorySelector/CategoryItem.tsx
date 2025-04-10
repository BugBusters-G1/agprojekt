import { useMediaQuery } from "react-responsive";
import { Category } from "../../types/Category";

interface CategoryItemProps {
  category: Category;
  selected: boolean;
  onToggle: (category: string) => void;
  colors: Record<string, { background: string; text: string }>;
}

const categoryDescriptions: Record<string, string> = {
  blue: "Göteborgsskämt är ordvitsar med lekfulla ordspel och dubbeltydigheter, ofta med en lättsam och charmigt torr humor.",
  orange:
    "Skämt för alla åldrar är roliga och ofarliga skämt som passar både barn och vuxna, med humor som alla kan uppskatta.",
  yellow:
    "Ordvitsar är skämt som leker med ordens olika betydelser eller ljud, ofta med en twist som får en att fnissa.",
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  selected,
  onToggle,
  colors,
}) => {
  const isTall = useMediaQuery({ query: "(min-height: 600px)" });

  return (
    <div
      className="w-full h-full p-2 flex flex-col justify-center pl-4 pr-4"
      style={{
        backgroundColor: colors[category.category.toLowerCase()]?.background,
        color: colors[category.category.toLowerCase()]?.text,
      }}
    >
      <div className="flex flex-row justify-between">
        <label className="text-2xl">
          {category.categoryInSwedish == "ordvits"
            ? "Ordvitsar"
            : category.categoryInSwedish}
        </label>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggle(category.category)}
          className="w-7 h-7"
        />
      </div>

      <div className="text-sm lg:text-md w-3/4">
        {isTall && (
          <p>{categoryDescriptions[category.category.toLowerCase()]}</p>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
