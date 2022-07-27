import React, { useState } from "react";

const Toggole = () => {
  const[toggole,settoggole]=useState(true)
        // const handleClick2 = () => {
        //   settoggole(false);
        // };
    const handleClick = () => {
        settoggole(!toggole)
    }
  return (
    <div
      className="text-center"
      style={{
        margin: "2rem",
        padding: "5rem",
        backgroundColor: "red",
        color: "black",
      }}
    >
      {toggole && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          alias obcaecati esse sed laboriosam aperiam animi illo ducimus dicta
          iusto porro quae debitis dolorum necessitatibus minima veritatis
          magni, explicabo fugiat?
        </p>
      )}
      <button onClick={handleClick}>{toggole ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Toggole;
