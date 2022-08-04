import React from "react";

function Todo({text, setTodos, todos, todo}) {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completedHandler = () => {
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                return{
                     ...el, iscompleted : !el.iscompleted
                }
                
            }
            return el
        }))
    }

    return(
        <div className="todo">
            <div className={`todo-item ${todo.iscompleted ? "completed" : "" }`} >{text}</div>
            <div className="complete-btn" onClick={completedHandler}><i className="fas fa-check"></i></div>
            <div className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></div>
        </div>
        
    )
}

export default Todo