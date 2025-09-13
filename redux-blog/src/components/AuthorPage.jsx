import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { deleteBlog, selectAllBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionsButtons from "./ReactionsButtons";

const AuthorPage = () => {
  const { authorId } = useParams();
  const author = useSelector((state) =>
    state.users.find((user) => user.id == authorId)
  );
  const authorBlogs = useSelector((state) => {
    const allBlogs = selectAllBlogs(state);
    return allBlogs.filter((blog) => blog.user == authorId);
  });

  console.log(authorBlogs);

  const blogTitles = authorBlogs.map((blog) => (
    <li key={blog.id}>
      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
    </li>
  ));

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
