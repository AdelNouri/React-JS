import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNewUser, deleteUser, selectAllAuthors } from "../reducers/userSlice";
import { nanoid } from "@reduxjs/toolkit";

const AuthorsList = () => {
  const users = useSelector(selectAllAuthors);

  const [user, setUser] = useState("");

  const dispatch = useDispatch();
  let canSave = Boolean(user);

  const onUserChnage = (e) => {
    setUser(e.target.value);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleSubmit = () => {
    dispatch(addNewUser({ id: nanoid(), fullname: user }));
    setUser("");
  };

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/authors/${user.id}`}>{user.fullname}</Link>
      <Link
        style={{ marginLeft: "10px", marginTop: "2px", color: "tomato" }}
        onClick={() => handleDelete(user.id)}
      >
        &otimes;
      </Link>
    </li>
  ));
  return (
    <section>
      <div>
        <form autoComplete="off">
          <label
            htmlFor="
          user"
          >
            Author name:
          </label>

          <input
            type="text"
            name="user"
            id="user"
            value={user}
            onChange={onUserChnage}
          />
          <button className="button" onClick={handleSubmit} disabled={!canSave}>
            Create new author
          </button>
        </form>
      </div>
      <h2>Authors List</h2>
      <ul>{renderedUsers}</ul>
    </section>
  );
};

export default AuthorsList;
