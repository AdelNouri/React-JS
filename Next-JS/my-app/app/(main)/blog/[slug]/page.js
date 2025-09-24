const Blog = ({ params }) => {
  return (
    <div>
      <h2>وبلاگ من</h2>
      <p> پست: {params.slug} </p>
    </div>
  );
};

export default Blog;
