import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { DispatchTodosContext } from './context/todos.context';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchTodosContext);

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", task: value });
    reset();
  }

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }} >
      <form onSubmit={onSubmit}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          margin="normal" 
          label="Add new todo" 
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm;