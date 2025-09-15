import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditBlogMutation, useGetBlogQuery } from "../api/apiSlice";
import Spinner from "./Spinner";

const EditBlog = () => {
  const { blogId } = useParams();
  const { data: blog, isFetching, isSuccess, isError } = useGetBlogQuery(blogId);

  console.log(blogId);
  console.log(blog);

  const [updateBlog] = useEditBlogMutation();

  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setTitle(blog.title);
      setBlogContent(blog.content);
    }
  }, [blog]);

  const navigate = useNavigate();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setBlogContent(e.target.value);
  };

  const handleSubmitForm = () => {
    if (title && content) {
      updateBlog({
        id: blog.id,
        date: blog.date,
        title,
        content: blogContent,
        user: blog.user,
        reactions: blog.reactions,
      });
      setTitle("");
      setBlogContent("");
      navigate("/");
    }
  };

  let content;

  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <>
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
            value={blogContent}
            onChange={onContentChange}
          />

          <button type="button" onClick={handleSubmitForm}>
            {" "}
            Update blog
          </button>
        </form>
      </>
    );
  } else if (isError) {
    content = <h2>The post you are looking for does not exist</h2>;
  }

  return <section>{content}</section>;
};

export default EditBlog;
