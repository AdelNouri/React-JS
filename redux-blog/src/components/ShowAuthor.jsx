import { useSelector } from "react-redux";
import { selectUserById } from "../reducers/userSlice";

const ShowAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId))

  return <div>{author? author.fullname : "Anonymous"}</div>;
};

export default ShowAuthor;
