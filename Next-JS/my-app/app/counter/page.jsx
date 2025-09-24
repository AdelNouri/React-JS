"use client";

import { useState } from "react";
import Count from "./count";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
};
export default Counter;
