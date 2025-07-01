import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import debounce from "lodash/debounce";

const Container = () => {
  const [searchType, setSearchType] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchResults(query: string, type: string) {
    const url =
      type === "users"
        ? `https://api.github.com/search/users?q=${query}`
        : `https://api.github.com/search/repositories?q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.items || []);
    setIsLoading(false);
  }

  const debouncedGetResults = debounce((query, type) => {
    fetchResults(query, type);
  }, 300);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      setIsLoading(true);
      debouncedGetResults(searchQuery, searchType);
    } else {
      setResults([]);
    }

    return () => debouncedGetResults.cancel();
  }, [searchQuery, searchType]);

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchType={searchType}
        setSearchType={setSearchType}
      />
      <SearchResults
        results={results}
        searchType={searchType}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Container;
