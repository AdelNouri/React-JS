"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="container">
        <h2> مشکلی پیش امده</h2>
        <button onClick={() => reset()}>تلاش مجدد</button>
    </div>
  );
}
