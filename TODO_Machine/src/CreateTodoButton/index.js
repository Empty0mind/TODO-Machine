import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton() {

  const {
    todoWindow,
    setTodoWindow,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          if(!todoWindow && !openModal) {
            setOpenModal(true)
            setTodoWindow(true)
            document.body.style.overflow = "hidden;"
          } else {
            setOpenModal(false)
            setTodoWindow(false)
          }

        console.log('click funciona');
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
