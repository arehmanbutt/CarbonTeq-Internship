import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import debounce from "lodash/debounce";
import type { SelectChangeEvent } from "@mui/material/Select";

const Container = () => {
  const [searchType, setSearchType] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchResults(query: string, type: string) {
    const url =
      type === "users"
        ? `https://api.github.com/search/users?q=${query}`
        : `https://api.github.com/search/repositories?q=${query}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      setResults(data.items || []);
      setError(null); // clear any previous error
    } catch (err) {
      setResults([]);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  const debouncedGetResults = debounce((query, type) => {
    fetchResults(query, type);
  }, 300);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      setIsLoading(true);
      setError(null); // reset error when new search starts
      debouncedGetResults(searchQuery, searchType);
    } else {
      setResults([]);
      setError(null);
    }

    return () => debouncedGetResults.cancel();
  }, [searchQuery, searchType]);

  const handleDropDownChange = (e: SelectChangeEvent) => {
    setSearchType(e.target.value);
  };

  const handleSearchFieldChange = (e: SelectChangeEvent) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        searchType={searchType}
        handleDropDownChange={handleDropDownChange}
        handleSearchFieldChange={handleSearchFieldChange}
      />
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <SearchResults
        results={results}
        searchType={searchType}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Container;
