import { useState  } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './components/AddTodo';
import {TodoData} from './components/TodoData'
import Todolist from './components/Todolist';
function App() {
const [todos , setTodo]=useState(TodoData)

const deletetodo =(todo)=>{
  const x = todos.filter(el=> el.id !== todo.id)
  setTodo([...x])

}

  return (
    <div className="App">
   <AddTodo />
   <Todolist todos={todos}  setTodo={setTodo}/>
  
    </div>
  );
}

export default App;
