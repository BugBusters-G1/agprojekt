interface FilterButtonProps {
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <div className="filterBtn-section">
      <button className="filterBtn" onClick={onClick}>
        Filtrera
      </button>
    </div>
  );
};

export default FilterButton;
