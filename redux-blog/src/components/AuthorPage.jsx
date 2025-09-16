import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { deleteBlog, selectAuthorBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionsButtons from "./ReactionsButtons";
import { selectUserById } from "../reducers/userSlice";
import { useMemo } from "react";
import { useGetBlogsQuery } from "../api/apiSlice";
import { createSelector } from "@reduxjs/toolkit";

const AuthorPage = () => {
  const { authorId } = useParams();
  const author = useSelector((state) => selectUserById(state, authorId));

  const selectUserBlogs = useMemo(() => {
    const emptyArray = [];

    return createSelector(
      (res) => res.data,
      (res, userId) => userId,
      (data, userId) =>
        data?.filter((blog) => blog.user === userId) ?? emptyArray
    );
  }, []);

  const { userBlogs } = useGetBlogsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      userBlogs: selectUserBlogs(result, authorId),
    }),
  });

  return (
    <section>
      <h2>{author.fullname}</h2>
      {userBlogs.map((blog) => (
        <article
          key={blog.id}
          style={{ padding: "1rem" }}
          className="blog-excerpt"
        >
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
      ))}
    </section>
  );
};

export default AuthorPage;
