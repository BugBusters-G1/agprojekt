import "./Filter.css";
import { CircleX } from "lucide-react";
interface FilterProps {
  toggleFilter: () => void;
}
export function Filter({ toggleFilter }: FilterProps) {
  return (
    <div className="filter-overlay">
      <div className="filter-view">
        <CircleX onClick={toggleFilter} />
      </div>
      ;
    </div>
  );
}
