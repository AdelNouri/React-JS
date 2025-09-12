import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const blog = useSelector((store) =>
    store.blogs.find((blog) => blog.id == blogId)
  );

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
        <p className="blog-content">{blog.content}</p>
      </article>
    </section>
  );
};

export default SingleBlogPage;
