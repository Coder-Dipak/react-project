import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

let todoArr=[
  {id:1,text:'todo-1',completed:false},
  {id:2,text:'todo-2',completed:true},
  {id:3,text:'todo-3',completed:false},
  {id:4,text:'todo-4',completed:true},
]

//this is the main/parent component in which we will maintain the data n all
export default function TodoParent() {
  const [todos,SetTodos]=useState(todoArr);

  const deleteTodos=(id)=>{  //as this is a parameterized function we have to call thorough arrow function
    // console.log(id);
    let filteredTodos=todos.filter((todo)=>todo.id !== id)
    // console.log(filteredTodos);
    SetTodos([...filteredTodos]);
  } 

  const toggleTodos=(id)=>{ 
  let modifiedTodo=todos.map((todo)=>{
         if(todo.id===id){todo.completed= !todo.completed}
         return todo;});
  SetTodos([...modifiedTodo])
  } 

  const AddTodo=(todoObj)=>{ 
    // todos.push(todoObj);
    SetTodos([...todos,todoObj])
    }



  return <>
  <h1 className='text-center'>Todo CRUD example</h1>
  <div className='row'>
    <div className='col-8'>
       <TodoList todos={todos} deleteTodos={deleteTodos} toggleTodos={toggleTodos}/>
    </div>
    <div className='col-4'>
       <TodoAdd AddTodo={AddTodo}/>
    </div>

  </div>
  </>
}
