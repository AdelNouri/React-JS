import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBlogById } from "../reducers/blogSlice";
import ShowAuthor from "./ShowAuthor";
import ShowTime from "./ShowTime";

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const blog = useSelector((state) => selectBlogById(state, blogId));

  if (!blog) {
    return (
      <section>
        <h2>The post you are looking for does not exist</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="blog">
        <h2>{blog.title}</h2>

        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <ShowAuthor userId={blog.user} />
          <ShowTime timestamp={blog.date} />
        </div>

        <p className="blog-content">{blog.content}</p>
      </article>
    </section>
  );
};

export default SingleBlogPage;
