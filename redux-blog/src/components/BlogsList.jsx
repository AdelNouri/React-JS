import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const BlogsList = () => {
  const blogs = useSelector((state) => state.blogs);
  const navigate = useNavigate();

  const renderBlogs = blogs.map((blog) => (
    <article key={blog.id} style={{padding: "1rem"}} className="blog-excerpt">
      <h3>{blog.title}</h3>
      <p className="blog-content">{blog.content.substring(0, 100)}</p>
      <Link to={`/blogs/${blog.id}`} className="button muted-button">
        visit post
      </Link>
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
