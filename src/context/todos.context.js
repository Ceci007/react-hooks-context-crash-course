import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: '1', task: 'walk the dog', completed: false },
  { id: '2', task: 'feed the dog', completed: false }
]

export const TodosContext = createContext();
export const DispatchTodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos} >
      <DispatchTodosContext.Provider value={dispatch} >
        { props.children }
      </DispatchTodosContext.Provider>
    </TodosContext.Provider>
  )
}
