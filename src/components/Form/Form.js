import React, { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const handleNameField = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmitBtn = (e) => {
   
     e.preventDefault();
    let person = {
      name,
      email,
      password,
    };
    console.log(person);
  };

  var fieldset = document.getElementById("password");
  let check = document.getElementById('check');
  const showPass=()=> {
    if (fieldset.type === "password") {
      fieldset.type ="text";
    } else {
      fieldset.type = "password";
    }
  };
 

  return (
    <div>
      <form action="" onSubmit={handleSubmitBtn}>
        <div className="p-3 ">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="enter name"
            name="name"
            required
            onChange={handleNameField}
          />
        </div>
        <div className="p-3 ">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="enter email"
            name="email"
            required
            onChange={handleNameField}
          />
        </div>
        <div className="p-3 ">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="enter password"
            name="password"
            required
            onChange={handleNameField}
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Sing In
        </button>
        <input type="checkbox" name="check" id="check" onClick={showPass} />{" "}
        Show password
      </form>
    </div>
  );
}
