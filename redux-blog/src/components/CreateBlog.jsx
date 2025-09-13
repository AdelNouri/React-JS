import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "../reducers/blogSlice";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const canSave = [title, content, userId].every(Boolean) && requestStatus == "idle"

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onAuthorChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmitForm = async () => {
    if (canSave) {
      try {
        setRequestStatus("pending")
        await dispatch(
          addNewBlog({
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0
            },
          })
        );
        setTitle("");
        setContent("");
        navigate("/");
      } catch (error) {
        console.error(error);
      } finally {
        setRequestStatus("idle")
      }
    }
  };

  return (
    <section>
      <h2>Create new blog</h2>
      <form action="off">
        <label htmlFor="blogTitle"> blog title: </label>
        <input
          type="text"
          name="blogTitle"
          id="blogTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="blogAuthor">author: </label>
        <select id="blogAuthor" value={userId} onChange={onAuthorChange}>
          <option value="">select author</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.fullname}
            </option>
          ))}
        </select>

        <label htmlFor="blogContent"> blog content: </label>
        <textarea
          name="blogContent"
          id="blogContent"
          value={content}
          onChange={onContentChange}
        />

        <button disabled={!canSave} type="button" onClick={handleSubmitForm}>
          {" "}
          Save blog
        </button>
      </form>
    </section>
  );
};

export default CreateBlog;
