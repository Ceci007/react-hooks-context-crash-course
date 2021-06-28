import React, { useContext } from 'react';
import { TodosContext } from './context/todos.context';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList() {
  const todos = useContext(TodosContext);

  if(todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo 
                {...todo}
                key={todo.id}
              />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    )
  }

  return null;
}

export default TodoList;