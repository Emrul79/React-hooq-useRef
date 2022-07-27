import React, { useState } from "react";

const Singlefaq = (props) => {
  const { id, title, description } = props;
  const [toggole, settoggole] = useState(false);
    const handleClick = () => {
        settoggole(!toggole)
    }
  return (
    <article className="article">
      <div className="faq">
        <h4> {id}. {title}</h4>
              <button className="btn" onClick={handleClick}>
                  {toggole? "-":"+"}
        </button>
      </div>
     {toggole && <p> {description} </p>}
    </article>
  );
};

export default Singlefaq;
