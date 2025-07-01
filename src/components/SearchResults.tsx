import UserCard from "./UserCard.tsx";
import RepoCard from "./RepoCard.tsx";
import "../styles/SearchResults.css";
import Loading from "./Loading.tsx";
import "../styles/Loading.css";

type SearchResultsProps = {
  results: any[]; // You can replace `any[]` with a more specific type if you have one
  searchType: string;
  isLoading: boolean;
};

const SearchResults = ({
  results,
  searchType,
  isLoading,
}: SearchResultsProps) => {
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="results-grid">
        {results.map((item) =>
          searchType === "users" ? (
            <UserCard key={`user-${item.id}`} user={item} />
          ) : (
            <RepoCard key={`repo-${item.id}`} repo={item} />
          )
        )}
      </div>
    );
  }
};

export default SearchResults;
