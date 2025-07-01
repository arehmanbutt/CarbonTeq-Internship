import "../styles/RepoCard.css";

type Repo = {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
};
type RepoCardProps = {
  repo: Repo;
};
const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="repo-card">
      <h3>{repo.full_name}</h3>
      <p>{repo.description}</p>
      <p>
        ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
      </p>
      <a href={repo.html_url} target="_blank" rel="noreferrer noopener">
        View Repository →
      </a>
    </div>
  );
};

export default RepoCard;
