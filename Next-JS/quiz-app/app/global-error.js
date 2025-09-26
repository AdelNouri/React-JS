"use client"; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  console.log(error);
  return (
    <html>
      <body>
        <div className="container">
          <h2> مشکلی پیش امده</h2>
          <button onClick={() => reset()}>تلاش مجدد</button>
        </div>
      </body>
    </html>
  );
}
