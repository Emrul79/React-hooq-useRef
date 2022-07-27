import React from 'react'

const Todo = (props) => {
    const { todo, id, onremovetodo } = props;

    const handleclick = (id) => {
        onremovetodo(id)
    }
  return (
      <div>
          <h1>title:{todo.title}</h1>
          <h6>description:{todo.description}</h6>
          <button onClick={() => {
              {handleclick(id)}
          }}>
              <i className='fa fa-2x fa-trash'></i>
          </button>
    </div>
  )
}

export default Todo