import React, { useEffect, useState } from 'react'
import useCustomHoq from './useCustomHoq';


const Useeffect = () => {
  const { deta, isloading, err } = useCustomHoq("https://jsonplaceholder.typicode.com/todos");

  const mydetas =
    deta && deta.map(todo => {
      return <p key={todo.id}> {todo.title} </p>
    });
  const lodingMassage= <p>wait a moment please.....</p>
  const errmassage = <p>{err}</p>
  return (
    <div>
      <h1>Todo</h1>
      {
        isloading && lodingMassage
      }
      {
        err && errmassage
      }
      {
        mydetas
      }
    </div>
  )
}

export default Useeffect