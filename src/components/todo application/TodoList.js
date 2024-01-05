import React from 'react'

export default function TodoList({todos,deleteTodos,toggleTodos}) {
  return (
    <>
     <ul>
      {todos.map((todo)=>{
        return(
         <li key={todo.id}>
          <span style={todo.completed?{'text-decoration':'line-through'}:{'text-decoration':'none'}}>{todo.text} 
          </span> {/* on click action this text should be strike out so we keep it in a span and apply logic on the span */}
          <button onClick={()=>{toggleTodos(todo.id)}}>Toggle</button>
          <button onClick={()=>{deleteTodos(todo.id)}}>Delete</button>
         </li>
        )
      })}
     </ul>
    </>
  );
}
