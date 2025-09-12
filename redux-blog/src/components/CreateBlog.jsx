import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { blogAdded } from "../reducers/blogSlice";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmitForm = () => {
    if (title && content) {
      dispatch(blogAdded({id: nanoid, title, content}));
      setTitle("");
      setContent("");
      navigate("/")
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

        <label htmlFor="blogContent"> blog content: </label>
        <textarea
          name="blogContent"
          id="blogContent"
          value={content}
          onChange={onContentChange}
        />

        <button type="button" onClick={handleSubmitForm}>
          {" "}
          Save blog
        </button>
      </form>
    </section>
  );
};

export default CreateBlog;
