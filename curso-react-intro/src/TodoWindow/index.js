import React from "react"
import "./TodoWindow.css"


function TodoWindow() {
    return (
        <div className="main-container">
        <div className="window-text">¡Crea una tarea!</div>
        <input className="input-container" placeholder=" " />
        <button className="create-button">Crear</button>
        </div>
    )
}

export { TodoWindow } 