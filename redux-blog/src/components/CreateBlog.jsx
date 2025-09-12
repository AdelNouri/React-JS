import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogAdded } from "../reducers/blogSlice";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const canSave = [title, content, userId].every(Boolean)

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onAuthorChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmitForm = () => {
    if (canSave) {
      dispatch(blogAdded(title, userId, content));
      setTitle("");
      setContent("");
      navigate("/");
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
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.fullname}</option>
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
