// app/posts/[...blog]/page.js

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json());

  // فقط یه آرایه به اسم blog برمی‌گردونیم
  return posts.map((post) => ({
    blog: [String(post.id)], // مثلا فقط id رو بفرستیم
  }));
}

const Blog = ({ params }) => {
  console.log("Server Params:", JSON.stringify(params));
  // یا
  console.log("Server Params:", { ...params });

  return (
    <div>
      <h3>وبلاگ من</h3>
      <h4>{params.blog?.[1]} اولین پست :</h4>
    </div>
  );
};


export default Blog;
