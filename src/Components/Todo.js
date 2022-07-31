import React from "react";

function Todo({text, id}) {

    return(
        <div className="todo">
            <div className="todo-item">{text}</div>
            <div className="complete-btn"><i className="fas fa-check"></i></div>
            <div className="trash-btn"><i className="fas fa-trash"></i></div>
        </div>
        
    )
}

export default Todo