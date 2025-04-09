import { FilterContainer } from "../CategorySelector/CategorySelector";
import smLogo from "../../assets/loga.png";
export const DesktopNavbar = () => {
  return (
    <aside className="h-screen flex flex-col w-40 items-center pt-4">
      <div className="w-15">
        <img src={smLogo} />
      </div>
      {false && <FilterContainer toggleFilter={() => {}} />}
    </aside>
  );
};
