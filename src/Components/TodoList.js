import React from "react";
import Todo from "./Todo";

function TodoList({todos, setTodos}) {
    console.log(todos)
    return(
        <div className="todo-container">
            {todos.map( todo =>
            <Todo text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />)
            }
        </div>
    )
}

export default TodoList