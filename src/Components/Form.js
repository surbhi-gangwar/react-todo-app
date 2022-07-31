import React from "react"

function Form({inputText, setInputText, todos, setTodos}) {
    const inputTextHandler = e => {
        setInputText(e.target.value)
        console.log(inputText)

    }

    const keyPressedHandler = e => {
        if(e.keyCode === 13) {
            submitTodoHandler()
        }
    }

    const submitTodoHandler = e => {
        e.preventDefault()
        const currentDate = new Date()
        setTodos([
            ...todos,
            {text: inputText, isCompleted: false, date: currentDate, id: currentDate.getTime()+"-"+inputText}
        ])
        setInputText("")
    }
    return(
        <form>
            <input type="text" className="todo-input" placeholder="Enter a todo" value={inputText}
            onChange={inputTextHandler} onKeyPress={keyPressedHandler} />
            <div className="todo-button" onClick={submitTodoHandler}>+</div>
        </form>
    )
}

export default Form