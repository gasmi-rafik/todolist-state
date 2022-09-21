import React from 'react'
import TodoCard from './TodoCard'

const Todolist = ({todos , setTodo}) => {

  return (
    <div>
       {
           todos.map(el=> <TodoCard todo={el} todos={todos} setTodo={setTodo} />)
       }
    </div>
  )
}

export default Todolist