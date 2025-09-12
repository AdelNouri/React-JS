import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogUpdated } from "../reducers/blogSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { blogId } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id == blogId)
  );
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmitForm = () => {
    if (title && content) {
      dispatch(blogUpdated({ id: blog.id, title, content }));
      setTitle("");
      setContent("");
      navigate("/");
    }
  };

  if (!blog) {
    return (
      <section>
        <h2>The post you are looking for does not exist</h2>
      </section>
    );
  }

  return (
    <section>
      <h2>Edit blog</h2>
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
          Update blog
        </button>
      </form>
    </section>
  );
};

export default EditBlog;
