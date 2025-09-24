"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Count from "./count";

const Counter = () => {
  const [count, setCount] = useState(0);
  const router = useRouter()

  useEffect(() => {
    if (count === 5) {
      router.push("/");
    }
  }, [count]);

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
};
export default Counter;
