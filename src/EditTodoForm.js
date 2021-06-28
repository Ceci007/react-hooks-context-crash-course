import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { DispatchTodosContext } from './context/todos.context';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchTodosContext);

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "EDIT_TODO", id, newTask: value });
    reset();
    toggleEditForm();
  }

  return (
    <form onSubmit={onSubmit} style={{
      marginLeft: "1rem",
      width: "80%"
    }} >
      <TextField 
        margin="normal" 
        value={value} 
        onChange={handleChange} 
        fullWidth 
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm;