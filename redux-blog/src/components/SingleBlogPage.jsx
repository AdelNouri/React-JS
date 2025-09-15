import { useParams } from "react-router-dom";
import ShowAuthor from "./ShowAuthor";
import ShowTime from "./ShowTime";
import { useGetBlogQuery } from "../api/apiSlice";
import Spinner from "./Spinner";

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const {
    data: blog,
    isFetching,
    isSuccess,
    isError,
  } = useGetBlogQuery(blogId);

  if (isError) {
    return (
      <section>
        <h2>The post you are looking for does not exist</h2>
      </section>
    );
  }

  let content;

  if (isFetching) {
    content = <Spinner text="Loading ..." />;
  } else if (isSuccess) {
    content = (
      <article className="blog">
        <h2>{blog.title}</h2>

        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <ShowAuthor userId={blog.user} />
          <ShowTime timestamp={blog.date} />
        </div>

        <p className="blog-content">{blog.content}</p>
      </article>
    );
  } else if (isError) {
    content = <h2>The post you are looking for does not exist</h2>;
  }

  return <section>{content}</section>;
};

export default SingleBlogPage;
