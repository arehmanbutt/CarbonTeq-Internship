import "../styles/UserCard.css";

type User = {
  avatar_url: string;
  login: string;
  html_url: string;
};

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noreferrer noopener">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
