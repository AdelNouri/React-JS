import { useSelector } from "react-redux";

const ShowAuthor = ({ userId }) => {
  const author = useSelector((store) =>
    store.users.find((user) => user.id == userId)
  );

  return <div>{author? author.fullname : "Anonymous"}</div>;
};

export default ShowAuthor;
