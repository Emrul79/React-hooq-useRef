import React from 'react'
import Todo from './Todo';
const Todos = (props) => {
    const { Dummytodos } = props;
    const { onremovetodo } = props;
 
  return (
    <div>
      {Dummytodos.map((todo, index) => (
        <Todo
          key={index}
          onremovetodo={onremovetodo}
          id={todo.id}
          todo={todo.deta}
        />
      ))}
    </div>
  );
}

export default Todos