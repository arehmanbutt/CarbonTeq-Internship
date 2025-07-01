import "../styles/SearchBar.css";
import SearchField from "../ui/SearchField";
import Dropdown from "../ui/DropDown";
import type { SelectChangeEvent } from "@mui/material/Select";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  searchType: string;
  setSearchType: (value: string) => void;
};

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  searchType,
  setSearchType,
}: SearchBarProps) => {
  const handleDropdownChange = (e: SelectChangeEvent) => {
    setSearchType(e.target.value);
  };
  // no extra methods should be here
  // make handleChangefunction in container

  // dark mode light mode using material ui

  // study about storybook and mdx

  return (
    <div className="parent">
      <div className="search">
        <div className="search-bar">
          <SearchField
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="dropdown-bar">
          <Dropdown value={searchType} onChange={handleDropdownChange} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
