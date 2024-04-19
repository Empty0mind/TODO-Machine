import React from "react"
import "./TodoWindow.css"


function TodoWindow() {
    return (
    <form onSubmit={(event) => {
        event.preventDefault()
    }} className="main-container">
        <div  className="box-container">
            <div className="window-text">¡Crea una tarea!</div>
            <textarea className="input-container" placeholder=" " />
            <button type="submit"  className="create-button">Crear</button>
        </div>
    </form>
    )
}

export { TodoWindow } 