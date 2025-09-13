import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AuthorsList = () => {
  const users = useSelector((state) => state.users);

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/authors/${user.id}`}>{user.fullname}</Link>
    </li>
  ));
  return (
    <section>
      <h2>Authors List</h2>
      <ul>{renderedUsers}</ul>
    </section>
  );
};

export default AuthorsList;
