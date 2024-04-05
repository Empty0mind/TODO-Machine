import React from 'react';
import './TodoCounter.css';

function LoadingView() {

  return (
    <h1 className="TodoCounter">
      Cargando lista de tareas    
    </h1>
  )
}

function TodoCounter({ total, completed }) {


    return (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
  );

}


export { TodoCounter, LoadingView };
