import { useDispatch } from "react-redux";
import { deleteBlog } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionsButtons from "./ReactionsButtons";

import { useMemo } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useGetBlogsQuery } from "../api/apiSlice";
import Spinner from "./Spinner";

let Blog = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <>
      <article style={{ padding: "1rem" }} className="blog-excerpt">
        <div style={{ display: "flex ", justifyContent: "space-between" }}>
          <h3>{blog.title}</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <ShowAuthor userId={blog.user} /> توسط
            <ShowTime timestamp={blog.date} />
          </div>
        </div>
        <p className="blog-content">{blog.content.substring(0, 100)}</p>
        <div style={{ marginBottom: "1rem" }}>
          <ReactionsButtons blog={blog} />
        </div>

        <Link
          to={`/blogs/${blog.id}`}
          className="button muted-button"
          style={{ marginRight: "1rem" }}
        >
          visit blog
        </Link>
        <Link
          to={`/blogs/edit-blog/${blog.id}`}
          className="button muted-button"
          style={{ marginRight: "1rem" }}
        >
          edit blog
        </Link>
        <button
          onClick={() => dispatch(deleteBlog(blog.id))}
          className="button muted-button"
        >
          delete blog
        </button>
      </article>
    </>
  );
};

const BlogsList = () => {
  const {
    data: blogs = [],
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetBlogsQuery();

  const navigate = useNavigate();

  // for sorting blogs eith time

  // const orderedBlogs = blogs
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  const sortedBlogs = useMemo(() => {
    const sortedBlogs = blogs.slice();
    sortedBlogs.sort((a, b) => b.date.localeCompare(a.date));
    return sortedBlogs;
  }, [blogs]);

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = sortedBlogs.map((blog) => <Blog key={blog.id} blog={blog} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <button
        className="full-button accent-button"
        style={{ marginTop: "1rem" }}
        onClick={() => navigate("/blogs/create-blog")}
      >
        Create new blog
      </button>
      <h2>All Blogs</h2>
      <button className="button" onClick={refetch}>
        {" "}
        Refresh blogs
      </button>
      {content}
    </section>
  );
};

export default BlogsList;
