import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="m-3 text-center bg mynavbar">
      <NavLink
        to="/"
        className="navitem p-2 m-4 bg-dark rounded-3 text-decoration-none  "
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className=" navitem p-2 m-4 bg-dark rounded-3 text-decoration-none "
      >
        Contact
      </NavLink>
      <NavLink
        to="/blog"
        className=" navitem p-2 m-4 bg-dark rounded-3 text-decoration-none"
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        className="navitem p-2 m-4 bg-dark rounded-3 text-decoration-none"
      >
        About
      </NavLink>
    </div>
  );
}

export default Navbar