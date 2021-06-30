import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './Component/TodoForm';
import TodoList from './Component/TodoList';

function App() {
 
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState ([]);
  const [status,setStatus] = useState ("all");
  const [filterTodos,setFilter] = useState ([]);
  
  useEffect(() => {
    filterHandler();

  },[todos,status]);

  const filterHandler =() =>{
    switch(status){
      case"completed":
      setFilter(todos.filter((todo)=>todo.completed===true));
      break;
      case"uncompleted":
      setFilter(todos.filter((todo)=>todo.completed===false));
      break;
      default:
      setFilter(todos);
      break;
      
      
      
    }
  }
  
  return (
    <div className="App">
      <header>My To-Dos</header>
      <Form  setStatus={setStatus}inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} />
     
    </div>
  );
}

export default App;
