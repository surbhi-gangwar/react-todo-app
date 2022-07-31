import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>Todo List App</header>
      <Form inputText = {inputText} setInputText = {setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
