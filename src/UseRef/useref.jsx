import React, { useRef } from "react";

const Useref = () => {

    const usernameref = useRef();
    const passwordnameref = useRef();
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(usernameref.current.value);
          console.log(passwordnameref.current.value);
    }
  return (
    <form action="" onSubmit={handlesubmit}>
      <div>
        <label htmlFor="udername">Username:</label>
        <input type="text" id="usename" ref={usernameref} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordnameref} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Useref;
