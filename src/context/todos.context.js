import React, { createContext } from 'react';
import todosReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: '1', task: 'walk the dog', completed: false },
  { id: '2', task: 'feed the dog', completed: false }
]

export const TodosContext = createContext();
export const DispatchTodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todosReducer);

  return (
    <TodosContext.Provider value={todos} >
      <DispatchTodosContext.Provider value={dispatch} >
        { props.children }
      </DispatchTodosContext.Provider>
    </TodosContext.Provider>
  )
}
