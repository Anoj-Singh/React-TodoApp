import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList";


const getTodosFromLocal = () => {
  if(localStorage.getItem("todos") === null){
    return [];
  }
  else{
    return JSON.parse(localStorage.getItem("todos"));
  }
}

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getTodosFromLocal());

  const saveTodosToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  useEffect(() => {
    saveTodosToLocal()
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
