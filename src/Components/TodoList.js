import React from "react";
import Todo from "./Todo";

function TodoList({todos}) {
    console.log(todos)
    return(
        <div className="todo-container">
            {todos.map(
                todo => <Todo text={todo.text} id={todo.id} />)
            }
        </div>
    )
}

export default TodoList