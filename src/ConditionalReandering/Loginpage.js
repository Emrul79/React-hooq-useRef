import React from 'react'
import { ReactBootstrap } from '../components/Reactbootstrap/ReactBootstrap'

export default function Loginpage() {
  return (
    <div className='mydiv'>
      <h1>You have to login here first!</h1>
      <form action="login">
        <label htmlFor="name">Enter you name: </label>
        <input type="text" id='name' placeholder="your name" />
        <br />
        <br />
        <label htmlFor="email">Enter you email: </label>
        <input type="text" id='email' placeholder="your email" /><br /> <br />
        <label htmlFor="password">Enter you password: </label>
        <input type="password" id='password' placeholder="enter password" />
      </form>
    </div>
  );
}
