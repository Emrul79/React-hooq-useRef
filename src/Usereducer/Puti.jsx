import React,{useContext} from 'react'
import { Usercontext } from './useContext';
const Puti = () => {
    const {user,text} = useContext(Usercontext)
    console.log(user)
    return (
      <div>
        <h1>{user.id}. {text} <br /> {user.name}</h1>I am a puti!!!
      </div>
    );
};

export default Puti