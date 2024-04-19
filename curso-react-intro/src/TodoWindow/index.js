import React from "react"
import "./TodoWindow.css"
import { TodoContext } from "../TodoContext"


function TodoWindow() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    return (
    <form onSubmit={onSubmit} className="main-container">
        <div  className="box-container">
            <div className="window-text">¡Crea una tarea!</div>
            <textarea className="input-container" placeholder=" "
            value={newTodoValue}
            onChange={onChange} />
            <button type="submit"  className="create-button">Crear</button>
        </div>
    </form>
    )
}

export { TodoWindow } 