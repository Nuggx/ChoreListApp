//Components
import Form from './components/Form'
import TodoList from './components/TodoList'
//Font Awesome components
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
//css
import './App.css';
import React, { useState, useEffect} from 'react'

library.add(fab,fas)

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once
  useEffect(() => {
    getLocalTodos();
  }, [])
  //use effect
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case "completed":
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    };
    filterHandler();
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos,status]);
  //functions
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <h1>What Chores Do You Need To Do Today?</h1>
      <Form
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus = {setStatus}
       />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos = {filteredTodos} />
    </div>
  );
}

export default App;
