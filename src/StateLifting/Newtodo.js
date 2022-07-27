import React, { useState } from "react";

const Newtodo = (props) => {
  const { newdeta } = props;
  const [newtodo, setnewtodo] = useState({
    title:"",description:""
  });
  
  const { title, description } = newtodo;
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(newtodo);
    setnewtodo({title: '',description:''});
    newdeta(newtodo);
  };
  const handlechange = (e) => {
    const name = e.target.name;
    setnewtodo({...newtodo,[name]: e.target.value})
}
  return (
    <section>
      <form action="" onSubmit={handlesubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handlechange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handlechange}
          />
        </div>
        <button type="submit">Add post</button>
      </form>
    </section>
  );
};

export default Newtodo;
