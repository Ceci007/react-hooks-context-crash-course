import React, { useContext, memo } from 'react';
import useToggleState from './hooks/useToggleState';
import { DispatchTodosContext } from './context/todos.context';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton  from '@material-ui/core/IconButton';
import DeleteIcon  from '@material-ui/icons/Delete';
import EditIcon  from '@material-ui/icons/Edit';
import ListItemSecondaryAction  from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const dispatch = useContext(DispatchTodosContext);
  console.log('Render component', id);

  return (
    <ListItem style={{ height: "64px" }}>
      { isEditing ? 
        <EditTodoForm 
          id={id} 
          task={task}
          toggleEditForm={toggleIsEditing} 
        /> :
        <>
          <Checkbox 
            tabIndex={-1} 
            checked={completed} 
            onClick={() => dispatch({ type: "TOGGLE_TODO", id })} 
          />
          <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
            { task }
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton 
              aria-label="Delete" 
              onClick={() => dispatch({ type: "REMOVE_TODO", id})} >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing} >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  )
}

export default memo(Todo);