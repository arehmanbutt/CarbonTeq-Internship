import "../styles/SearchBar.css";
import SearchField from "../ui/SearchField";
import Dropdown from "../ui/DropDown";
import type { SelectChangeEvent } from "@mui/material/Select";

type SearchBarProps = {
  searchQuery: string;
  searchType: string;
  handleDropDownChange: (e: SelectChangeEvent) => void;
  handleSearchFieldChange: (e: SelectChangeEvent) => void;
};

const SearchBar = ({
  searchQuery,
  searchType,
  handleDropDownChange,
  handleSearchFieldChange,
}: SearchBarProps) => {
  return (
    <div className="parent">
      <div className="search">
        <div className="search-bar">
          <SearchField value={searchQuery} onChange={handleSearchFieldChange} />
        </div>
        <div className="dropdown-bar">
          <Dropdown value={searchType} onChange={handleDropDownChange} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
