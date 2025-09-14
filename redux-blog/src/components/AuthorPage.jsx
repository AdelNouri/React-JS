import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { deleteBlog, selectAuthorBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionsButtons from "./ReactionsButtons";
import { selectAuthorById } from "../reducers/userSlice";

const AuthorPage = () => {
  const { authorId } = useParams();
  const author = useSelector((state) => selectAuthorById(state, authorId));
  const authorBlogs = useSelector((state) =>
    selectAuthorBlogs(state, authorId)
  );

  return (
    <section>
      <h2>{author.fullname}</h2>
      {authorBlogs.map((blog) => (
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
