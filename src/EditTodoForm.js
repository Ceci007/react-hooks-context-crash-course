import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TodosContext } from './context/todos.context';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(TodosContext);

  const onSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
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