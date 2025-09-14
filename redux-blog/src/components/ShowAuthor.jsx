import { useSelector } from "react-redux";
import { selectAuthorById } from "../reducers/userSlice";

const ShowAuthor = ({ userId }) => {
  const author = useSelector((state) => selectAuthorById(state, userId))

  return <div>{author? author.fullname : "Anonymous"}</div>;
};

export default ShowAuthor;
