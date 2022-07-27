import React, { useState } from "react";

export default function Hooq() {
  const [count, setCount] = useState(0);

  const incrementFunction = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrementFunction = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <div>
      <h1>your increment is here: {count}</h1>
      <button className="btn btn-primary m-3" onClick={incrementFunction}>
        Increment
      </button>
      <button
        className="btn btn-danger m-3"
        disabled={count <= 0 ? true : false}
        onClick={decrementFunction}
      >
        decrement
      </button>
    </div>
  );
}
