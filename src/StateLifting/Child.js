import React from 'react'

export default function Child(props) {

    const data2 = 'i am from Child(child.js)';
    props.onData(data2);
  return (
      <div>
          <h1>I am Child Component</h1>
          <h3>{ props.data}</h3>
    </div>
  )
}
