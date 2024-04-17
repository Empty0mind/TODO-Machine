import React from 'react';
import { TodoCounter, LoadingView } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoWindow } from '../TodoWindow';
import { TodoContext } from '../TodoContext';


function AppUI() {

  const {
    isLoading, 
    loading,
    error,
    deleteTodo,
    searchedTodos,
    completeTodo,
    todoWindow,
    openModal,
    // setOpenModal
  } = React.useContext(TodoContext)
   
    return (
        <>
        {isLoading ? (<LoadingView />) : (
          <TodoCounter
        />)}
        

      <TodoSearch
      />
      
      <TodoList>
      {loading &&
          <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
      </>}
      {error && <TodosError />}
      {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
      
      {searchedTodos.map(todo => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={ () => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      </TodoList>
      <CreateTodoButton />

      {CreateTodoButton && todoWindow && <TodoWindow />}

      {CreateTodoButton && openModal &&
      <Modal>
      React portal en funcionamiento
      </Modal>
      }
        </>
    )
}

export { AppUI }