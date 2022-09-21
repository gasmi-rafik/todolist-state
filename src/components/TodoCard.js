import React from 'react'

const TodoCard = ({todo , setTodo , todos}) => {
  
    const deletetodo =()=>{
        const x = todos.filter(el=> el.id !== todo.id)
        setTodo([...x])
      
      }

    const handleComplete =()=>{
        const x = todos.map(el=>el.id==todo.id ?{...el , isComplete : !el.isComplete} : el )
        setTodo([...x])
     
    }  
    
 
  return (
    <div className='d-flex justify-content-center mb-3'>
        <h4>{todo.isComplete ?  <span style={{textDecoration:"line-through"}}>{todo.text} </span> : <span>{todo.text} </span>}</h4> 
        <button className='btn btn-light' onClick={()=>handleComplete()}>✅</button>
        <button className='btn btn-danger'onClick={()=>deletetodo()} >♲</button>
        <hr/>
    </div>
  )
}

export default TodoCard