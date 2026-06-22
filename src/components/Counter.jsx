import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        Click
      </button>
    </div>
  );
}

export default Counter;
