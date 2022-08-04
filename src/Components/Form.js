import React from "react"

function Form({inputText, setInputText, todos, setTodos}) {
    const inputTextHandler = e => {
        setInputText(e.target.value)
        console.log(inputText)

    }

    const keyPressedHandler = e => {
        if(e.keyCode === 13) {
            e.preventDefault()
            submitTodoHandler(e)
        }
    }

    const submitTodoHandler = e => {
        e.preventDefault()
        setTodos([
            {text: inputText, isCompleted: false,id: Math.random()*10},
            ...todos
        ])
        setInputText("")
    }
    return(
        <form>
            <input type="text" className="todo-input" placeholder="Enter a todo" value={inputText}
            onChange={inputTextHandler} onKeyDown={keyPressedHandler} />
            <div className="todo-button" onClick={submitTodoHandler}>+</div>
        </form>
    )
}

export default Form