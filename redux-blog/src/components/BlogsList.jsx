import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { blogDeleted, selectAllBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionsButtons from "./ReactionsButtons";
import { useEffect } from "react";
import { fetchBlogs } from "../reducers/blogSlice";

const BlogsList = () => {
  const blogs = useSelector(selectAllBlogs);
  const blogStatus = useSelector((state) => state.blogs.status);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (blogStatus == "idle") {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  // for sorting blogs eith time

  // const orderedBlogs = blogs
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  const renderBlogs = [...blogs].reverse().map((blog) => (
    <article key={blog.id} style={{ padding: "1rem" }} className="blog-excerpt">
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
        onClick={() =>
          dispatch(
            blogDeleted({
              id: blog.id,
              title: blog.title,
              content: blog.content,
            })
          )
        }
        className="button muted-button"
      >
        delete blog
      </button>
    </article>
  ));

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
      {renderBlogs}
    </section>
  );
};

export default BlogsList;
