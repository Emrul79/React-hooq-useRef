import React, { useState } from 'react'
import Todos from './Todos'
import Newtodo from './Newtodo'
import {v4 as uuidv4} from "uuid"
// const myObj = [
//   {
//     id: 1,
//     title: "this is first Title",
//     description: "this is a simple description,and is for id one.",
//   },
//   {
//     id: 2,
//     title: "this is two Title",
//     description: "this is a simple description,and is for id two.",
//   },
// ];

const Home = () => {
    const [Dummytodos, setDummytodos] = useState([]);
const recivedeta = (deta) => {
  setDummytodos([...Dummytodos, { id: uuidv4(), deta }])
  console.log(Dummytodos);
  };
  const handleremovetodo = (id) => {
    const filtered = Dummytodos.filter((filtertodo) => filtertodo.id !== id);
    setDummytodos(filtered)
  }
  return (
    <div>
      <Newtodo newdeta={recivedeta} />
      <Todos Dummytodos={Dummytodos} onremovetodo={handleremovetodo} />
    </div>
  );
}

export default Home
