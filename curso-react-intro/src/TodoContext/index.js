import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        isLoading,
    } = useLocalStorage('TODOS_V1', [])
    
    const [searchValue, setSearchValue] = React.useState('');

    const [todoWindow, setTodoWindow] = React.useState(false)

    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
    );
    
    const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
    )
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
}
    const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1) 
    saveTodos(newTodos)
}

    return (
        <TodoContext.Provider value={{ 
            isLoading,
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            todoWindow,
            setTodoWindow,
            openModal,
            setOpenModal,
         }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }


// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))